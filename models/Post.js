const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
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
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      created: {
        type: Date,
        default: Date.now
      }
    }
  ],
  created: { type: Date, default: Date.now }
});

mongoose.model('posts', postSchema);
