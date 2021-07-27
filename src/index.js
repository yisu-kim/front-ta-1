import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import HayanMind from "./service/hayanmind";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const httpClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

const hayanmind = new HayanMind(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App hayanmind={hayanmind} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
