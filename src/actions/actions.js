'use strict';

export const ADD_TODO = 'ADD_TODO';
export const FINISH_TODO = 'FINISH_TODO';
export const SET_FILTER = 'SET_FILTER';

export const VisiableFilters = {
    SHOW_DONE: 'SHOW_DONE',
    SHOW_TODO: 'SHOW_TODO'
};

export function addTodo(desc) {
    return {
        type: ADD_TODO,
        desc
    };
}

export function finishTodo(index) {
    return {
        type: FINISH_TODO,
        index
    };
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    };
}
