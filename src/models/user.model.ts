import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    role: {
      type: String,
      enum: ['govermentOfficial','Journalist','citizen'],
    },
    password: {
      type: String
    },
    nin: {
      type: String
    },
    isVerified: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

export default model<IUser>('User', userSchema);
