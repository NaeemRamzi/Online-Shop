import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Cart from "./components/Cart/Cart";
import ImgCardHandler from "./components/ImgCard/ImgCardHandler";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ImgCardHandler />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
