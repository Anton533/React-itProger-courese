import React from "react";
import { MdDeleteForever, MdSettings } from "react-icons/md";

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
  user = this.props.user;

  render() {
    return (
      <article className="user">
        <div className="settings">
          <MdSettings className="settings__btn" />
          <MdDeleteForever className="settings__btn" />
        </div>
        <div>
          <p>
            {"Name: "}
            {this.user.firstname}
          </p>
          <span>
            {"Lastname: "}
            {this.user.lastname}
          </span>
        </div>
        <p>
          {"Email: "}
          {this.user.email}
        </p>
        <p>
          {"BIO: "}
          {this.user.bio}
        </p>
        <b>
          {"Age: "}
          {this.user.age}
        </b>
        <p>
          {"Is happy: "}
          {this.user.isHappy ? "Happy" : "No"}
        </p>
      </article>
    );
  }
}

export default User;
