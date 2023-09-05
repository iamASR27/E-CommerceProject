import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext({
  token: "",
  userEmail: "",
  isLoggedIn: false,
  login: (token, userEmail) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const history = useHistory();
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const initialUserEmail = localStorage.getItem("userEmail");
  const [userEmail, setUserEmail] = useState(initialUserEmail);


  useEffect(() => {
    
    let id = null;
    if (token) {
      id = setTimeout(() => {
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("userEmail");
        history.replace("/login");
      }, 300000);
    }
    return () => {
      clearTimeout(id);
    };
  }, [token, history]);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, userEmail) => {
    setToken(token);
    setUserEmail(userEmail);
    localStorage.setItem("token", token);
    localStorage.setItem("userEmail", userEmail);
  };

  const logoutHandler = () => {
    setToken(null);
    setUserEmail("");
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
};

  const contextValue = {
    token: token,
    userEmail: userEmail,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
