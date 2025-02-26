import React, { useEffect, useState } from "react";
import RefreshBtn from "./RefreshBtn";
import fetchPostsData from "../../data/fetchPostsData";
import { Link } from "react-router";

const Posts = () => {
  const [postsData, setPostsData] = useState([]);

  // fetch posts data
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPostsData();
      setPostsData(data);
    };
    loadData();
  }, []);

  console.log(postsData);

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
          {postsData.map((post) => {
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
