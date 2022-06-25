import React from "react";

const Cart = () => {
  const random = Math.random();
  const cartItems = <ul>{[
    {
      id: 1,
      name: "brown jacket",
      description: "a warm jacket",
      amount: 2,
      price: 19.99,
    },
  ].map((item) => <li key={random}>{item.name}</li>)}</ul>;
  return (
    <div className="text-center bg-white-400">
      {cartItems}
      <div>
        <span>Total amount:</span>
        <span>57.29</span>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
