import React from "react";
import { MdDeleteForever, MdSettings } from "react-icons/md";
import Form from "./Form";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
    };
  }
  user = this.props.user;

  render() {
    return (
      <article className="user-card">
        <div className="settings">
          <MdSettings
            className="settings__btn"
            onClick={() => {
              this.setState({
                editForm: !this.state.editForm,
              });
            }}
          />
          <MdDeleteForever
            className="settings__btn"
            onClick={() => this.props.removeUser(this.user.id)}
          />
        </div>
        <div className="user-card__content">
          <p>
            {"Name: "}
            {this.user.firstname}
          </p>
          <span>
            {"Lastname: "}
            {this.user.lastname}
          </span>
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
        </div>

        {this.state.editForm && (
          <Form user={this.user} onAdd={this.props.editUser} />
        )}
      </article>
    );
  }
}

export default User;
