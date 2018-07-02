const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { addLike, addDislike, removeLike, removeDislike } = require('../helpers/like-dislike');
const requireAuth = require('../helpers/requireAuth');

const Post = mongoose.model('posts');
const User = mongoose.model('users');

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', requireAuth, (req, res) => res.send('postroute works'));

// @route   GET api/posts/
// @desc    Gets all Posts
// @access  Public
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('creator');
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json(err);
  }
});

// @route   GET api/posts/:id
// @desc    Gets one post
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('creator');
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json(err);
  }
});

// @route   POST api/posts/
// @desc    Creates a post
// @access  Protected
router.post('/', requireAuth, (req, res) => {
  const { subject, content } = req.body;
  new Post({
    subject,
    content,
    creator: req.user.id,
    created: Date.now()
  })
    .save()
    .then(post => res.send(post))
    .catch(err => res.status(400).send(err));
});

// @route   POST api/posts/like/:id
// @desc    Like a post
// @access  Protected
router.post('/like/:id', requireAuth, async (req, res) => {
  const [user, post] = await Promise.all([
    User.findById(req.user.id),
    Post.findById(req.params.id).populate('creator')
  ]);
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
    .then(result => res.json(result))
    .catch(err => res.status(400).send(err));
});

// @route   POST api/posts/dislike/:id
// @desc    Dislike a post
// @access  Protected
router.post('/dislike/:id', requireAuth, async (req, res) => {
  const [user, post] = await Promise.all([
    User.findById(req.user.id),
    Post.findById(req.params.id).populate('creator')
  ]);
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
    .then(result => res.json(result))
    .catch(err => res.status(400).send(err));
});

module.exports = router;
