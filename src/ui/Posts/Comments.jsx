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
      <h2 className="text-2xl">Comments</h2>
      {comments.length ? (
        <div className="grid gap-y-4">
          {comments.map((comment) => {
            return <Comment key={comment.id} commentData={comment} />;
          })}
        </div>
      ) : (
        <p>loading...</p>
      )}
    </section>
  );
};

export default Comments;
