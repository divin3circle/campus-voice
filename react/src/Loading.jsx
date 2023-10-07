import React from "react";

const Loading = ({ text }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-md z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
      <p className="text-white mt-4 text-center">{text}</p>
    </div>
  );
};

export default Loading;
