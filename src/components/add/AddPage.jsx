'use strict';

import React from 'react';
import {Menu, Icon} from 'antd';
import AddForm from './AddForm';
import AddHead from './AddHead';

class AddPage extends React.Component {
    render() {
        return (
            <div>
                <AddHead />
                <AddForm handleAdd={this.props.handleAdd} handleTodoLink={this.props.handleTodoLink}/>
            </div>
        );
    }
}

export default AddPage;
