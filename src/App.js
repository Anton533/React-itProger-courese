import React from "react";
import Header from "./components/Header";
import reactLogo from "./img/react-logo.png";
import Button from "./components/Button";
import Users from "./components/Users";
import Form from "./components/Form";

class App extends React.Component {
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
    this.addUser = this.addUser.bind(this);
    this.delUser = this.delUser.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header title="Header" />

        <img src={reactLogo} alt="React JS logo" />

        <div className="main-wrapper">
          <aside>
            <Form onAdd={this.addUser} />
          </aside>
          <main className="main">
            <Users users={this.state.users} removeUser={this.delUser} />
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
}

export default App;
