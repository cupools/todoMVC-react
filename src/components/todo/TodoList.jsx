'use strict';

import React from 'react';

import {Table, Icon} from 'antd';

const columns = [
    {
        title: 'DESC',
        dataIndex: 'desc',
        key: 'desc'
    }, {
        title: 'Created Date',
        dataIndex: 'time',
        key: 'time'
    }, {
        title: 'Operation',
        key: 'operation',
        render: (text, record) => (
            <span>
                <a href="#">Finish</a>
                <span className="ant-divider"></span>
                <a href="#">Delete</a>
            </span>
        )
    }
];

class TodoList extends React.Component {
    render() {
        let {list} = this.props;

        return (
            <Table columns={columns} dataSource={list}></Table>
        );
    }
}

export default TodoList;
