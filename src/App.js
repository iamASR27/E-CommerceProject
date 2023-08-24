import React from "react";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import FooterTitle from "./components/Title/FooterTitle";
import ProductList from "./components/Products/ProductList";
import CartProvider from "./components/store/CartProvider";
// import './App.css';

function App() {
  return (
    <CartProvider>
      <Header />
      <Title />
      <ProductList />
      <FooterTitle />
    </CartProvider>
  );
}

export default App;
