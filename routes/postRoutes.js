const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Post = mongoose.model('posts');

// /api/posts routes
router.get('/', (req, res) => res.send('subrouting works'));

router.post('/', (req, res) => {
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
