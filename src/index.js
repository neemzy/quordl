import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const MAX_TRIES = 9;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App answers={["verni", "heure", "chien", "conte"]} maxTries={MAX_TRIES} />
  </React.StrictMode>
);
