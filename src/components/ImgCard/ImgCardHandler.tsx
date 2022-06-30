import React, { Fragment, useState, useEffect } from "react";
import ImgCard from "./ImgCard";
import ITypes from "../Interface/types";
import { CircularProgress, Button } from "@mui/material";
import Category from "./Category";
import ImgSearch from "./ImgSearch";

const ImgCardHandler = () => {
  const [fake, setFake] = useState<ITypes[]>([]);
  // const [category, setCategory] = useState<ITypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  // const [categoryTerm, setCategoryTerm] = useState("");
  

  useEffect(() => {
    const fakestore = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setFake(data);
      setIsLoading(false);
    };
    fakestore();
  }, []);

  // useEffect(() => {
  //   const Category = async () => {
  //     const response = await fetch(
  //       "https://fakestoreapi.com/products/categories"
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     setCategory(data);
  //   };
  //   Category();
  // });

 

  const onSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };
  // const onSelect = (searchTerm: string) => {
  //   setCategoryTerm(searchTerm);
  // };

  return (
    <Fragment>
      <div className="container  mx-auto ">
        <div className="flex  justify-between ">
          <ImgSearch onSearch={onSearch} />
          {/* <Category onSelect={onSelect} /> */}
        </div>

        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-40 ">
            <CircularProgress />
          </h1>
        ) : (
          <div className="grid xl:grid-cols-3  lg:grid-cols-3  md:grid-cols-3  sm:grid-cols-3  xs:grid-cols-2 gap-4  ">
            {fake
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((values) => {
                return <ImgCard key={values.id} values={values} />;
              })}

              {/* {category
              .filter((val) => {
                if (categoryTerm === "") {
                  return val;
                } else if (
                  val.category.includes(categoryTerm)
                ) {
                  return val;
                }
              })
              .map((values) => {
                return <ImgCard key={values.id} values={values} />;
              })} */}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ImgCardHandler;
