'use strict';

function LinkedList() {
    this.head = null;

    this.traverse = function(callback, needsResults) {
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
            currNode = currNode.link;    
        }
        
        return results._final || results;
    };

    this.length = function() {
        const findLen = (node, results) => {
            const len = ++results.num;
        };
        return this.traverse(findLen, true).num;
    };

    this.add = function(data) {
        const nodeToAdd = new Node(data);
        
        if (this.head === null) {
            this.head = nodeToAdd;

        } else {
            const findLast = node => node.link === null ? node : null;
            const currTail = this.traverse(findLast, false);
            currTail.link = nodeToAdd;
        }
    };

    this.insertAfter = function(afterData, newData) {
        let currNode = this.head;
        const nodeToInsert = new Node(newData);

        while (currNode !== null) {
            if (currNode.data === afterData) {
                break;
            } else {
                currNode = currNode.link;
            }
        }

        const nextNode = currNode.link;
        currNode.link = nodeToInsert;
        nodeToInsert.link = nextNode;
    };

    this.remove = function(data) {
        let prevNode = null;
        let currNode = this.head;
        
        while (currNode !== null) {
            if (currNode.data === data)  {
                break;
            } else {
                prevNode = currNode;
                currNode = currNode.link;
            }
        }

        const nextNode = prevNode && prevNode.link.link || null;
        if (prevNode === null) {
            this.head = nextNode;
        } else {
            prevNode.link = nextNode;
        }
    };

    this.toString = function() {
        const toString = (node, results) => {
            results.str += node.data + ' -> ';
            if (node.link == null) {
                results.str += 'null';
                return results.str;
            }
        };
        return this.traverse(toString, true);
    };

    this.toArray = function() {
        const toArray = (node, results) => {
            results.arr.push(node.data);
        };
        return this.traverse(toArray, true).arr;
    };
}

function Node(data) {
    this.data = data;
    this.link = null;
}

module.exports = LinkedList;

