import React,{useContext} from "react";
import CartContext from "../../store/cart-context";

const Cart = () => {

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const random = Math.random();
  const cartItems = <ul>{cartCtx.items.map((item) => <li key={random}>{item.title}</li>)}</ul>;
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
