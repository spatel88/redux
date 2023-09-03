import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";

export const ADD_POST_ACITON = '[posts page] add post';

export const addPost = createAction(ADD_POST_ACITON,props<{ post: Post }>());