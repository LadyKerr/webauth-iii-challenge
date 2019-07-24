import React from "react";

const Users = props => {
  return (
    <div>
      <h3> Users from Users Component </h3>
      {props.id}
      {props.username}
      {props.department}
    </div>
  );
};

export default Users;
