'use strict';

const SinglyLinkedList = require('../singlyLinkedList/index.js');


function DoublyLinkedList() {
    // Initialize doublylinkedlist to have all properties of singlylinkedlist.
    // We will use: head, length(), and toArray().
    SinglyLinkedList.apply(this);

    this.tail = null;

    this.traverse = function(callback, goForward) {
        let currNode = goForward ? this.head : this.tail;
        const results = {
            num: 0,
            str: '',
            arr: []
        };

        while (currNode !== null) {
            // Passing object allows callback to store whatever they want.
            callback(currNode, results);
            currNode = goForward ? currNode.next : currNode.prev;
        }

        return results;
    };

    this.add = function(data) {
       const currentTail = this.tail;
       const newNode = new Node(data, null, currentTail);
       if (this.tail !== null) {
            this.tail.next = newNode;
       }
       this.tail = newNode;
       if (this.head === null) {
            this.head = newNode;
       }
    };

    this.insertBefore = function(beforeData, newData) {
        const find = (node, results) => {
            if (node.data === beforeData) {
                results.node = node;
                return node;
            }
        };
        const currNode = this.traverse(find, false).node;

        const prevNode = currNode.prev;
        const nodeToInsert = new Node(newData, currNode, prevNode);
        if (prevNode !== null) {
            prevNode.next = nodeToInsert;
        } else {
            this.head = nodeToInsert;
        }
        currNode.prev = nodeToInsert;
    };

    this.insertAfter = function(afterData, newData) {
        const find = (node, results) => {
            if (node.data === afterData) {
                results.node = node;
                return node;
            }
        };
        const currNode = this.traverse(find, true).node;

        const nextNode = currNode.next;
        const nodeToInsert = new Node(newData, nextNode, currNode);
        if (nextNode !== null) {
            nextNode.prev = nodeToInsert;
        } else {
            this.tail = nodeToInsert;
        }
        currNode.next = nodeToInsert;
    };

    this.remove = function(data) {
        const find = (node, results) => {
            if (node.data === data) {
                results.node = node;
                return node;
            }
        };
        const nodeToRemove = this.traverse(find, true).node;

        const prevNode = nodeToRemove.prev;
        const nextNode = nodeToRemove.next;
        if (prevNode !== null) {
            prevNode.next = nextNode;
        } else {
            this.head = nextNode;
        }
        if (nextNode !== null) {
            nextNode.prev = prevNode;
        } else {
            this.tail = prevNode;
        }
    };

    this.toString = function() {
        const toString = (node, results) => {
            results.str += node.data + ' <-> ';
            if (node.link == null) {
                results.str += 'null';
                return results.str;
            }
        };
        return 'null <-> ' + this.traverse(toString, true).str;
    };
}

function Node(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
}

Node.prototype = {
    get link() {
        return this.next;
    }
};

module.exports = DoublyLinkedList;

