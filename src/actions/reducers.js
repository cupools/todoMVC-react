'use strict';

import { combineReducers } from 'redux';
import * as actions from './actions';
import {data} from './storage';

function visiableFilter(state = actions.VisiableFilters.SHOW_TODO, action) {
    let filter  = action.filter ?  'SHOW_TODO' : 'SHOW_DONE';
    switch (action.type) {
        case actions.SET_FILTER:
            return filter;
        default:
            return state;
    }
}

function list(state = data, action) {
    switch (action.type) {
        case actions.ADD_TODO:
            return [{
                key: Math.random(),
                time: new Date().toLocaleDateString()
            }];
        default:
            return state;
    }
}

export default {
    list,
    filter: visiableFilter
};
