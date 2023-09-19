// UserContext.js
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userCampus, setUserCampus] = useState(""); // Initialize with an empty string

  return (
    <UserContext.Provider value={{ userCampus, setUserCampus }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
