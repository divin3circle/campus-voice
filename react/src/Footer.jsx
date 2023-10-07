import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="mt-8 flex items-center justify-center text-center">
        <h1 className="font-semibold p-2">
          Institution?{" "}
          <span>
            <a
              to="/setup"
              className="font-normal text-blue-700 hover:underline hover:scale-105 ease-in duration-100"
            >
              Set up an election
            </a>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
