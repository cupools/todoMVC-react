'use strict';

import { SHOW_DONE, SHOW_TODO } from '../constants/FilterTypes';

function filterTodos(list, filter) {
    switch (filter) {
        case SHOW_TODO:
            return list.filter(i => !i.done);
        case SHOW_DONE:
            return list.filter(i => i.done);
        default:
            return list.filter(i => !i.done);
    }
}

function select(state) {
    return {
        list: filterTodos(state.list, state.filter),
        filter: state.filter
    };
}

export default select;
