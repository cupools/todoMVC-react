'use strict';

import React from 'react';
import {Link} from 'react-router';
import AddForm from './AddForm';

class AddPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>I'm page header</h1>
                <Link to="todo">Todo</Link>
                <AddForm />
            </div>
        );
    }
}

export default AddPage;
