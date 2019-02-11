const express = require('express');
const path = require('path');

const webpack = require('webpack');
const webpackconfig = require('./webpack.config');
const webpackMiddleware = require("webpack-dev-middleware");

const port = process.env.PORT || 8888;
const app = express();

const wpmw = webpackMiddleware(webpack(webpackconfig),{});
app.use(wpmw);

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.get('/test', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'test.html'));
});

app.listen(port);
console.log(`server started on port ${port}`);
