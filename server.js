const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');

require('dotenv').config();

// mongoose config
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('error', err => {
  console.error(`Mongoose failed to connect :( → ${err.message}`);
});
require('./models/User');
require('./models/Post');

// express config
const app = express();
const postRoutes = require('./routes/postRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// passport config
require('./services/passport');
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [process.env.COOKIE_KEY]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/api/posts', postRoutes);

// deployment config
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Server init
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
