import React from "react";
import { useParams } from "react-router";

const PostDetailsPage = () => {
  const param = useParams();
  console.log(param);
  return <div>PostDetailsPage</div>;
};

export default PostDetailsPage;
