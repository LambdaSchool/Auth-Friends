import React from "react";

const Friend = props => {
  const handleDelete = () => {
    console.log("delete ", props.friend.name);
  };

  const handleEdit = () => {
    console.log("edit ", props.friend.name);
  };
  return (
    <div>
      <button onClick={() => handleEdit()}>Edit</button>
      {props.friend.name}
      <button onClick={() => handleDelete()}>delete</button>
    </div>
  );
};

export default Friend;
