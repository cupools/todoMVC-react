'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import App from './containers/App';
import TodoPage from './components/todo/TodoPage';
import AddPage from './components/add/AddPage';
import reducers from './redux/reducers';
import storage from './redux/storage';
import * as actions from './redux/actions';

let updateStorage = store => next => action => {
    switch(action.type) {
        case actions.ADD_TODO:
            action.payload.id = storage.add(action.payload);
            break;
        case actions.FINISH_TODO:
            storage.finish(action.index);
            break;
        case actions.DELETE_TODO:
            storage.delete(action.index);
            break;
    }
    let result = next(action);
    return result;
};

let wrapStoreWithMiddleware = applyMiddleware(updateStorage)(createStore);
let store = wrapStoreWithMiddleware(combineReducers({
        list: reducers.list,
        filter: reducers.filter,
        routing: routerReducer
    }), {
        list: storage.get(),
        filter: actions.VisiableFilters.SHOW_TODO,
        routing: ''
    }
);

let syncHistory = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={syncHistory}>
            <Route path="/" component={App} >
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
