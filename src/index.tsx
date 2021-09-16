import React from 'react';
import ReactDOM from 'react-dom';
import axios, { AxiosInstance } from 'axios';
import { API } from 'utils/constants';
import CommentService from 'services/comment';
import { GlobalStyle } from 'styles/globalStyle';
import App from 'App';

const httpClient: AxiosInstance = axios.create({
  baseURL: API.baseURL,
});

const commentService = new CommentService(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App commentService={commentService} />
  </React.StrictMode>,
  document.getElementById('root')
);
