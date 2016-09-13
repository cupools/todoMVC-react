'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './redux/store';

import App from './containers/App';
import TodoPage from './components/todo/TodoPage';
import AddPage from './components/add/AddPage';

let syncHistory = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={syncHistory}>
            <Route path="/" component={App}>
                <Route path="todo" component={TodoPage} />
                <Route path="add" component={AddPage} />
                <IndexRedirect to="todo" />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('container')
);

if (module.hot) {
    module.hot.accept();
}
