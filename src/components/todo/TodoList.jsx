'use strict';

import React from 'react';
import {Table, Icon} from 'antd';

const columns = [
    {
        title: 'DESC',
        dataIndex: 'desc',
        key: 'desc',
        width: '50%'
    }, {
        title: 'Expected Date',
        dataIndex: 'time',
        key: 'time',
        width: '25%'
    }, {
        title: 'Operation',
        key: 'operation',
        width: '25%',
        render: (text, record) => (
            <span>
                {record.filter === 'SHOW_TODO' ? (
                    <span>
                        <a href="#" onClick={() => record.handleFinish(record.id)}>Finish</a>
                        <span className="ant-divider"></span>
                    </span>
                ) : null}
                <a href="#" onClick={() => record.handleDelete(record.id)}>Delete</a>
            </span>
        )
    }
];

class TodoList extends React.Component {
    render() {
        let {list, handleFinish, handleDelete, filter} = this.props;

        list.map(item => {
            item.handleFinish = handleFinish;
            item.handleDelete = handleDelete;
            item.filter = filter;
        });

        return (
            <Table columns={columns} dataSource={list} rowKey={i => i.id} />
        );
    }
}

export default TodoList;
