import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import StorePage from './Pages/StorePage';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import FooterTitle from './components/Title/FooterTitle';
import CartProvider from './components/store/CartProvider';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/store" />
          </Route>
          <Route path="/store" exact component={StorePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/product" component={ProductPage} />
        </Switch>
        <FooterTitle />
      </Router>
    </CartProvider>
  );
}

export default App;
