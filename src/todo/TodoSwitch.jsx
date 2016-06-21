'use strict';

import React from 'react';
import {Form, Switch} from 'antd';

class TodoSwitch extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Switch onChange={this.props.handleSwitch}/>
        );
    }
}

export default TodoSwitch;
