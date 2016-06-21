'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Router from './router';

ReactDom.render(
    <Router/>, document.getElementById('container'));

if (module.hot) {
    module.hot.accept();
}
