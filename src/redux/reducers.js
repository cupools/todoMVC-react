'use strict';

import { combineReducers } from 'redux';
import * as actions from './actions';

function list(state = [], action) {
    switch (action.type) {
        case actions.ADD_TODO:
            return [...state, Object.assign({}, action.payload, { done: false })];
        case actions.FINISH_TODO:
            return [...state].map(item => {
                item.id === action.index && (item.done = true);
                return item;
            });
        case actions.DELETE_TODO:
            return [...state].filter(item => item.id !== action.index);
        default:
            return state;
    }
}

function visiableFilter(state = actions.VisiableFilters.SHOW_TODO, action) {
    switch (action.type) {
        case actions.SET_FILTER:
            return action.filter ? actions.VisiableFilters.SHOW_TODO : actions.VisiableFilters.SHOW_DONE;
        default:
            return state;
    }
}

export default {
    list,
    filter: visiableFilter
};
