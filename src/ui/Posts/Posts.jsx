import React, { useEffect, useState } from "react";
import RefreshBtn from "./RefreshBtn";
import MUIPagination from "./Pagination";
import fetchPostsData from "../../data/fetchPostsData";
import { Link } from "react-router";
import { fetchUsers } from "../../data/fetchUser";

const Posts = () => {
  const [postsData, setPostsData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch posts data by current page
  useEffect(() => {
    const loading = async () => {
      const data = await fetchPostsData(currentPage);
      setPostsData(data);
    };
    loading();
  }, [currentPage]);

  // Fetch all users data on mount
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
    <section className="grid gap-y-6 p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl">All Posts</h1>
        <RefreshBtn setPostsData={setPostsData} currentPage={currentPage} />
      </div>
      <MUIPagination setCurrentPage={setCurrentPage} />
      <div className="border border-separate rounded-2xl overflow-hidden">
        <table className="w-full ">
          <thead className="bg-gray-50">
            <tr className=" [&>th]:p-4 text-left">
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">User</th>
            </tr>
          </thead>

          {/* Posts */}
          <tbody className="bg-white">
            {postsData.map((post) => {
              return (
                <tr key={post.id} className="[&>th]:p-4 text-left">
                  <th scope="col">{post.id}</th>
                  <th scope="col">
                    <Link
                      to={`/mainPage/${post.id}`}
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </th>
                  <th scope="col">{findMatchingUser(post).username}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Posts;
