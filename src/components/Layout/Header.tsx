import React, { Fragment } from "react";
import HeaderLogo from "./HeaderLogo";
import LogoImg from "../../assets/JavaLogo.png";

const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="text-center text-white-100 bg-gray-100">
          <p>Show title</p>
        </div>
        <div className="flex justify-between bg-white-200">
          <h1 className="text-blue-500 hover:text-blue-800">Hi,james</h1>
          <img src={LogoImg} />
          <button>Cart</button>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
