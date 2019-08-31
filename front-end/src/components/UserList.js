import React from "react";
import Users from "./Users";

class UserList extends React.Component {
  render() {
    return (
      <div>
        <h1> Users in UserList Comp </h1>
        <ul>
          {this.props.userData.map(user => {
            return (
              <Users
                id={user.id}
                username={user.username}
                department={user.department}
                key={user.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;
