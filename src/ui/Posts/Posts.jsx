import React, { useEffect, useState } from "react";
import RefreshBtn from "./RefreshBtn";
import fetchPostData from "../../data/fetchPostData";
import { Link } from "react-router";

const Posts = () => {
  const [postData, setPostData] = useState([]);

  // fetch posts datas
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPostData();
      setPostData(data);
    };
    loadData();
  }, []);

  return (
    <section className="grid gap-y-8 p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl">All Posts</h1>
        <RefreshBtn />
      </div>
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr className="border [&>th]:p-4 text-left">
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">User</th>
          </tr>
        </thead>

        {/* Posts */}
        <tbody className="bg-white">
          {postData.map((post) => {
            return (
              <tr key={post.id} className="border [&>th]:p-4 text-left">
                <th scope="col">{post.id}</th>
                <th scope="col">
                  <Link to={`/mainPage/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </th>
                <th scope="col">{post.userId}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Posts;
