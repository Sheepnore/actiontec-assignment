import { useParams } from "react-router";
import fetchPost from "../../data/fetchPost";
import { useState, useEffect } from "react";
import { fetchUser } from "../../data/fetchUser";
import Comments from "./Comments";
import { useAuth } from "../../auth/AuthContext.jsx";

const PostDetailsPage = () => {
  const param = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState("");

  // Fetch specific post
  useEffect(() => {
    const loadingPost = async () => {
      const postData = await fetchPost(param.postId);
      setPost(postData);
    };
    loadingPost();
  }, [param.postId]);

  // Fetch post data based on userId in post
  useEffect(() => {
    if (post.userId) {
      const loadingUser = async () => {
        const userData = await fetchUser(post.userId);
        setUser(userData);
      };
      loadingUser();
    }
  }, [post.userId]);

  function isUserLogIn() {
    const loginUser = useAuth();
    console.log("loginUser", loginUser);

    if (loginUser.userId === post.userId) {
      return true;
    }
  }

  return (
    <>
      <article className="p-8 grid gap-y-8">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <h3 className="text-gray-500">by {user.username}</h3>
        <p>{post.body}</p>
        <Comments postId={post.id} isUserLogIn={isUserLogIn} />
      </article>
    </>
  );
};

export default PostDetailsPage;
