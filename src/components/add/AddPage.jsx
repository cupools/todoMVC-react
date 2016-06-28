'use strict';

import React from 'react';
import {Menu, Icon} from 'antd';
import AddForm from './AddForm';
import AddHead from './AddHead';

class AddPage extends React.Component {
    render() {
        const handleAdd = payload => this.props.actions.addTodo(payload);

        return (
            <div>
                <AddHead />
                <AddForm handleAdd={handleAdd} handleTodoLink={this.props.handleTodoLink}/>
            </div>
        );
    }
}

export default AddPage;
