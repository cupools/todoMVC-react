'use strict';

import React from 'react';
import { Menu, Icon } from 'antd';

class AddHead extends React.Component {
    render() {
        return (
            <Menu selectedKeys={['add']} mode="horizontal" style={{ marginBottom: 20 }}>
                <Menu.Item key="add">
                    <Icon type="plus-circle-o" /> Add
                </Menu.Item>
            </Menu>
            );
    }
}

export default AddHead;
