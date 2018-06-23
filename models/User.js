const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  liked: { type: [String], default: [] },
  disliked: { type: [String], default: [] },
  joined: { type: Date, default: Date.now }
});

mongoose.model('users', userSchema);
