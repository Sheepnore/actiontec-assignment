import { useParams, Link } from "react-router";
import fetchPost from "../../data/fetchPost";
import { useState, useEffect } from "react";
import { fetchUser } from "../../data/fetchUser";
import Comments from "./Comments";
import { useAuth } from "../../auth/AuthContext.jsx";

const PostDetailsPage = () => {
  const param = useParams();
  const auth = useAuth();
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState();

  // Fetch specific post
  useEffect(() => {
    const loadingPost = async () => {
      try {
        setIsLoading(true);
        const postData = await fetchPost(param.postId);
        setPost(postData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadingPost();
  }, [param.postId]);

  // Fetch user data based on userId in post
  useEffect(() => {
    if (post.userId) {
      const loadingUser = async () => {
        try {
          setIsLoading(true);
          const userData = await fetchUser(post.userId);
          setUser(userData);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
      loadingUser();
    }
  }, [post.userId]);

  const isUserLogin = auth.userId === post.userId;

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <article className="p-8 grid gap-y-8">
        <Link to={"/mainPage"}>Back</Link>
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <h3 className="text-gray-500">by {user.username}</h3>
        <p>{post.body}</p>
        <Comments postId={post.id} isUserLogin={isUserLogin} />
      </article>
    </>
  );
};

export default PostDetailsPage;
