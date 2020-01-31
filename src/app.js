/*
 * System dependencies
*/
import express from 'express';
import bodyParser from 'body-parser';

/*
 * Application dependencies
*/
import defaultRouter from './routes';
import fibRouter from './routes/fib';

const app = express();

const bootstrap = async () => {
  app.use(bodyParser.json());
  app.use(defaultRouter);
  app.use(fibRouter);

  return app;
};

module.exports = {
  bootstrap,
};