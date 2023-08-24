import React from "react";
import Header from "./components/Header/Header";
import HomePage from "./Pages/HomePage";
import AboutPage from  "./Pages/AboutPage";
// import Title from "./components/Title/Title";
import FooterTitle from "./components/Title/FooterTitle";
// import ProductList from "./components/Products/ProductList";
import CartProvider from "./components/store/CartProvider";
import Title from "./components/Title/Title";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './App.css';


function App() {
  return (
    <CartProvider>
      <Router>
      <Header />
      <Title />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
      <FooterTitle />
      </Router>
    </CartProvider>
  );
}

export default App;
