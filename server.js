const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// mongoose config
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('error', err => {
  console.error(`Mongoose failed :( → ${err.message}`);
});
require('./models/User');
require('./models/Post');

// express config
const app = express();
const routes = require('./routes/postRoutes.js');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
