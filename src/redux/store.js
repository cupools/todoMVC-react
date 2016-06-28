'use strict';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';


import reducers from './reducers';
import storage from '../database/storage';

import {ADD_TODO, FINISH_TODO, DELETE_TODO, SET_FILTER} from '../constants/ActionTypes';
import {SHOW_DONE, SHOW_TODO} from '../constants/FilterTypes';

let updateStorage = store => next => action => {
    switch(action.type) {
        case ADD_TODO:
            action.payload.id = storage.add(action.payload);
            break;
        case FINISH_TODO:
            storage.finish(action.index);
            break;
        case DELETE_TODO:
            storage.delete(action.index);
            break;
    }
    let result = next(action);
    return result;
};

let wrapStoreWithMiddleware = applyMiddleware(updateStorage)(createStore);
let store = wrapStoreWithMiddleware(combineReducers({
        list: reducers.list,
        filter: reducers.filter,
        routing: routerReducer
    }), {
        list: storage.get(),
        filter: SHOW_TODO,
        routing: ''
    }
);

export default store;
