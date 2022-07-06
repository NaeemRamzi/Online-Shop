import React, { Fragment } from "react";

const CartItem = (props: any) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Fragment>
      <tbody className="table-auto w-full  flex justify-between   bg-white-400 odd:bg-gray-400 even:bg-white-100 border-b-2 border-black-100">
        <div className="flex justify-between w-full  border-black-100 ">
          <td className="p-5 text-center xl:ml-5 lg:ml-4 md:ml-4 hover:underline">
            {props.number + 1}
          </td>
          <td className="p-5 truncate w-48 font-semibold xl:ml-16 lg:ml-14 md:ml-12 ">
            {props.title}
          </td>
          <td className="p-5 truncate w-48 font-normal  ">
            {props.description}
          </td>
          <td className="p-5 xl:mr-5 lg:mr-5 mr-5">
            <div className=" flex font-semibold ">
              <button
                onClick={props.onRemove}
                className="w-7 h-7 text-white-100  rounded-full  bg-red-100  mr-1"
              >
                −
              </button>
              <h1>{props.amount}</h1>
              <button
                onClick={props.onAdd}
                className="w-7 h-7 text-white-100  rounded-full  bg-blue-200 ml-1"
              >
                +
              </button>
            </div>
          </td>
          <td className="p-5  w-20 xl:mr-14 lg:mr-12 md:mr-10">{price}$</td>
          <td className="p-5  w-20 font-bold xl:mr-4 lg:mr-3 md:mr-3">
            {props.price.toFixed(0) * props.amount.toFixed(0)}$
          </td>
        </div>
      </tbody>
    </Fragment>
  );
};

export default CartItem;
