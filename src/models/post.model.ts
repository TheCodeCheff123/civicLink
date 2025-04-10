import { Schema, model } from 'mongoose';
import { IPost } from '../interfaces/post.interface';

const postSchema = new Schema(
  {
    name: {
      type: String
    },
    message: {
      type: String
    },
    upvotes: {
      type: [String],
      default: []
    },
    downvotes: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

export default model<IPost>('Post', postSchema);