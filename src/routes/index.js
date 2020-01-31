import express from 'express';

const router = express.Router();

router.get('/dumb_health_check', (req, res) => res.json('Hello!'));

module.exports = router;