import React from "react";

class Form extends React.Component {
  userAdd = {};
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      firstname: "",
      lastname: "",
      email: "",
      bio: "",
      age: 1,
      isHappy: false,
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
            onChange={(e) => this.setState({ firstname: e.target.value })}
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
            onChange={(e) => this.setState({ lastname: e.target.value })}
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
          <label className="form-label" htmlFor="user-age">
            Age
          </label>
          <input
            className="form-input"
            type="email"
            id="user-age"
            name="user-age"
            placeholder="Age"
            required
            onChange={(e) => this.setState({ age: e.target.value })}
          />
        </div>
        <div className="form-item">
          <label className="form-label" htmlFor="user-bio">
            BIO
          </label>
          <textarea
            className="form-textarea"
            id="user-bio"
            name="user-bio"
            placeholder="Your bio..."
            rows="6"
            required
            onChange={(e) => this.setState({ bio: e.target.value })}></textarea>
        </div>
        <div className="form-item form-item--checkbox">
          <label className="form-label" htmlFor="user-happy">
            Are you happy?
          </label>
          <input
            className="form-input"
            type="checkbox"
            id="user-happy"
            name="user-happy"
            required
            onChange={(e) => this.setState({ isHappy: e.target.checked })}
          />
        </div>
        <div className="form-bottom">
          <button
            type="button"
            className="btn w-100"
            onClick={() => {
              this.userAdd = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                bio: this.state.bio,
                age: this.state.age,
                isHappy: this.state.isHappy,
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
