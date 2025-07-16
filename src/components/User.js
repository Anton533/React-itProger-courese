import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 0,
        firstname: "name",
        lastname: "lastname",
        email: "email",
        age: 1,
        isHappy: false,
      },
    };
  }

  render() {
    const usersData = this.props;
    return (
      <div>
        {usersData.users.map((ele) => (
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

export default User;
