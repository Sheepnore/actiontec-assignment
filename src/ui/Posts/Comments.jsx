import React, { useEffect, useState, use } from "react";
import Comment from "./Comment";
import fetchComments from "../../data/fetchComments";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const loading = async () => {
      const commentsData = await fetchComments(postId);
      setComments(commentsData);
    };
    loading();
  }, [postId]);

  console.log("comments", comments);

  return (
    <section>
      <h2>Comments</h2>
      {comments.length ? (
        comments.map((comment) => {
          return <Comment key={comment.id} />;
        })
      ) : (
        <p>loading...</p>
      )}
    </section>
  );
};

export default Comments;
