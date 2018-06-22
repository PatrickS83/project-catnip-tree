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

router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
