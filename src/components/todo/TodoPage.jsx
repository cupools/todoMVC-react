
import React from 'react';
import TodoHead from './TodoHead';
import TodoList from './TodoList';

class TodoPage extends React.Component {
    render() {
        return (
            <div>
                <TodoHead {...this.props}/>
                <TodoList {...this.props}/>
            </div>
            );
    }
}

export default TodoPage;
