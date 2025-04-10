import { Document } from 'mongoose';

export interface IPost extends Document {
    _id: string | number;
    name: string;
    message: string;
    upvotes: string[];
    downvotes: string[];
} 