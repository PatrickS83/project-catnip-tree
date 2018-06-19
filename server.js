const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// mongoose config
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('error', err => {
  console.error(`Mongoose failed :( → ${err.message}`);
});

// express config
const app = express();
app.get('/', (req, res) => res.send("it's working"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening to port ${PORT}`));
