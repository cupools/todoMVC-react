'use strict';

import React from 'react';
import {Router, Route, browserHistory, withRouter} from 'react-router';
import TodoPage from '../todo/TodoPage.jsx';
import AddPage from '../add/AddPage.jsx';

const routes = (
    <Route path="/">
        <Route path="todo" component={withRouter(TodoPage)}></Route>
        <Route path="add" component={withRouter(AddPage)}></Route>
        <Route path="*" component={withRouter(TodoPage)}></Route>
    </Route>
);

class Root extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                {routes}
            </Router>
        );
    }
}

export default Root;
