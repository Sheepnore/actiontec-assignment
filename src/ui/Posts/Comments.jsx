import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import fetchComments from "../../data/fetchComments";
import Loading from "../Loading";

const Comments = ({ postId, isUserLogin }) => {
  const [comments, setComments] = useState([]);

  // Fetch comments data based on postId
  useEffect(() => {
    const loading = async () => {
      const commentsData = await fetchComments(postId);
      setComments(commentsData);
    };
    loading();
  }, [postId]);

  async function handleDelete(commentId) {
    // remove deleted comment from state
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );

    await fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`, {
      method: "DELETE",
    });
    console.log("You click delete");
  }

  if (comments.length === 0) {
    return <p>No comments</p>;
  }

  return (
    <section>
      <h2 className="text-2xl">Comments</h2>
      <ul className="grid gap-y-4">
        {!comments.length ? (
          <Loading />
        ) : (
          comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                commentData={comment}
                isUserLogin={isUserLogin}
                handleDelete={handleDelete}
              />
            );
          })
        )}
      </ul>
    </section>
  );
};

export default Comments;
