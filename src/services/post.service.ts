import Post from '../models/post.model';
import { IPost } from '../interfaces/post.interface';

class PostService {
    // get all posts
    public getAllPosts = async (): Promise<IPost[]> => {
        const data = await Post.find();
        return data;
    };

    // create new post
    public newPost = async (body: IPost): Promise<IPost> => {
        const data = await Post.create(body);
        return data;
    };

    // update a post
    public updatePost = async (_id: string, body: IPost): Promise<IPost> => {
        const data = await Post.findByIdAndUpdate(
            {
                _id
            },
            body,
            {
                new: true
            }
        );
        return data;
    };

}