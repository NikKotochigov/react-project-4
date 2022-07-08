import React from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./index.css";

export default function App() {
  return <React.StrictMode><Shop /></React.StrictMode>
}

render(<App />, document.querySelector("#root"));
