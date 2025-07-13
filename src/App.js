import React from "react";
import Header from "./components/Header";
import reactLogo from "./img/react-logo.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Enter text",
      userData: "",
    };
    this.inputCLick = this.inputCLick.bind(this);
  }

  componentDidUpdate(prevProp) {
    if (this.state.text !== "Enter text") console.log("text !== 'Enter text");
    if (this.state.userData === "hi") console.log("Hello");
  }

  inputCLick = () => {
    this.setState({ text: "Changed" });

    console.log("clicked");
  };
  mouseOver = () => {
    console.log("mouse over");
  };
  btnCLick = () => {
    console.log("clicked");
  };
  btnMouseOver = () => {
    console.log("mouse over");
  };

  render() {
    return (
      <div className="wrapper">
        <Header title="Header 1" />

        <h1 id="counter">React</h1>
        <img src={reactLogo} alt="React JS logo" />

        <h2>{this.state.userData}</h2>

        <input
          placeholder={this.state.text}
          type="text"
          onClick={this.inputCLick}
          onMouseEnter={this.mouseOver}
          onChange={(event) => this.setState({ userData: event.target.value })}
        />
        <button onClick={this.btnCLick} onMouseOver={this.btnMouseOver}>
          Click me
        </button>
      </div>
    );
  }
}

export default App;
