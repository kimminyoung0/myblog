import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga4";

ReactGA.initialize("G-XXXXXXX"); // GA4 Tracking ID 입력

ReactDOM.render(<App />, document.getElementById("root"));
