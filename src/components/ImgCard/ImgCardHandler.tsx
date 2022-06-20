import React, { Fragment, useState, useEffect } from "react";
import ImgCard from "./ImgCard";

const ImgCardHandler = () => {
  const [fake, setFake] = useState([]);

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
        <div className="grid grid-cols-3 gap-4">
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
