'use strict';

const SinglyLinkedList = require('../singlyLinkedList/index.js');
const singlylinkedlist = new SinglyLinkedList();


function DoublyLinkedList() {
    // Initialize doublylinkedlist to have all properties of singlylinkedlist.
    SinglyLinkedList.apply(this);

    this.insertBefore = function(beforeData, newData) {
        let currNode = this.head;
        let prevNode = null;
        const nodeToInsert = new Node(newData);
        
        while (currNode !== null) {
            if (currNode.data === beforeData) {
                break;
            } else {
                prevNode = currNode;
                currNode = currNode.link;
            }
        }
     
        if (prevNode === null) {
            this.head = nodeToInsert;
        } else {
            prevNode.link = nodeToInsert;
        }
        nodeToInsert.link = currNode;
    };

    this.toString = function() {
        const toString = (node, results) => {
            results.str += node.data + ' <-> ';
            if (node.link == null) {
                results.str += 'null';
                return results.str;
            }
        };
        return this.traverse(toString, true);
    };
}

function Node(data) {
    this.data = data;
    this.link = null;
}

module.exports = DoublyLinkedList;

