import React from "react";
import Button from "./Button";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h2>{this.props.title}</h2>

        <Button />
        <Button text="Button" />
      </header>
    );
  }
}

export default Header;
