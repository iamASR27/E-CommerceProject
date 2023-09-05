import { useState, useRef, useContext } from 'react';
import { useHistory } from "react-router-dom";

import './Login.css';
import AuthContext from '../store/auth-context';
import CartContext from '../store/cart-context';


const Login = () => {
  const history = useHistory();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);

  const switchLoginModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  

  const submitHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAb_f6VixqcxZaDfMcJdFHRxVW6ojoU_iE";
     
    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAb_f6VixqcxZaDfMcJdFHRxVW6ojoU_iE";
     
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const data = await response.json();
        authCtx.login(data.idToken, enteredEmail);
        history.replace("/product");
        console.log(data);

      
        cartCtx.fetchCartItems();
        
       
      } else {
        const data = await response.json();
        let errorMessage = "Authentication Failed";
        if(data && data.error && data.error.message){
          errorMessage = data.error.message;
        }
        throw new Error(errorMessage);
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <section className="auth">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className="control">
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passwordInputRef}
            required
          />
        </div>
        <div className="actions">
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request....</p>}
          <button
            type='button'
            className="toggle"
            onClick={switchLoginModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
