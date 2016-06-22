'use strict';

import React from 'react';
import {Form, Switch} from 'antd';

class TodoSwitch extends React.Component {
    render() {
        let {handleSwitch} = this.props;
        return (
            <Switch onChange={handleSwitch} defaultChecked={true}/>
        );
    }
}

export default TodoSwitch;
