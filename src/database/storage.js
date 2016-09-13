'use strict';

const empty = JSON.stringify([{
    desc: 'sleep early',
    time: '2016/9/1',
    done: false
}, {
    desc: 'barbecue',
    time: '2016/9/2',
    done: false
}]);

let identify = 0;
let storage = {
    list: JSON.parse(window.localStorage.getItem('todo') || empty),
    get() {
        return createIdentify(this.list);
    },
    getOne(index) {
        let ret = this.list.filter(item => item.id === index);
        return ret ? ret[0] : null;
    },
    add({desc, time}) {
        let id = identify++;
        this.list.push({
            id,
            desc,
            time,
            done: false
        });
        this.update();
        return id;
    },
    finish(index) {
        let item = this.getOne(index);
        item.done = true;
        this.update();
    },
    delete(index) {
        let item = this.getOne(index);
        let idx = this.list.indexOf(item);

        this.list.splice(idx, 1);
        this.update();
    },
    update() {
        window.localStorage.setItem('todo', JSON.stringify(this.list));
    },
    clean() {
        return window.localStorage.removeItem('todo');
    }
};

function createIdentify(list) {
    return list.map(item => {
        item.id = identify++;
        return item;
    });
}

export default storage;
