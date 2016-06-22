'use strict';

import {React} from 'react';
import {Route, withRouter} from 'react-router';
import TodoPage from '../components/todo/TodoPage.jsx';
import AddPage from '../components/add/AddPage.jsx';

const routes = (
    <Route path="/">
        <Route path="todo" component={withRouter(TodoPage)}></Route>
        <Route path="add" component={withRouter(AddPage)}></Route>
        <Route path="*" component={withRouter(TodoPage)}></Route>
    </Route>
);

export default routes;
