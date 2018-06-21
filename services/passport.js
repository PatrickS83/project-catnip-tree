const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = passport => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
      },
      (accesToken, refeshToken, profile, done) => {
        console.log('AccessToken:', accesToken);
        console.log('AccessToken:', refeshToken);
        console.log('AccessToken:', profile);
      }
    )
  );
};
