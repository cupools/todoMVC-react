'use strict';

import React from 'react';

class TodoItem extends React.Component {
    constructor() {
        super();
        this.state = {
            done: true
        };
    }

    render() {
        let item = this.props.item;

        return (
            <div className="row">
                <div className="ant-col-18">{item.desc}</div>
                <div className="ant-col-6">{item.time}</div>
            </div>
        );
    }
}

export default TodoItem;
