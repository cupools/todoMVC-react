'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App';
import reducers from './actions/reducers';

let store = createStore(reducers);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('container')
);

if (module.hot) {
    module.hot.accept();
}
