/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CartTable from "../UI/CartTable";
import CartFooter from "../UI/CartFooter";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id: number) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item: any) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <div>
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
    </div>
  );
  return (
    <div className=" border-2 m-2 border-black-100">
      <CartTable />
      <div> {cartItems} </div>
      <CartFooter />
    </div>
  );
};

export default Cart;
