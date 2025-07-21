import React from "react";
import User from "./User";

class Users extends React.Component {
  render() {
    if (this.props.users.length === 0)
      return (
        <div className="users">
          <h2>The user list is empty</h2>
        </div>
      );

    return (
      <div className="users">
        {this.props.users.map((ele) => (
          <User key={ele.id} user={ele} removeUser={this.props.removeUser} />
        ))}
      </div>
    );
  }
}

export default Users;
