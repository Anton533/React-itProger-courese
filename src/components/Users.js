import React from "react";
import User from "./User";
import UsersData from "../data/data";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstname: "Андрей",
          lastname: "Коваленко",
          email: "andrey.kovalenko@example.com",
          age: 28,
          isHappy: true,
        },
        {
          id: 2,
          firstname: "Марина",
          lastname: "Сидорова",
          email: "marina.sidorova@example.com",
          age: 34,
          isHappy: true,
        },
      ],
    };
  }
  render() {
    const usersData = UsersData;
    return (
      <div>
        {usersData.map((ele) => (
          <User key={ele.id} user={ele} />
        ))}
      </div>
    );
  }
}

export default Users;
