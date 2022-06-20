import React, { Fragment } from "react";

import "./App.css";
import ImgCardHandler from "./components/ImgCard/ImgCardHandler";
import Header from "./components/Layout/Header";
import SearchInput from "./components/UI/SearchInput";

function App() {
  return (
   <Fragment>
      <Header />
      <SearchInput/>
      <ImgCardHandler/>
    </Fragment>
  );
}

export default App;
