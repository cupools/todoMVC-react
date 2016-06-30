'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../redux/actionCreators';
import selector from '../redux/selector';

import 'antd/dist/antd.css';

class App extends React.Component {

    render() {
        let {list, filter, actions} = this.props;
        let childProps = {
            list,
            filter,
            actions,
            handleSwitch: stat => actions.setFilter(stat),
            handleFinish: index => actions.finishTodo(index),
            handleDelete: index => actions.deleteTodo(index),
            handleTodoLink: () => this.context.router.push('/todo'),
            handleAddLink: () => this.context.router.push('/add')
        };

        return (
            <div>
                {this.props.children && React.cloneElement(this.props.children, childProps)}
            </div>
            );
    }

}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect(selector, function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
})(App);
