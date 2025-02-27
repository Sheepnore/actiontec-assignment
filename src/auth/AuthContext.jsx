import React, { createContext, useContext } from "react";

const userContext = createContext();

export const AuthProvider = ({ children }) => {
  const userId = Number(import.meta.env.VITE_USER_ID);
  return <userContext.Provider value={userId}>{children}</userContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
