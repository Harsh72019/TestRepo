import mongoose from 'mongoose';

// Schema for the Post model as required

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }],
}, {
  timestamps: true
});

const Post = mongoose.model('Post', postSchema);
export default Post;
