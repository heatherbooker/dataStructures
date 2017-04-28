const SinglyLinkedList = require('../singlyLinkedList/index.js');

function Stack() {

    // Use composition of singlylinkedlist.
    this._list = new SinglyLinkedList();

    this.push = (data) => this._list.add(data);
    
    this.pop = () => {
        let current = this._list.head;
        let prev = null;

        if (current === null) {
            throw new Error('Stack is empty; cannot "pop"'); 
        }

        while (true) {
            if (current.next === null) {
                if (prev === null) {
                    this._list.head = null;
                } else {
                    prev.next = null;
                }
                return current.data;
            }
            prev = current;
            current = current.next;
        }
    };

    this.peek = () => {
        let current = this._list.head;

        if (current === null) {
            throw new Error('Stack is empty, cannot "peek"');
        }
        
        while (true) {
            if (current.next === null ) {
                return current.data;
            }
            current = current.next;
        }
    };

    this.length = () => this._list.length();

    this.toArray = () => this._list.toArray();
}

module.exports = Stack;

