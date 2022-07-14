/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

import CartFooter from "../UI/CartFooter";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id: number) => {
    cartCtx.removeItem(id);
  };

  const cartItemDeleteHandler = (id: number) => {
    cartCtx.deleteItem(id);
  };

  const cartItemAddHandler = (item: any) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

 

  const cartItems = (
    <div>
      {cartCtx.items.map((item, i) => (
        <>
          <CartItem
            number={i}
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            price={item.price}
            description={item.description}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
            onDelete={cartItemDeleteHandler.bind(null,item.id)}
          />
          
        </>
      ))}
    </div>
  );
  return (
    <div className=" border-2 m-2 border-black-100">
      <tr className="flex justify-between w-full bg-white-300 font-bold border-b-2 border-black-100 whitespace-nowrap">
        <th className="p-5">Number</th>
        <th className="p-5 line-clamp-1 w-48 font-semibold ">Title</th>
        <th className="p-5">Description</th>
        <th className="p-5">Quantity</th>
        <th className="p-5">Price</th>
        <th className="p-5">Total Price</th>
      </tr>
      <div>{cartItems}</div>
      <CartFooter />
    </div>
  );
};

export default Cart;
