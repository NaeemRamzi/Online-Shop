import React, { Fragment } from "react";

const ImgSearch = () => {
  return (
    <Fragment>
      <div className="flex  justify-start ">
        <form>
          <div className="relative text-gray-600 border-2 rounded-full border-gray-200 xl:ml-14 mt-2">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="text"
              name="search"
              className="text-sm text-white w-72 pl-10  rounded-full  focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Search..."
            ></input>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ImgSearch;
