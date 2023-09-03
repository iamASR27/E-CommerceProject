import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import StorePage from "./Pages/StorePage";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import FooterTitle from "./components/Title/FooterTitle";
import ProductPage from "./Pages/ProductPage";
import AuthContext from "./components/store/auth-context";
import ChangePassword from "./components/Login/ChangePassword";
import Login from "./components/Login/Login";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/store" />
        </Route>
        <Route path="/store" exact component={StorePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        {authCtx.isLoggedIn && <Route path="/product" component={ProductPage} />}
        {!authCtx.isLoggedIn && (
          <Route path="/login">
            <Login />
          </Route>
        )}
        <Route path="/password">
          {authCtx.isLoggedIn && <ChangePassword />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <FooterTitle />
    </>
  );
}

export default App;
