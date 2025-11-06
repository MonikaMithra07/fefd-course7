import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import { Provider, useSelector } from "react-redux";
import store from "./store";

function Header() {
  const count = useSelector((s) => s.count);
  return (
    <header style={{ background: "#d9f7d9", padding: "10px" }}>
      <Link to="/products">Products</Link> |{" "}
      <Link to="/cart">Cart 🛒({count})</Link>
    </header>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
