import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router";
function App() {
  return (
    <>
      <main className="box-border flex flex-col justify-center items-center max-w-full min-h-screen gap-2">
        <h1 className="text-xl">瀏覽貼文</h1>
        <Link to="/mainPage" className="p-2 border rounded-xl hover:scale-110">
          Let's Go
        </Link>
      </main>
    </>
  );
}

export default App;
