import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  setTimeout(() => {
    fetch("/stations")
      .then((res) => res.json())
      .then((result) => {
        // TODO:  Display each station in a list, and be able to select a station to
        // view it's "Estimated Time of Departure(s)"
        console.log(result);
      })
      .catch((error) => {
        console.log("Error: " + JSON.stringify(error));
      });
  }, 1000);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
