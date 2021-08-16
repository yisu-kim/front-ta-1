import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { API } from 'utils/constants';
import HayanMind from 'service/hayanmind';
import App from 'App';
import { GlobalStyle } from 'styles/globalStyle';

const httpClient = axios.create({
  baseURL: API.baseURL,
});

const hayanmind = new HayanMind(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App hayanmind={hayanmind} />
  </React.StrictMode>,
  document.getElementById('root')
);
