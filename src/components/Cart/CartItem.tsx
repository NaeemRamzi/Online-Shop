import React, { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";

const CartItem = (props: any) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      <table className="table-auto w-full  flex justify-between   bg-white-400 odd:bg-gray-400 even:bg-white-100 border-b-2 border-black-100">
        <tr className="flex justify-between w-full  border-black-100 ">
          <td className="p-5">{props.number + 1}</td>
          <td className="p-5 truncate w-48 font-semibold ">{props.title}</td>
          <td className="p-5 truncate w-48 font-normal ">
            {props.description}
          </td>
          <td className="p-5">
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
          <td className="p-5  w-20">{props.price}$</td>
          <td className="p-5  w-20 font-bold">{props.price * props.amount}$</td>
          
        </tr>
      </table>
    </Fragment>
  );
};

export default CartItem;
