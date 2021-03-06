const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('users');

// stores userID in cookie
passport.serializeUser((user, done) => done(null, user.id));

// gets userID from cookie and returns userdata from database
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refeshToken, profile, done) => {
      // check if user already exists
      const user = await User.findOne({ googleId: profile.id });
      if (user) return done(null, user);

      // no existing user --> create new user
      const newUser = await new User({ googleId: profile.id, nick: profile.displayName }).save();
      done(null, newUser);
    }
  )
);
