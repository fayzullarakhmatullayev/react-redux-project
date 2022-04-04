import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} exact />
        <Route path="/product/:productId" exact element={<ProductDetails />} />
        <Route>404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
