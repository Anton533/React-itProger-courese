import React from "react";
import { MdDeleteForever, MdSettings } from "react-icons/md";

class User extends React.Component {
  user = this.props.user;

  render() {
    return (
      <article className="user-card">
        <div className="settings">
          <MdSettings className="settings__btn" />
          <MdDeleteForever
            className="settings__btn"
            onClick={() => console.log(this.props.removeUser(this.user.id))}
          />
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
          {this.user.isHappy ? "Happy :)" : "No :("}
        </p>
      </article>
    );
  }
}

export default User;
