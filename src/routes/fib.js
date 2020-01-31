/*
 * System dependencies
*/
import express from 'express';
import fib from 'fibonacci';

const router = express.Router();

router.get('/dumb_fib', (req, res) => {
  const calculateFib = fib.iterate(11000);

  res.json(calculateFib);
});

module.exports = router;