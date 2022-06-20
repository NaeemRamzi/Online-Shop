import React, { Fragment } from "react";
import classes from "./ImgCard.module.css";

const ImgCard: React.FC<{ values: any }> = (props) => {
  return (
    <Fragment>
      <div className="h-auto mt-10 m-auto shadow-xl">
        <div className="max-w-sm rounded overflow-hidden">
          <img src={props.values.image} className="w-96 h-64 object-contain" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              <h1>{props.values.title}</h1>
            </div>
            <div className="text-center">
              <p>{props.values.description}</p>
            </div>
            <div className="flex justify-between mt-2">
              <div className="bg-white-100 p-2">
                Price: {props.values.price}$
              </div>
              <button className="bg-blue-100 p-2 text-white-100">
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ImgCard;
