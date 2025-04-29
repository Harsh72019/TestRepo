import mongoose from 'mongoose';

// Schema for the Tag model as required

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

const Tag = mongoose.model('Tag', tagSchema);
export default Tag;
