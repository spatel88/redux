import { createReducer } from "@ngrx/store";
import { initialState } from "./posts.state";

export const postReducer = createReducer(
    initialState
);

