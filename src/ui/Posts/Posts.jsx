import React, { useEffect, useState } from "react";
import RefreshBtn from "./RefreshBtn";
import fetchPostsData from "../../data/fetchPostsData";
import { Link } from "react-router";
import { fetchUsers } from "../../data/fetchUser";

const Posts = () => {
  const [postsData, setPostsData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  // Fetch posts data
  useEffect(() => {
    const loading = async () => {
      const data = await fetchPostsData();
      setPostsData(data);
    };
    loading();
  }, []);

  // Fetch all users data
  useEffect(() => {
    const loading = async () => {
      const users = await fetchUsers();
      setUsersData(users);
    };
    loading();
  }, []);

  function findMatchingUser(post) {
    const match = usersData.find((user) => post.userId === user.id);
    return match;
  }

  console.log("posts:", postsData);
  console.log("users:", usersData);

  if (!postsData.length || !usersData.length) {
    return <p>Loading...</p>;
  }

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
                <th scope="col">{findMatchingUser(post).username}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Posts;
