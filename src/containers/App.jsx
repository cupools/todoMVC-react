'use strict';

import React from 'react';
import {Route} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

import 'antd/dist/antd.css';

class App extends React.Component {

    render() {
        let {dispatch, list, filter} = this.props;

        let handleSwitch = stat => dispatch(actions.setFilter(stat));
        let handleAdd = desc => dispatch(actions.addTodo(desc));
        let handleFinish = index => dispatch(actions.finishTodo(index));
        let handleDelete = index => dispatch(actions.deleteTodo(index));

        let handleTodoLink = () => this.context.router.push('/todo');
        let handleAddLink = () => this.context.router.push('/add');

        let childProps = {dispatch, list, filter, handleSwitch, handleAdd, handleFinish, handleDelete, handleTodoLink, handleAddLink};

        return (
            <div>
                {this.props.children && React.cloneElement(this.props.children, childProps)}
            </div>
        );
    }

}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function filterTodos(list, filter) {
    switch (filter) {
        case actions.VisiableFilters.SHOW_TODO:
            return list.filter(i => !i.done);
        case actions.VisiableFilters.SHOW_DONE:
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

export default connect(select)(App);
