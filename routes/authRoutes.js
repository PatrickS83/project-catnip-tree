const express = require('express');
const router = express.Router();
const passport = require('passport');

// @route   GET auth/google/
// @desc    Starts passport google O-Auth authentification
// @access  Public
router.get(
  '/google/',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

// @route   GET auth/google/callback
// @desc    Callback URL from google o-auth process
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/');
});

// @route   GET auth/current_user
// @desc    Shows user information
// @access  Protected
router.get('/current_user', (req, res) => {
  res.send(req.user);
});

// @route   GET auth/logout
// @desc    Logs user out
router.get('/logout', (req, res) => {
  req.logout();
  res.send('Successfully logged out!');
});

module.exports = router;
