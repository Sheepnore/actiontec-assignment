import React from "react";

const Comment = ({ commentData, isUserLogin, handleDelete }) => {
  const commentId = commentData.id;
  return (
    <li className="border rounded p-4">
      <h3 className="font-bold">{commentData.name}:</h3>
      <p>{commentData.body}</p>
      {isUserLogin ? (
        <button
          onClick={() => {
            handleDelete(commentId);
          }}
          className="p-3 border rounded-2xl cursor-pointer"
        >
          Delete
        </button>
      ) : (
        ""
      )}
    </li>
  );
};

export default Comment;
