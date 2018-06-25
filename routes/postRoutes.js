const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { addLike, addDislike, removeLike, removeDislike } = require('../helpers/like-dislike');

const Post = mongoose.model('posts');
const User = mongoose.model('users');

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.send('postroute works'));

// @route   POST api/posts/
// @desc    Creates a post
// @access  Protected
router.post('/', (req, res) => {
  const { subject, content } = req.body;
  new Post({
    subject,
    content,
    creator: req.user.id,
    created: Date.now()
  })
    .save()
    .then(post => res.send(post))
    .catch(err => res.status(422).send(err));
});

// @route   POST api/posts/like/:id
// @desc    Like a post
// @access  Protected
router.post('/like/:id', async (req, res) => {
  const user = await User.findById(req.user.id);
  const post = await Post.findById(req.params.id);
  const alreadyLiked = user.liked.find(postID => postID === post.id);
  const alreadyDisliked = user.disliked.find(postID => postID === post.id);

  if (alreadyLiked) {
    removeLike(user, post);
  } else if (alreadyDisliked) {
    removeDislike(user, post);
    addLike(user, post);
  } else {
    addLike(user, post);
  }

  Promise.all([post.save(), user.save()])
    .then(result => res.json({ result }))
    .catch(err => console.log(err));
});

// @route   POST api/posts/dislike/:id
// @desc    Dislike a post
// @access  Protected
router.post('/dislike/:id', async (req, res) => {
  const user = await User.findById(req.user.id);
  const post = await Post.findById(req.params.id);
  const alreadyLiked = user.liked.find(postID => postID === post.id);
  const alreadyDisliked = user.disliked.find(postID => postID === post.id);

  if (alreadyDisliked) {
    removeDislike(user, post);
  } else if (alreadyLiked) {
    removeLike(user, post);
    addDislike(user, post);
  } else {
    addDislike(user, post);
  }

  Promise.all([post.save(), user.save()])
    .then(result => res.json({ result }))
    .catch(err => console.log(err));
});

module.exports = router;
