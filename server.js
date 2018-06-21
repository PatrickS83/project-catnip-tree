const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

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

// passport middleware
require('./services/passport')(passport);

// Routes
app.use('/auth', authRoutes);
app.use('/api/posts', postRoutes);

// Server init
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
