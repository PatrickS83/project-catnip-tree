const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Post = mongoose.model('posts');

router.get('/', (req, res) => res.send('homeroute works'));
router.get('/api/posts', (req, res) => res.send('subrouting works'));

router.post('/api/posts', (req, res) => {
  const { subject, content } = req.body;
  const post = new Post({
    subject,
    content,
    created: Date.now()
  })
    .save()
    .then(post => res.send(post))
    .catch(err => res.status(422).send(err));
});

module.exports = router;
