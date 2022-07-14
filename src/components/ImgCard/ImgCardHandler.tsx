import React, { Fragment, useState, useEffect, useCallback } from "react";
import ImgCard from "./ImgCard";
import ITypes from "../Interface/types";
import { CircularProgress } from "@mui/material";
import Category from "./Category";
import ImgSearch from "./ImgSearch";

const ImgCardHandler = () => {
  const [fake, setFake] = useState<ITypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("all");

  const changeCategory = useCallback((term: string) => {
    setCategoryTerm(term);
  }, []);

  useEffect(() => {
    const fakestore = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      setFake(data);
      setIsLoading(false);
    };
    fakestore(); 
  }, []);

  const onSearch = useCallback((searchTerm: string) => {
    setSearchTerm(searchTerm);
  }, []);

  const categortSelection = fake.filter((products) => {
    if (categoryTerm === "all") {
      return products;
    } else {
      if (products.category === categoryTerm) {
        return products;
      }
    }
  });

  const searchSelection = categortSelection.filter((products) => {
    if (searchTerm === "") {
      return products;
    } else if (
      products.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return products;
    }
  });

  return (
    <Fragment>
      <div className="container  mx-auto ">
        <div className="flex justify-between    ">
          <ImgSearch onSearch={onSearch} />
          <Category
            categoryTerm={categoryTerm}
            changeCategory={changeCategory}
          />
        </div>

        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-40 ">
            <CircularProgress />
          </h1>
        ) : (
          <div className="grid xl:grid-cols-3  lg:grid-cols-3  md:grid-cols-3  sm:grid-cols-3  xs:grid-cols-2 gap-4  ">
            {searchSelection.map((values) => {
              return <ImgCard key={values.id} values={values} />;
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ImgCardHandler;
