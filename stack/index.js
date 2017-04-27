const SinglyLinkedList = require('../singlyLinkedList/index.js');

function Stack() {
    // Inherit head, length, toString, and toArray from SinglyLinkedList.
    SinglyLinkedList.apply(this);

    this.push = (data) => this.add(data);
    
    this.pop = () => {
        let current = this.head;
        let prev = null;

        if (current === null) {
            throw new Error('Stack is empty; cannot "pop"'); 
        }

        while (true) {
            if (current.next === null) {
                if (prev === null) {
                    this.head = null;
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
        let current = this.head;

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
}

module.exports = Stack;

