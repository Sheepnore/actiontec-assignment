import React from "react";
import RefreshBtn from "./RefreshBtn";

const MainPage = () => {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-2xl">All Posts</h1>
        <RefreshBtn />
      </div>
      <table></table>
    </section>
  );
};

export default MainPage;
