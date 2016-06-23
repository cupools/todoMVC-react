'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import App from './containers/App';
import TodoPage from './components/todo/TodoPage';
import AddPage from './components/add/AddPage';
import reducers from './actions/reducers';

let store = createStore(combineReducers({
    list: reducers.list,
    filter: reducers.filter,
    routing: routerReducer
}));

let history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} >
                <Route path="todo" component={TodoPage} />
                <Route path="add" component={AddPage} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('container')
);

if (module.hot) {
    module.hot.accept();
}
