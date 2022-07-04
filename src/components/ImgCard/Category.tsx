/* eslint-disable react/no-unescaped-entities */
import React, { Fragment, useEffect, useState, useRef } from "react";

const Category = ({ categoryTerm, changeCategory }: any) => {
  return (
    <Fragment>
      <select
        name="cars"
        id="cars"
        className="text-center  w-72 text-gray-600 border-2 rounded-full border-gray-200  mt-2 xl:mr-14  hover:bg-white-200"
        value={categoryTerm}
        onChange={(e) => changeCategory(e.target.value)}
      >
        <option value="all">Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
    </Fragment>
  );
};

export default Category;
