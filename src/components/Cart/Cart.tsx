/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id: number) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: any) => {
    cartCtx.addItem({...item, amount:1});
  };

  
  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          description={item.description}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <div className="text-center bg-white-400">
      {cartItems}
      <div>
        <span>Total amount:</span>
        <span>{totalAmount}</span>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
