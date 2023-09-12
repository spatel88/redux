import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";
import { addPost, deletePost, updatePost } from "./posts.actions";

//state holds all the old value and action hold only new update specific value
export const postReducer = createReducer(
    initialState,
    on(addPost, (state, action) => {
        let post = {...action.post};
        post.id = (state.posts.length + 1).toString();
        return {
            ...state,
            posts: [...state.posts,post],
            
        }
    }), on(updatePost, (state,action) => {
        const updatedPost = state.posts.map((post) => {
            return action.post.id === post.id ? action.post : post;
        });
        return {
            ...state,
            posts: updatedPost,
        }
    }), on(deletePost, (state, action) =>{        
        const updatedPost = state.posts.filter( post => {
            return post.id !== action.id;
        });
        return {
            ...state,
            posts: updatedPost,
        }
    })
);

