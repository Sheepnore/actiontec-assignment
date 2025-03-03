import React from "react";
import DeleteBtn from "./DeleteBtn";
const Comment = ({ commentData, isUserLogin, handleDelete }) => {
  const commentId = commentData.id;
  return (
    <li className="border rounded p-4">
      <h3 className="font-bold">{commentData.name}:</h3>
      <p>{commentData.body}</p>
      {isUserLogin ? (
        <DeleteBtn
          handleDelete={() => {
            handleDelete(commentId);
          }}
        ></DeleteBtn>
      ) : (
        ""
      )}
    </li>
  );
};

export default Comment;
