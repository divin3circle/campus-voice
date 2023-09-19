import React, { useState } from "react";
import { campusData } from "./data";
import { Link } from "react-router-dom";

const Campus = () => {
  return (
    <div className="flex-col font-mono items-center justify-center rounded-md shadow-md p-2">
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold p-4">Campus List</h1>
      </div>
      <div className="px-2 py-4 my-6 font-semibold font-mono text-lg text-center rounded-lg border-2 hover:border-teal-200 hover:bg-teal-400 hover:scale-110 duration-150 ease-in hover:text-white cursor-pointer">
        <Link to="/register">{campusData[0].name}</Link>
      </div>
      <div className="p-2 py-4 my-6 font-semibold font-mono text-lg text-center rounded-lg border-2 hover:border-teal-200 hover:bg-teal-400 hover:scale-110 duration-150 ease-in hover:text-white cursor-pointer">
        <Link to="/register">{campusData[1].name}</Link>
      </div>
      <div className="p-2 py-4 my-6 font-semibold font-mono text-lg text-center rounded-lg border-2 hover:border-teal-200 hover:bg-teal-400 hover:scale-110 duration-150 ease-in hover:text-white cursor-pointer">
        <Link to="/register">{campusData[2].name}</Link>
      </div>
    </div>
  );
};

export default Campus;
