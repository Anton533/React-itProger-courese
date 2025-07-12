const app = document.getElementById("app");

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return React.createElement(
    "button",
    {
      className: "my-button",
      onClick: handleClick,
      type: "button",
    },
    "Click Me"
  );
}

ReactDOM.render(React.createElement(App), app);
