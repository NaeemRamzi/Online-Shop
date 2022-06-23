import React from "react";
import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <table className="table-fixed w-full mt-16 border-2 text-center">
  <thead>
    <tr className="bg-gray-300" >
      <th className="p-5">Number</th>
      <th className="p-5">Title</th>
      <th className="p-5">Descrption</th>
      <th className="p-5">Quantity</th>
      <th className="p-5">Price</th>
      <th className="p-5">Total Price</th>
    </tr>
  </thead>
  <tbody className="p-5">
    <tr className="bg-white-400" >
      <td className="p-5">1</td>
      <td className="p-5">Product 1 </td>
      <td className="p-5">descrption</td>
      <td className="p-5">1</td>
      <td className="p-5">0.0$</td>
      <td className="p-5">0.0$</td>
    </tr>
    <tr>
      <td className="p-5">2</td>
      <td className="p-5">Product 2</td>
      <td className="p-5">descrption</td>
      <td className="p-5">1</td>
      <td className="p-5">0.0$</td>
      <td className="p-5">0.0$</td>
    </tr>
    <tr className="bg-white-400">
      <td className="p-5">3</td>
      <td className="p-5">Product 3</td>
      <td className="p-5">descrption</td>
      <td className="p-5">1</td>
      <td className="p-5">0.0$</td>
      <td className="p-5">0.0$</td>
    </tr>
    <tr>
      <td className="p-5">Total</td>
      <td className="p-5"></td>
      <td className="p-5"></td>
      <td className="p-5"></td>
      <td className="p-5"></td>
      <td className="p-5">0.0$</td>
    </tr>
  </tbody>
</table>
  );
};

export default Cart;
