import React from "react";
import { useParams } from "react-router";
import fetchPost from "../../data/fetchPost";
import { useState, useEffect } from "react";

const PostDetailsPage = () => {
  const param = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const loading = async () => {
      const postData = await fetchPost(param.postId);
      setPost(postData);
    };
    loading();
  }, []);

  return (
    <article className="p-6">
      <h1>Title: {post.title}</h1>
    </article>
  );
};

export default PostDetailsPage;
