import React, { Fragment, useState, useEffect } from "react";
import ImgCard from "./ImgCard";
import { ITypes } from "../Interface/types";
import ImgSearch from "./ImgSearch";

const ImgCardHandler = () => {
  const [fake, setFake] = useState<ITypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState();

  useEffect(() => {
    const fakestore = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setFake(data);
      setIsLoading(false);
    };
    fakestore();
  }, []);

  return (
    <Fragment>
      <div className="container  mx-auto ">
        <input
          type="text"
          placeholder="Search . . ."
          onChange={(event) => {
          setSearchTerm(event.target.value);
          }}
        />
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-40 italic">
            Loading . . .
          </h1>
        ) : (
          <div className="grid xl:grid-cols-3  lg:grid-cols-3  md:grid-cols-3  sm:grid-cols-3  xs:grid-cols-2 gap-4  ">
            {fake.filter((val)=>{
              if(searchTerm ===""){
                return val;
              }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
            }).map((values) => {
              return <ImgCard key={values.id} values={values} />;
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default ImgCardHandler;
