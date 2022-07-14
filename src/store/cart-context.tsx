/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import ITypes from "../components/Interface/types";

type contextType = {
    items: ITypes[];
    totalAmount: number;
    addItem: (item: ITypes) => void;
    removeItem: (id: number) => void;
    deleteItem:(id:number) => void;
  };

const CartContext = React.createContext<contextType>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  deleteItem: () =>{},
});

export default CartContext;
