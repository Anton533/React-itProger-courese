import React from "react";
import userAvatar from "../img/user-avatr.png";

class Form extends React.Component {
  userAdd = {};
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      first_name: "",
      last_name: "",
      email: "",
      avatar: "",
    };
  }
  render() {
    return (
      <form className="form" ref={(ele) => (this.formAddUser = ele)}>
        <div className="form-item">
          <label className="form-label" htmlFor="user-name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            id="user-name"
            name="user-name"
            placeholder="name"
            required
            onChange={(e) => this.setState({ first_name: e.target.value })}
          />
        </div>
        <div className="form-item">
          <label className="form-label" htmlFor="user-lastname">
            Lastname
          </label>
          <input
            className="form-input"
            type="text"
            id="user-lastname"
            name="user-lastname"
            placeholder="lastname"
            required
            onChange={(e) => this.setState({ last_name: e.target.value })}
          />
        </div>
        <div className="form-item">
          <label className="form-label" htmlFor="user-email">
            Email
          </label>
          <input
            className="form-input"
            type="email"
            id="user-email"
            name="email"
            placeholder="email"
            required
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="form-item">
          <label className="form-label" htmlFor="user-avatar">
            Avatar
          </label>
          <input
            className="form-input"
            type="text"
            id="user-avatar"
            name="user-avatar"
            placeholder="avatar"
            required
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="form-bottom">
          <button
            type="button"
            className="btn w-100"
            onClick={() => {
              this.userAdd = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
              };
              if (this.props.user) {
                this.userAdd.id = this.props.user.id;
              }
              this.props.onAdd(this.userAdd);
              this.formAddUser.reset();
            }}>
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
