import { combineReducers, createStore } from 'redux';

const reducers = combineReducers({

});
export type AppRootStateType = ReturnType<typeof reducers>;

export const store = createStore(reducers);
