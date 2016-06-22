'use strict';

import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        let {list} = this.props;

        return (
            <div class="ant-row">{list.map(t => <TodoItem item={t} key={t.key}/>)}</div>
        );
    }
}

export default TodoList;
