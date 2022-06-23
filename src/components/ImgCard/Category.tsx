/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useEffect } from "react";

const Category = () => {
  useEffect(() => {
    const Category = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      console.log(data);
    };
    Category();
  });

  return (
    <Fragment>
      <select
        name="cars"
        id="cars"
        className="mr-16 text-center border-b-2 w-52 hover:bg-white-200"
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
    </Fragment>
  );
};

export default Category;
