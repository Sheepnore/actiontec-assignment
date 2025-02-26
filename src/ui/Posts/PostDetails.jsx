import { useParams } from "react-router";
import fetchPost from "../../data/fetchPost";
import { useState, useEffect, Suspense } from "react";
import fetchUser from "../../data/fetchUser";
import Comments from "./Comments";

const PostDetailsPage = () => {
  const param = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState("");

  useEffect(() => {
    const loading = async () => {
      const postData = await fetchPost(param.postId);
      setPost(postData);

      const userData = await fetchUser(postData.userId);
      setUser(userData);
    };
    loading();
  }, []);

  return (
    <>
      <article className="p-8 grid gap-y-8">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <h3 className="text-gray-500">by {user.username}</h3>
        <p>{post.body}</p>
        <Comments postId={post.id} />
      </article>
    </>
  );
};

export default PostDetailsPage;
