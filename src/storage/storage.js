'use strict';

let data = [{
    key: Math.random(),
    desc: 'sleep',
    time: '2015-02-01',
    done: true
}, {
    key: Math.random(),
    desc: 'swim',
    time: '2015-02-01',
    done: false
}, {
    key: Math.random(),
    desc: 'fly',
    time: '2015-02-01',
    done: false
}];

export default {
    getAll() {
        return data;
    }
};
