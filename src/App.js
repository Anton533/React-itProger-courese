import React from "react";
import Header from "./components/Header";
import reactLogo from "./img/react-logo.png";
import Button from "./components/Button";
import Users from "./components/Users";
import Form from "./components/Form";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users/";

class App extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get(baseUrl, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        this.setState({ users: res.data.data });
      });

    this.state = {
      users: [],
    };
    this.addUser = this.addUser.bind(this);
    this.delUser = this.delUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header title="Header" />

        <img src={reactLogo} className="raact__logo" alt="React JS logo" />

        <div className="main-wrapper">
          <aside>
            <Form onAdd={this.addUser} />
          </aside>
          <main className="main">
            <Users
              users={this.state.users}
              removeUser={this.delUser}
              editUser={this.editUser}
            />
            <button
              type="button"
              className="btn"
              onClick={() => {
                this.setState((prevState) => ({
                  users: prevState.users.slice(0, -1),
                }));
              }}>
              Del last
            </button>
          </main>
        </div>

        <h1 className="clicks">
          Clicks: <span id="counter"></span>
        </h1>
        <Button />
      </div>
    );
  }

  addUser(user) {
    const id = this.state.users.length + 1;
    this.setState({
      users: [...this.state.users, { id, ...user }],
    });
  }
  delUser(idToRemove) {
    this.setState({
      users: this.state.users.filter((user) => user.id !== idToRemove),
    });
  }
  editUser(user) {
    let allUsers = this.state.users;
    allUsers[user.id - 1] = user;
    this.setState(
      {
        users: [],
      },
      () => {
        this.setState({ users: [...allUsers] });
      }
    );
  }
}

export default App;
