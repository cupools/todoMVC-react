'use strict';

import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    constructor() {
        super();
    }

    render() {
        let list = this.props.list;
        let done = this.props.done;

        return (
            <div>{list.map(t => t.done === done ? t.desc : 1)}</div>
        );
    }
}

export default TodoList;
