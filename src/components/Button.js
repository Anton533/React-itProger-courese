import React, { useEffect, useState } from "react";

const Button = ({ text = "Click me" }) => {
  const [click, setClick] = useState(0);

  useEffect(() => {
    let counter = document.getElementById("counter");
    counter.innerText = `${click}`;
  });

  return (
    <button className="btn" onClick={() => setClick(click + 1)}>
      {text}
    </button>
  );
};

export default Button;
