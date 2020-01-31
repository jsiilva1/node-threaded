/*
 * System dependencies
*/
import express from 'express';
import bodyParser from 'body-parser';

/*
 * Application dependencies
*/
import router from './routes';

const app = express();

const bootstrap = async () => {
  app.use(bodyParser.json());
  app.use(router);

  return app;
};

module.exports = {
  bootstrap,
};