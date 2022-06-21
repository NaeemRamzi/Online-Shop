import React, { Fragment } from "react";
import { ITypes }  from "../Interface/types";

const ImgCard: React.FC<{values:ITypes}> = (props) => {
  return (
    <Fragment>
      <div className="xl:h-128 xl:w-120 mt-10 m-auto shadow-xl lg:h-84 lg:w-80 md:h-60 md:w-60 sm:h-60  sm:w-52 xs:h-60 xs:w-60 ">
        <div className="xl:max-w-sm rounded overflow-hidden">
          <img
            src={props.values.image}
            className="xl:w-96 xl:h-64 lg:w-96 lg:h-40 md:w-96  md:h-28 sm:w-96 sm:h-28 object-contain xs:w-96 xs:h-28 "
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2  whitespace-nowrap text-ellipsis overflow-hidden text-center lg:text-base  md:text-sm sm:text-xs  xs:text-xxs">
              <h1>{props.values.title}</h1>
            </div>
            <div className="lg:whitespace-wrap lg:text-ellipsis lg:overflow-y-auto lg:p-2 xl:h-16 lg:h-20 lg:scrollbar lg:scrollbar-thumb-white-300 lg:scrollbar-track-white-300 lg:scrollbar-thin lg:text-base lg:whitespace-normal md: whitespace-nowrap md:overflow-hidden md:h-auto  md:text-sm sm:text-xs sm:pr-4  xs:text-xxs">
              <p>{props.values.description}</p>
            </div>
            <div className="flex justify-between lg:mt-4 md:mt-2 xs:mt-4">
              <div className="bg-white-100 p-2 lg:text-base md:text-sm sm:text-xxs  xs:text-xxs  ">
                Price: {props.values.price}$
              </div>
              <button className="bg-blue-100 p-2 text-white-100 lg:text-base md:whitespace-nowrap md:text-sm sm:whitespace-nowrap sm:text-xxs xs:text-xxs ">
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