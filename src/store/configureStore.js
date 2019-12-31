import { createStore, combineReducers } from 'redux';

export default () => {
    const store = createStore((state = { count: 0 }, action) => {
        return state;
    });
    return store;
};