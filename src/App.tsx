import React, { Fragment } from "react";

import "./App.css";
import Header from "./components/Layout/Header";
import SearchInput from "./components/UI/SearchInput";

function App() {
  return (
   <Fragment>
      <Header />
      <SearchInput/>
    </Fragment>
  );
}

export default App;
