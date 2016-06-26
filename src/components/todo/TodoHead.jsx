'use strict';

import React from 'react';
import TodoSwitch from './TodoSwitch';

import {Menu, Icon} from 'antd';

class TodoHead extends React.Component {
    render() {
        let {handleSwitch, done} = this.props;

        return (
            <Menu onClick={e => e.key} selectedKeys={["todo"]} mode="horizontal">
                <Menu.Item key="todo">
                    <Icon type="tags" />Todo
                </Menu.Item>
                <Menu.Item key="done">
                    <Icon type="check" />Done   // Switch
                </Menu.Item>
                <Menu.Item key="add" onClick={() => 1}>
                    <Icon type="plus-circle-o" />Add    // Add Link
                </Menu.Item>
            </Menu>
        );
    }
}

export default TodoHead;
