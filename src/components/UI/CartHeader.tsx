import React, { Fragment } from "react";

const CartHeader = () => {
  return (
    <Fragment>
      <thead>
        <tr className="flex justify-between w-full bg-white-300 font-bold border-b-2 border-black-100 ">
          <th className="p-5">Number</th>
          <th className="p-5">Title</th>
          <th className="p-5">Description</th>
          <th className="p-5">Quantity</th>
          <th className="p-5">Price</th>
          <th className="p-5">Total Price</th>
        </tr>
      </thead>
    </Fragment>
  );
};

export default CartHeader;
