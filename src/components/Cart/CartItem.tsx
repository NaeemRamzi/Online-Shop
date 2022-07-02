import React, { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";

const CartItem = (props: any) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  

  return (
    <Fragment>
      <div className=" w-full flex justify-around   bg-white-400 odd:bg-gray-400 even:bg-white-100 border-b-2 border-black-100">
        <div className="p-5 ml-5  ">
          <h1>1</h1>
        </div>

        <div className="p-5  w-2/12">
          <h1 className="text-left line-clamp-1 w-48 ml-36 font-semibold">{props.title}</h1>
        </div>
        <div className=" p-5  w-2/12">
          <p className="text-left line-clamp-1 w-56 ml-44 font-normal">{props.description}</p>
        </div>
        <div className="p-5 flex  w-2/12 ml-64 font-semibold">
          <button onClick={props.onRemove} className="w-7 h-7 text-white-100  rounded-full  bg-red-100 ml-5 mr-1">−</button>
          <h1>{props.amount}</h1>
          <button onClick={props.onAdd} className="w-7 h-7 text-white-100  rounded-full  bg-blue-200 ml-1">+</button>
        </div>
        <div className="p-5 w-2/12 ml-44">
          <h1> {price}</h1>
        </div>
        <div className="p-5 w-2/12 ml-44 font-bold">
          <h1> {price}</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
