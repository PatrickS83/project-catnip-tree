const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  liked: { type: [String], default: [] },
  disliked: { type: [String], default: [] }
});

mongoose.model('users', userSchema);
