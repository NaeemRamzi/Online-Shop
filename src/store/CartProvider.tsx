import React, { PropsWithChildren, useReducer } from "react";
import CartContext from "./cart-context";
import ITypes from "../components/Interface/types";

type contextType = {
  items: ITypes[];
  totalAmount: number;
  addItem: (item: ITypes) => void;
  removeItem: (id: number) => void;
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state: any, action: any) => {
  if( action.type === "ADD" ){
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount
    };
  }
  return defaultCartState;
};
// mainFN
const CartProvider: React.FC<PropsWithChildren> = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item: ITypes) => {
    dispatchCartAction({type:"ADD", item:item});
  };

  const removeItemFromCartHandler = (id: number) => {
    dispatchCartAction({type:"ADD", id:id});
  };

  const cartContext: contextType = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
