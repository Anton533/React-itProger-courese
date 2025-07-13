import React from "react";

class Users extends React.Component {
  users = [
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
    {
      id: 3,
      firstname: "Иван",
      lastname: "Гончар",
      email: "ivan.gonchar@example.com",
      age: 22,
      isHappy: false,
    },
  ];
  render() {
    return (
      <div>
        {this.users.map((ele) => (
          <article className="user" key={ele.id}>
            <div>
              <h3>
                {"firstname: "}
                {ele.firstname}
              </h3>
              <span>
                {"lastname: "}
                {ele.lastname}
              </span>
            </div>
            <p>
              {"email: "}
              {ele.email}
            </p>
            <b>
              {"age: "}
              {ele.age}
            </b>
            <p>
              {"is happy: "}
              {ele.isHappy ? "Happy" : "No"}
            </p>
          </article>
        ))}
      </div>
    );
  }
}

export default Users;
