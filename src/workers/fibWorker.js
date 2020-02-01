const fib = require('fibonacci');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const runFib = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__filename, { workerData });
  
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};

if (!isMainThread) {
  const result = fib.iterate(workerData.iterationNumber);
  
  parentPort.postMessage(result);
}

module.exports = runFib;