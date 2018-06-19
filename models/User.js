const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  liked: [String],
  disliked: [String]
});

module.exports = mongoose.model('users', userSchema);
