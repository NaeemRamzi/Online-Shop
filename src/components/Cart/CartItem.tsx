import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props:any) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div className="text-left">
        <span className="flex"><h1 className="font-bold mr-2">Title:</h1><h2>{props.title}</h2></span>
        <span className="flex"><h1 className="font-bold">Description:</h1><p className="ml-2  line-clamp-1">{props.description}</p></span>
        <div className={classes.summary}>
          <span className={classes.price}>Price: {price}</span>
          <span className={classes.amount}>Amount: {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
