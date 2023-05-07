import React from "react";
import ReactDOM from "react-dom";

const fname = "Aditi";
const lname = "Patni";
const num = 21;
ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <h6> using template literals-</h6>
    <h1>Hello {`${fname} ${lname}`} ! </h1>
    <h6>By string Concatenation</h6>
    <h1>Hello {fname + " " + lname} !</h1>
    <p>your age is {num} years.</p>
    <p>and your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);