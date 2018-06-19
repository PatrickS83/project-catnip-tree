const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  subject: {
    type: String,
    trim: true,
    required: 'Please enter a subject line!'
  },
  content: {
    type: String,
    trim: true,
    required: 'Please enter some content in your post!'
  },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  created: { type: Date, required: 'Creation Date is required' }
});

module.exports = mongoose.model('posts', postSchema);
