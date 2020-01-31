/*
 * System dependencies
*/
import cluster from 'cluster';
import os from 'os';

/*
 * Application dependencies
*/
import { bootstrap } from './src/app';
import log from './src/log';

const CPUs = os.cpus().length;

if (cluster.isMaster) {
  log.info(`Master ${process.pid} is running!`);

  for (let i = 0; i < CPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    log.info(`Worker ${worker.process.pid} is running!`);
  });
} else {
  bootstrap()
    .then((app) => {
      app.listen(5000, () => console.log('App running on port 5000'));
      
      log.info(`Worker ${process.pid} is running!`);
    })
    .catch((err) => {
      log.error(err);
      
      process.exit(1);
    });
}