'use strict';

function SinglyLinkedList() {
    this.head = null;

    const _traverse = (callback, needsResults) => {
        let currNode = this.head;
        const results = {
            num: 0,
            str: '',
            arr: []
        };

        while (currNode !== null) {
            // Passing object allows callback to store whatever they want.
            // Else they can return a truthy value if they only want final.
            results._final = callback(currNode, results);
            currNode = currNode.next;    
        }
        
        return results._final || results;
    };

    this.traverse = function(callback) {
        _traverse(callback, false);
    };

    this.length = function() {
        const findLen = (node, results) => {
            const len = ++results.num;
        };
        return _traverse(findLen, true).num;
    };

    this.add = function(data) {
        const nodeToAdd = new Node(data);
        
        if (this.head === null) {
            this.head = nodeToAdd;

        } else {
            const findLast = node => node.next === null ? node : null;
            const currTail = _traverse(findLast, false);
            currTail.next = nodeToAdd;
        }
    };

    this.insertAfter = function(afterData, newData) {
        let currNode = this.head;
        const nodeToInsert = new Node(newData);

        while (currNode !== null) {
            if (currNode.data === afterData) {
                break;
            } else {
                currNode = currNode.next;
            }
        }

        const nextNode = currNode.next;
        currNode.next = nodeToInsert;
        nodeToInsert.next = nextNode;
    };

    this.remove = function(data) {
        let prevNode = null;
        let currNode = this.head;
        
        while (currNode !== null) {
            if (currNode.data === data)  {
                break;
            } else {
                prevNode = currNode;
                currNode = currNode.next;
            }
        }

        const nextNode = prevNode && prevNode.next.next || null;
        if (prevNode === null) {
            this.head = nextNode;
        } else {
            prevNode.next = nextNode;
        }
    };

    this.toString = function() {
        const toString = (node, results) => {
            results.str += node.data + ' -> ';
            if (node.next == null) {
                results.str += 'null';
                return results.str;
            }
        };
        return _traverse(toString, true);
    };

    this.toArray = function() {
        const toArray = (node, results) => {
            results.arr.push(node.data);
        };
        return _traverse(toArray, true).arr;
    };
}

function Node(data) {
    this.data = data;
    this.next = null;
}

module.exports = SinglyLinkedList;

