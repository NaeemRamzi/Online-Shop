/* eslint-disable react/prop-types */
import React, { PropsWithChildren } from "react";
import CartContext from "./cart-context";
import ITypes from "../components/Interface/types";

type contextType  = {
  items: ITypes[];
  totalAmount: number[];
  addItem: (item: ITypes) => void;
  removeItem: (id: number) => void;
};

const CartProvider: React.FC<PropsWithChildren> = (props) => {
  const addItemToCartHandler = (item: ITypes) => {
    return;
  };

  const removeItemFromCartHandler = (id: number) => {
    return;
  };

  const cartContext: contextType = {
    items: [],
    totalAmount: [0],
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
