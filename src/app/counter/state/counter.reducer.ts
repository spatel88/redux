import { createReducer, on } from "@ngrx/store";
import * as counterActions from "./counter.actions";
import { initialState } from "./counter.state";

export const counterReducer = createReducer(
    initialState,
    on(counterActions.increment, (state) =>{
        return{
            ...state,
            counter: state.counter + 1,
        };
    }), on(counterActions.decrement,(state) => {
        return{
            ...state,
            counter: state.counter - 1,
        };
    }), on(counterActions.reset, (state) => {
        return{
            ...state,
            counter: 0,
        };
    }), on(counterActions.customIncrement,(state,action) => {
        return{
            ...state,
            counter: state.counter + action.count,
        }
    }), on(counterActions.nameChange,(state) => {
        return{
            ...state,
            channelName: "modified channel name",
        };
    })

);