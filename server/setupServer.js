const express = require('express');
const compression = require('compression');
const { createProxyMiddleware } = require('http-proxy-middleware');

const BACKEND_URL = 'MyUrl';
const CONTEXT_PATH = '/';
const PORT = 8080;

const proxyConfig = {
  autoRewrite: true,
  changeOrigin: true,
  logLevel: 'debug',
  secure: false,
  followRedirects: true,
}

const setupServer = (app) => {
  app.use(express.static(__dirname));
  app.use(express.static('dist'));
  app.use(compression());
}

const addProxy = (app) => {
  const url = `${CONTEXT_PATH}api`;

  const joinedProxyOptions = {
    ...proxyConfig,
    target: BACKEND_URL,
    pathRewrite: { [`^${url}`]: '' },
  }

  app.use(url, createProxyMiddleware(joinedProxyOptions));
}

const addDefaultErrorHandling = (app) => {
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Internal server error');
  })
}

module.exports = {
  CONTEXT_PATH,
  PORT,
  setupServer,
  addDefaultErrorHandling,
  addProxy
};
