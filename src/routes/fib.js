/*
 * System dependencies
*/
import express from 'express';
import fib from 'fibonacci';

/*
 * Internal dependencies
*/
import log from '../log';
import runFibWorker from '../workers/fibWorker';

const router = express.Router();

router.get('/dumb-fib', (req, res) => {
  const calculateFib = fib.iterate(11000);

  res.json(calculateFib);
});

router.get('/threaded-fib', (req, res) => {
  runFibWorker({ iterationNumber: 11000 }).then(res => log.info(res));
  
  res.json('Processing result on worker thread');
});

module.exports = router;