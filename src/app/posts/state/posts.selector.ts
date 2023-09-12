import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { PostsState } from "./posts.state";
import { AppState } from "src/app/store/app.state";

//insted of PostState we can aslo select AppState which contains all the state
const getPostsState = createFeatureSelector<PostsState>('post');

export const selectPost = (state: AppState) => state.post;

export const getPosts = createSelector(getPostsState, (state) =>{         
    return state.posts;
});

// export const getPostById1 = (props: {id: string}) => {    
//      createSelector(getPostsState, (state) => {
//         return state.post.posts.find((post) => post.id === props.id)
//     });
// }   

export const getPostById = createSelector(getPostsState, (state: any, props: any) => {
    return state.posts.find((post: any) => post.id === props.id);
  });