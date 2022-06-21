import React, { Fragment, useState, useEffect } from "react";
import ImgCard from "./ImgCard";
import { ITypes }  from "../Interface/types";

const ImgCardHandler = () => {
  const [fake, setFake] = useState<ITypes[]>([]);

  useEffect(()=>{
    fakestore();
  },[]);

  const fakestore = async()=>{
    const response= await fetch("https://fakestoreapi.com/products");
    const jsonData= await response.json();
    setFake(jsonData);
  };

  
  return (
    <Fragment>
      <div className="container  mx-auto ">
        <div className="grid xl:grid-cols-3  lg:grid-cols-3  md:grid-cols-3  sm:grid-cols-3  xs:grid-cols-2 gap-4  ">
          {fake.map((values)=>{
            return (
              <ImgCard key={values.id} values={values}/>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default ImgCardHandler;