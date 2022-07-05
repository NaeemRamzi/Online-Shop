/* eslint-disable react/prop-types */
import { useContext } from "react";
import React, { Fragment } from "react";
import ITypes from "../Interface/types";
import CartContext from "../../store/cart-context";
import ProductsForm from "./ProductsForm";
import { Tooltip } from "@mui/material";

const ImgCard: React.FC<{
  [x: string]: any;
  values: ITypes;
}> = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount: any) => {
    cartCtx.addItem({
      id: props.values.id,
      title: props.values.title,
      category: props.values.category,
      description: props.values.description,
      image: "",
      price: props.values.price,
      amount: amount,
      itemTotal: props.itemTotal,
      name: ""
    });
  };

  return (
    <Fragment>
      <div className="xl:h-128 xl:w-120 mt-10 m-auto shadow-xl lg:h-96 lg:w-80 md:h-72 md:w-60 sm:h-72  sm:w-52 xs:h-72 xs:w-60 ">
        <div className="xl:max-w-sm rounded overflow-hidden">
          <img
            src={props.values.image}
            className="xl:w-96 xl:h-64 lg:w-96 lg:h-40 md:w-96  md:h-28 sm:w-96 sm:h-28 object-contain xs:w-96 xs:h-28 "
          />
          <div className="px-6 py-4">
            <Tooltip title={props.values.title} placement="top">
              <div className="font-bold text-xl mb-2   whitespace-nowrap text-ellipsis overflow-hidden text-center lg:text-base  md:text-sm sm:text-xs  xs:text-xxs">
                <h1 className="truncate">{props.values.title}</h1>
              </div>
            </Tooltip>

            <div className="lg:p-2 lg:text-base  md:text-sm sm:text-xs sm:pr-4  xs:text-xxs">
              <p className="line-clamp-3">{props.values.description}</p>
            </div>
            <div className="flex justify-between lg:mt-4 md:mt-2 sm:mt-2 xs:mt-4">
              <div className="bg-white-100 p-2 lg:text-base md:text-sm sm:text-xxs  xs:text-xxs  ">
                Price: {props.values.price}$
              </div>
              <div>
                <ProductsForm id={props.id} onAddToCart={addToCartHandler} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ImgCard;
