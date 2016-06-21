'use strict';

import React from 'react';
import TodoSwitch from './TodoSwitch';

class TodoHead extends React.Component {
    constructor() {
        super();
    }

    render() {
        let {handleSwitch, done} = this.props;

        return (
            <div className="row">
                <div className="ant-col-21">
                    <h1>I'm header</h1>
                </div>
                <div className="ant-col-3">
                    <TodoSwitch handleSwitch={handleSwitch} />
                </div>
            </div>
        );
    }
}

export default TodoHead;
