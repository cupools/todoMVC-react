'use strict';

import React from 'react';
import {DatePicker} from 'antd';
import {Link} from 'react-router';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import Storage from '../storage';

import 'antd/dist/antd.css';

class TodoPage extends React.Component {
    constructor() {
        super();

        this.state = {
            done: false
        };
    }

    handleSwitch(done) {
        this.setState({done});
    }

    render() {
        let list = Storage.getAll();

        return (
            <div className="todo-wrap">
                <TodoHead handleSwitch={this.handleSwitch.bind(this)}/>
                <TodoList list={list} done={this.state.done}/>
                <Link to="/add">add</Link>
            </div>
        );
    }
}

export default TodoPage;
