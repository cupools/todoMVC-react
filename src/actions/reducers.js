'use strict';

import { combineReducers } from 'redux';
import * as actions from './actions';

function visiableFilter(state = actions.VisiableFilters.SHOW_TODO, action) {
    switch (action.type) {
        case actions.SET_FILTER:
            return action.filter ? 'SHOW_TODO' : 'SHOW_DONE';
        default:
            return state;
    }
}

function list(state = [], action) {
    switch (action.type) {
        case actions.ADD_TODO:
            return [...state, {
                key: Math.random(),
                desc: action.desc,
                time: action.time
            }];
        default:
            return state;
    }
}

export default {
    list,
    filter: visiableFilter
};
