import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link, Outlet } from "react-router";
import NavBar from "./ui/NavBar";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <main className="max-w-full min-h-screen p-6 bg-gray-50">
        <Outlet />
      </main>
    </>
  );
}

export default App;
