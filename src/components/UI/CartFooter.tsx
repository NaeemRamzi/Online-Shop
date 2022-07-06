import React, { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";

const CartFooter = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `${cartCtx.totalAmount.toFixed(0)}`;
  return (
    <Fragment>
      <tr className="flex justify-between w-full bg-white-100 font-bold ">
        <th className="p-5">
          <h1 className="border-b-2 border-red-100">Total</h1>
        </th>
        <th className="p-3 mr-5 ">
          <h1 className="bg-gray-200 p-2 rounded">{totalAmount}$</h1>
        </th>
      </tr>
    </Fragment>
  );
};

export default CartFooter;
