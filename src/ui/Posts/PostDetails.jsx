import { useParams, Link } from "react-router";
import fetchPost from "../../data/fetchPost";
import { useState, useEffect } from "react";
import { fetchUser } from "../../data/fetchUser";
import Comments from "./Comments";
import { useAuth } from "../../auth/AuthContext.jsx";
import arrow from "../../assets/arrow-left.svg";
import Loading from "../Loading.jsx";

const PostDetailsPage = () => {
  const param = useParams();
  const auth = useAuth();
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [postLoading, setPostLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  // Fetch specific post
  useEffect(() => {
    const loadingPost = async () => {
      try {
        setPostLoading(true);
        const postData = await fetchPost(param.postId);
        setPost(postData);
      } catch (err) {
        console.error(err);
      } finally {
        setPostLoading(false);
      }
    };
    loadingPost();
  }, [param.postId]);

  // Fetch user data based on userId in post
  useEffect(() => {
    if (post.userId) {
      const loadingUser = async () => {
        try {
          setUserLoading(true);
          const userData = await fetchUser(post.userId);
          setUser(userData);
        } catch (err) {
          console.error(err);
        } finally {
          setUserLoading(false);
        }
      };
      loadingUser();
    }
  }, [post.userId]);

  const isUserLogin = auth.userId === post.userId;

  if (postLoading || userLoading) {
    return <Loading />;
  }

  return (
    <>
      <article className="p-8 grid gap-y-8">
        <Link
          to={"/mainPage"}
          className="flex justify-self-start hover:underline"
        >
          <img src={arrow} alt="arrow" />
          <span>Back</span>
        </Link>
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <h3 className="text-gray-500">by {user.username}</h3>
        <p>{post.body}</p>
        <Comments postId={post.id} isUserLogin={isUserLogin} />
      </article>
    </>
  );
};

export default PostDetailsPage;
