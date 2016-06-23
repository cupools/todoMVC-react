'use strict';

import React from 'react';
import {Link} from 'react-router';
import TodoHead from './TodoHead';
import TodoList from './TodoList';

class TodoPage extends React.Component {
    render() {
        let {list, filter, handleSwitch} = this.props;

        return (
            <div className="todo-wrap">
                <TodoHead handleSwitch={handleSwitch}/>
                <TodoList list={list}/>
                <Link to="add" >to Add</Link>
            </div>
        );
    }
}

export default TodoPage;
