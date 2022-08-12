import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const MAX_TRIES = 9;

fetch("dico.txt")
  .then(response => response.text())
  .then(data => {
    const dictionary = data.split("\n").filter(word => word);
    const answers = [];

    while (answers.length < 4) {
      const answer = dictionary[Math.floor(Math.random() * dictionary.length)];

      if (!answers.includes(answer)) {
        answers.push(answer);
      }
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(
      <React.StrictMode>
        <App answers={answers} maxTries={MAX_TRIES} />
      </React.StrictMode>
    );
  });
