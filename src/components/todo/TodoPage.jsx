'use strict';

import React from 'react';
import {DatePicker, Button} from 'antd';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';
import TodoHead from './TodoHead';
import TodoList from './TodoList';

class TodoPage extends React.Component {
    render() {
        let {list, filter, dispatch} = this.props;

        return (
            <div className="todo-wrap">
                <TodoHead handleSwitch={f => dispatch(actions.setFilter(f))}/>
                <TodoList list={list}/>
            </div>
        );
    }
}

function filterTodos(list, filter) {
    switch (filter) {
        case actions.VisiableFilters.SHOW_TODO:
            return list.filter(i => !i.done);
        case actions.VisiableFilters.SHOW_DONE:
            return list.filter(i => i.done);
    }
}

function select(state) {
    return {
        list: filterTodos(state.list, state.filter),
        filter: state.filter
    };
}

export default connect(select)(TodoPage);
