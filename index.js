import cluster from 'cluster';
import { bootstrap } from './src/app';
import os from 'os';

const CPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running!`);

  for (let i = 0; i < CPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} is running!`);
  });
} else {
  bootstrap()
    .then((app) => {
      app.listen(5000, () => console.log('App running on port 5000'));
      
      console.log(`Worker ${process.pid} is running!`);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}