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
  likes: Number,
  dislikes: Number
});

mongoose.model('posts', postSchema);
