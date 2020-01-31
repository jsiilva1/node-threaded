import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const bootstrap = async () => {
  app.use(bodyParser.json());

  return app;
};

module.exports = {
  bootstrap,
};