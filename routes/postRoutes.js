const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('homeroute works'));
router.get('/api/posts', (req, res) => res.send('subrouting works'));

module.exports = router;
