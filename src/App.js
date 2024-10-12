import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ContactMe from "./components/ContactUs/ContactMe";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { useState, useEffect } from "react";
// import CartContext from './Contexts/CartContext';
import Cart from "./components/Cart/Cart";
import CartContext, { CartProvider } from "./Contexts/CartContext";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer theme="dark" />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
