'use strict';

function LinkedList() {

    const list = [];
    let start = 0;

    this.length = () => {
        if (list[start] === undefined) {
            return 0; 
        }
        let i = start;
        let length = 1;
        while (true) {
            if (list[i].next === null) {
                return length;
            } else {
                i = list[i].next;
                length++;
            }
        }
    };

    this.add = (el) => {
        const node = { data: el, next: null };
        if (this.length() !== 0) {
            let i = start;
            while (list[i].next !== null) {
                i = list[i].next;
            }
            list[i].next = this.length();
        }
        list.push(node);
    };

    this.remove = (el) => {
        let i = start;
        let prevNode = null;
        while (list[i].data !== el) {
            prevNode = list[i];
            i = list[i].next;
        }
        const next = list[i].next;
        list[i] = undefined;
        if (prevNode !== null) {
            prevNode.next = next;
        } else if (next === null) {
            start = 0;
        } else {
            start += 1; 
        }
    };

    this.insertAfter = (elToInsert, elToFollow) => {
        let i = start;
        while (list[i].data !== elToFollow) {
            i = list[i].next;
        }
        const node = { data: elToInsert, next: list[i].next };
        list[i].next = this.length();
        list.push(node);
    };

    this.traverse = (func) => {
        let i = start;
        while (i !== null) {
            func(list[i]);
            i = list[i].next;
        }
    };

    this.toString = () => {
        let string = "[";
        let i = start;
        while (list[i] !== undefined) {
            if (typeof list[i].data === 'string') {
                string += `{"data":"${list[i].data}",`;
            } else {
                string += `{"data":${list[i].data},`;
            }
            string += `"next":${list[i].next}}`;
            if (list[i].next !== null) {
                string += ',';
                i = list[i].next;
            } else {
                break;
            }
        }
        string += ']';
        return string;
    };

    this.toArray = () => {
        return list;
    };
}

module.exports = LinkedList;

