import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

const MainPage = () => {
  return (
    <div className="max-w-full min-h-screen bg-gray-50">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainPage;
