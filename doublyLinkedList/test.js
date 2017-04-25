'use strict';

const DoublyLinkedList = require('./index.js');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
let doublylinkedlist;


function timeToAddN(n) {
    const start = Date.now();
    for (let i = 0; i < n; i++) {
        doublylinkedlist.add(i);
    }
    const end = Date.now();
    return (end - start);
}

describe('doubly linked list', function() {
    
    beforeEach(function() {
        doublylinkedlist = new DoublyLinkedList();
    });
    
    it('can add a new element', function() {
        const el = 'wicked cat hats';
        doublylinkedlist.add(el);
        const list = doublylinkedlist.toArray(); 
        assert.include(list, el);
    });

    it('takes O(n) to add (LOOK AT TIMES TO CONFIRM)', function() {
        const times = [];
        for (let i = 1; i <= 2000; i+=40) {
            doublylinkedlist = new DoublyLinkedList();
            times.push(timeToAddN(i));
        }
        console.log('times to add n elements, where n is from 1 - 2000, incrementing by 40', JSON.stringify(times));
    });

    it('can find the length', function() {
        assert.equal(doublylinkedlist.length(), 0);
        doublylinkedlist.add('mizpah ghetti');
        assert.equal(doublylinkedlist.length(), 1);
        doublylinkedlist.add(647474);
        doublylinkedlist.add('wicked shocks!');
        assert.equal(doublylinkedlist.length(), 3);
    });

    describe('removing elements', function() {
        const doublylinkedlist = new DoublyLinkedList();
        const el1 = 'waffles';
        const el2 = 'snoggin';
        const el3 = 'crepit crackinlack';
        doublylinkedlist.add(el1);
        doublylinkedlist.add(el2);
        doublylinkedlist.add(el3);

        it('can remove a middle element', function() {
            let list = doublylinkedlist.toArray();
            // Make sure the element was originally there.
            assert.lengthOf(list, 3);
            doublylinkedlist.remove(el2);
            list = doublylinkedlist.toArray();
            assert.lengthOf(list, 2);
            assert.notInclude(el2);
        });

        it('can remove the last element', function() {
            doublylinkedlist.remove(el3);
            let list = doublylinkedlist.toArray();
            assert.notInclude(el3);
        });

        it('can remove the first element', function() {
            doublylinkedlist.remove(el1);
            let list = doublylinkedlist.toArray();
            assert.notInclude(el1);
        });
    });

    it('can insert after any node', function() {
        const el = 'blippni';
        doublylinkedlist.add(el);
        doublylinkedlist.add('wagon wheels');
        doublylinkedlist.add('ninja');

        doublylinkedlist.insertAfter(el, 99);
        let list = doublylinkedlist.toArray();
        assert.equal(list[1], 99);

        const el2 = 'winter snowfaluff';
        doublylinkedlist.insertAfter('ninja', el2);
        list = doublylinkedlist.toArray();
        assert.equal(list[4], el2);
        
    });

    it('can insert before any node', function() {
        const el = 'blippni';
        doublylinkedlist.add(el);
        doublylinkedlist.add('wagon wheels');
        doublylinkedlist.add('ninja');

        doublylinkedlist.insertBefore(el, 99);
        let list = doublylinkedlist.toArray();
        assert.equal(list[0], 99);

        const el2 = 'winter snowfaluff';
        doublylinkedlist.insertBefore('ninja', el2);
        list = doublylinkedlist.toArray();
        assert.equal(list[3], el2);
        
    });

    it('can be stringified', function() {
        doublylinkedlist.add('pizzasz');
        doublylinkedlist.add(7);
        const string = 'pizzasz <-> 7 <-> null';
        assert.equal(string, doublylinkedlist.toString());
    });
});

