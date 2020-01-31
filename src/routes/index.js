import express from 'express';

const router = express.Router();

router.get('/dumb_health_check', async (req, res) => res.json('Hello!'));

module.exports = router;