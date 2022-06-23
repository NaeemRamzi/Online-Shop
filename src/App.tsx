import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";
import ImgCardHandler from "./components/ImgCard/ImgCardHandler";
import ImgSearch from "./components/ImgCard/ImgSearch";
import Header from "./components/Layout/Header";

function App() {
  return (
   <Fragment>
      <Header />
      <ImgSearch/>
      <ImgCardHandler/>
    </Fragment>
  );
}

export default App;
