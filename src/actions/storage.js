'use strict';

let identify = 0,
    storage = {
        list: JSON.parse(window.localStorage.getItem('todo') || '[]'),
        get() {
            return createIdentify(this.list);
        },
        add(desc) {
            console.log(desc);
            this.list.push({
                desc,
                id: identify ++,
                time: new Date().toLocaleDateString()
            });
            this.update();
        },
        finish(index) {
            this.list[index].done = true;
            this.update();
        },
        del(item) {
            let index = this.list.indexOf(item);
            this.list.splice(index, 1);
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
        item.id = ++identify;
        return item;
    });
}

export default storage;
