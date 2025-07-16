import React from "react";
import User from "./User";
import UsersData from "../data/data";

class Users extends React.Component {
  render() {
    const usersData = UsersData;
    return <User users={usersData} />;
  }
}

export default Users;
