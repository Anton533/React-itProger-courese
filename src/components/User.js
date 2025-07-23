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
          <p>{this.user.id}</p>
          <img
            src={this.user.avatar}
            className="user-card__avatar"
            alt="User avatar"></img>
          <h3>
            {this.user.first_name} {this.user.last_name}
          </h3>
          <p>{this.user.email}</p>
        </div>

        {this.state.editForm && (
          <Form user={this.user} onAdd={this.props.editUser} />
        )}
      </article>
    );
  }
}

export default User;
