import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import HayanMind from "./service/hayanmind";
import { createGlobalStyle } from "styled-components";
import { BASE_URL } from "./utils/constants";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

const httpClient = axios.create({
  baseURL: BASE_URL,
});

const hayanmind = new HayanMind(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App hayanmind={hayanmind} />
  </React.StrictMode>,
  document.getElementById("root")
);
