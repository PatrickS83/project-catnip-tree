const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  nick: { type: String, default: 'User' },
  liked: { type: [String], default: [] },
  disliked: { type: [String], default: [] },
  joined: { type: Date, default: Date.now }
});

mongoose.model('users', userSchema);
