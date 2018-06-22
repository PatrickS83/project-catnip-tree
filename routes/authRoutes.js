const express = require('express');
const router = express.Router();
const passport = require('passport');

// /auth routes
// Google OAuth Route
router.get(
  '/google/',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/google/callback', passport.authenticate('google'));

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send('Successfully logged out!');
});

module.exports = router;
