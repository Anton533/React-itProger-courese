import React from "react";
import Header from "./components/Header";
import reactLogo from "./img/react-logo.png";
import Button from "./components/Button";
import Users from "./components/Users";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header title="List of users:" />

        <main className="main">
          <Users />
        </main>

        <img src={reactLogo} alt="React JS logo" />

        <h1>
          Clicks: <span id="counter"></span>
        </h1>
        <Button />
      </div>
    );
  }
}

export default App;
