import React, { Fragment,useContext } from "react";
import CartContext from "../../store/cart-context";

const CartFooter = () => {
    const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  return (
    <Fragment>
      <tr className="flex justify-between w-full bg-white-100 font-bold ">
        <th className="p-5">Total</th>

        <th className="p-5">{totalAmount}</th>
      </tr>
    </Fragment>
  );
};

export default CartFooter;
