import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";
import { addPost } from "./posts.actions";

export const postReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {
        let post = {...action.post};
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts,post],
            
        }
    })
);

