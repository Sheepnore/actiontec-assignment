import React from "react";

const Comment = ({ commentData }) => {
  return (
    <li className="border rounded p-4">
      <h3 className="font-bold">{commentData.name}:</h3>
      <p>{commentData.body}</p>
    </li>
  );
};

export default Comment;
