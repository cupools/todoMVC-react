'use strict';

import React from 'react';
import TodoPage from '../components/todo/TodoPage';

import 'antd/dist/antd.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <TodoPage/>
            </div>
        );
    }
}

export default App;
