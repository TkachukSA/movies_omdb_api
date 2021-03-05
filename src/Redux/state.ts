import {applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk'
import {moviesReducer} from "./appReducer";

const reducers = combineReducers({
    movies:moviesReducer
});
export type AppRootStateType = ReturnType<typeof reducers>;

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;