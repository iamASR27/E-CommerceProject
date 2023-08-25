import React from "react";
import Header from "./components/Header/Header";
import StorePage from "./Pages/StorePage";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
// import Title from "./components/Title/Title";
import FooterTitle from "./components/Title/FooterTitle";
// import ProductList from "./components/Products/ProductList";
import CartProvider from "./components/store/CartProvider";
// import Title from "./components/Title/Title";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<StorePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        <FooterTitle />
      </Router>
    </CartProvider>
  );
}

export default App;
