import React, { useEffect, useState } from "react";
import RefreshBtn from "./RefreshBtn";
import fetchPostData from "../../data/fetchPostData";

const MainPage = () => {
  const [postData, setPostData] = useState([]);

  // fetch posts datas
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPostData();
      setPostData(data);
    };
    loadData();
  }, []);

  console.log(postData);
  return (
    <section className="grid gap-y-8">
      <div className="flex justify-between">
        <h1 className="text-2xl">All Posts</h1>
        <RefreshBtn />
      </div>
      <table className="w-full">
        <thead className="bg-gray-50 border">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">User</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="border">
            <th scope="row">1</th>
            <td>Post 1</td>
            <td>22</td>
          </tr>
          <tr className="border">
            <th scope="row">2</th>
            <td>Post 2</td>
            <td>45</td>
          </tr>
          <tr className="border">
            <th scope="row">3</th>
            <td>Post 3</td>
            <td>29</td>
          </tr>
          <tr className="border">
            <th scope="row">4</th>
            <td>Post 4</td>
            <td>36</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default MainPage;
