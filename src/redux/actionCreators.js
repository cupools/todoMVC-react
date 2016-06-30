'use strict';

import { ADD_TODO, FINISH_TODO, DELETE_TODO, SET_FILTER } from '../constants/ActionTypes';

export function addTodo({desc, time}) {
    return {
        type: ADD_TODO,
        payload: {
            desc,
            time: time.toLocaleDateString()
        }
    };
}

export function finishTodo(index) {
    return {
        type: FINISH_TODO,
        index
    };
}

export function deleteTodo(index) {
    return {
        type: DELETE_TODO,
        index
    };
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    };
}
