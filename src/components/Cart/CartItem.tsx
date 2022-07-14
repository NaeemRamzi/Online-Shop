/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { Fragment, useEffect, useState, useContext } from "react";
import Delete from "../../assets/delete.png";
import axios, { Axios } from "axios";
import CartContext from "../../store/cart-context";

const CartItem = ({
  id,
  number,
  title,
  amount,
  price,
  description,
  onRemove,
  onAdd,
  onDelete,
}: any) => {
  // const price = `$${props.price.toFixed(2)}`;
  const [product, setProduct] = useState();

  const { removeItem } = useContext(CartContext);

  return (
    <Fragment>
      <tbody className="table-auto w-full  flex justify-between   bg-white-400 odd:bg-gray-400 even:bg-white-100 border-b-2 border-black-100">
        <div className="flex justify-between w-full  border-black-100 ">
          <td className="p-5 text-center xl:ml-5 lg:ml-4 md:ml-4 hover:underline">
            {number + 1}
          </td>
          <td className="p-5 truncate w-48 font-semibold xl:ml-16 lg:ml-14 md:ml-12 ">
            {title}
          </td>
          <td className="p-5 truncate w-48 font-normal  ">{description}</td>
          <td className="p-5 xl:mr-5 lg:mr-5 mr-5">
            <div className=" flex font-semibold ">
              <button
                onClick={onRemove}
                className="w-7 h-7 text-white-100  rounded-full  bg-red-100  mr-1"
              >
                −
              </button>
              <h1>{amount}</h1>
              <button
                onClick={onAdd}
                className="w-7 h-7 text-white-100  rounded-full  bg-blue-200 ml-1"
              >
                +
              </button>
            </div>
          </td>
          <td className="p-5  w-20 xl:mr-14 lg:mr-12 md:mr-10">{price}$</td>
          <td className="flex p-5  w-20 font-bold xl:mr-14 lg:mr-3 md:mr-3">
            {price.toFixed(0) * amount.toFixed(0)}$
          </td>
          <td className="p-5 lg:mr-4">
            <button onClick={onDelete} className="ml-2 text-red-100">
              <img src={Delete} />
            </button>
          </td>
        </div>
      </tbody>
    </Fragment>
  );
};

export default CartItem;
