import React, { Fragment } from "react";
import HeaderLogo from "./HeaderLogo";
import UserIcon from "../../assets/user.png";
import ThreeDots from "../../assets/ellipsis.png";
import CartLogo from "../../assets/shopping-cart.png";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import ITypes from "../Interface/types";
import { Link } from "react-router-dom";
// our first branch

const Header: React.FC = () => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber: number, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Fragment>
      {/* top of the header (black part)  */}
      <header>
        <div className="flex bg-gray-100 text-center justify-between ">
          <div>
            <img className="ml-2" src={ThreeDots} />
          </div>
          <div className="text-white-100  ">
            <p>Show title</p>
          </div>
          <div className="text-white-100  ">
            <Link className="hover:underline" to="/">
              Home
            </Link>
          </div>
        </div>
        {/* main header */}
        <div className="flex justify-between bg-white-200 pt-2">
          {/* Left Part (username and user icon) */}
          <div className="flex mt-3">
            <img className="ml-5 h-10" src={UserIcon} />
            <h1 className="mt-2 ml-3">Hi,Naeem </h1>
          </div>
          {/* center (the logo) */}
          <div className="xl:mr-20px lg:mr-20px md:mr-20px sm:mr-20px xs:mr-0 mb-2 ">
            <HeaderLogo />
          </div>
          {/* Right Part Cart button and the cart icon */}
          <div className="flex mr-10">
            <button className="mr-1 mt-6 flex">
              <Link className="mr-1 hover:underline" to="/cart">
                Cart
              </Link>
              <p className=" w-7 h-6 text-white-100  rounded-full  bg-red-100">
                {numberOfCartItems}
              </p>
            </button>
            <img className="h-10 mt-4" src={CartLogo} />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
