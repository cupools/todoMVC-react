'use strict';

import React from 'react';
import {Menu, Icon} from 'antd';
import * as actions from '../../actions/actions';

class TodoHead extends React.Component {
    constructor() {
        super();
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(item) {
        switch(item.key) {
            case 'todo':
                return this.props.handleSwitch(true);
            case 'done':
                return this.props.handleSwitch(false);
            case 'add':
                return this.props.handleAddLink();
        }
    }

    render() {
        let {filter} = this.props;
        let selectedKey = (filter === actions.VisiableFilters.SHOW_TODO ? 'todo' : 'done');

        return (
            <Menu selectedKeys={[selectedKey]} mode="horizontal" onSelect={this.handleSelect} style={{marginBottom: 20}}>
                <Menu.Item key="todo">
                    <Icon type="tags"/>Todo
                </Menu.Item>
                <Menu.Item key="done">
                    <Icon type="check"/>Done
                </Menu.Item>
                <Menu.Item key="add" onClick={() => 1}>
                    <Icon type="plus-circle-o"/>Add
                </Menu.Item>
            </Menu>
        );
    }
}

export default TodoHead;
