'use strict';

import React from 'react';

// Create react components with jsx
export default class Hello extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (<h1>Hello World</h1>);
    }
}

export default Hello;