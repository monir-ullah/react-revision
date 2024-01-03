import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import CounterApp from "./CounterApp";
import PasswordGenerator from "./components/PasswordGenerator";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp />
    <PasswordGenerator />
  </React.StrictMode>
);
