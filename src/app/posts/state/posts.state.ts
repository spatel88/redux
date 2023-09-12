import { Post } from "src/app/models/posts.model";

export interface PostsState {
    posts: Post[];
}

export const initialState: PostsState = {
    posts: [ 
        {id: "1", title: "First Post", description: " This is my first post"},
        {id: "2", title: "Second Post", description: " This is my second post"}
    ]
}