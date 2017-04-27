'use strict';

const SinglyLinkedList = require('./index.js');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
let singlylinkedlist;


function timeToAddN(n) {
    const start = Date.now();
    for (let i = 0; i < n; i++) {
        singlylinkedlist.add(i);
    }
    const end = Date.now();
    return (end - start);
}

describe('singly linked list', function() {
    
    beforeEach(function() {
        singlylinkedlist = new SinglyLinkedList();
    });
    
    it('can add a new element', function() {
        const el = 'wicked cat hats';
        singlylinkedlist.add(el);
        const list = singlylinkedlist.toArray(); 
        assert.include(list, el);
    });

    it('takes O(n) to add (LOOK AT TIMES TO CONFIRM)', function() {
        const times = [];
        for (let i = 1; i <= 2000; i+=40) {
            singlylinkedlist = new SinglyLinkedList();
            times.push(timeToAddN(i));
        }
        console.log('times to add n elements, where n is from 1 - 2000, incrementing by 40', JSON.stringify(times));
    });

    it('can find the length', function() {
        assert.equal(singlylinkedlist.length(), 0);
        singlylinkedlist.add('mizpah ghetti');
        assert.equal(singlylinkedlist.length(), 1);
        singlylinkedlist.add(647474);
        singlylinkedlist.add('wicked shocks!');
        assert.equal(singlylinkedlist.length(), 3);
    });

    it('can traverse the list', function() {
        const sumTracker = {sum: 0};
        const getSum = function(node) {
            sumTracker.sum += node.data;
        };
        singlylinkedlist.add(22);
        singlylinkedlist.add(33);
        singlylinkedlist.traverse(getSum);
        assert(sumTracker.sum === 55);
    });

    describe('removing elements', function() {
        const singlylinkedlist = new SinglyLinkedList();
        const el1 = 'waffles';
        const el2 = 'snoggin';
        const el3 = 'crepit crackinlack';
        singlylinkedlist.add(el1);
        singlylinkedlist.add(el2);
        singlylinkedlist.add(el3);

        it('can remove a middle element', function() {
            let list = singlylinkedlist.toArray();
            // Make sure the element was originally there.
            assert.lengthOf(list, 3);
            singlylinkedlist.remove(el2);
            list = singlylinkedlist.toArray();
            assert.lengthOf(list, 2);
            assert.notInclude(el2);
        });

        it('can remove the last element', function() {
            singlylinkedlist.remove(el3);
            let list = singlylinkedlist.toArray();
            assert.notInclude(el3);
        });

        it('can remove the first element', function() {
            singlylinkedlist.remove(el1);
            let list = singlylinkedlist.toArray();
            assert.notInclude(el1);
        });
    });

    it('can insert after any node', function() {
        const el = 'blippni';
        singlylinkedlist.add(el);
        singlylinkedlist.add('wagon wheels');
        singlylinkedlist.add('ninja');

        singlylinkedlist.insertAfter(el, 99);
        let list = singlylinkedlist.toArray();
        assert.equal(list[1], 99);

        const el2 = 'winter snowfaluff';
        singlylinkedlist.insertAfter('ninja', el2);
        list = singlylinkedlist.toArray();
        assert.equal(list[4], el2);
        
    });

    it('can be stringified', function() {
        singlylinkedlist.add('pizzasz');
        singlylinkedlist.add(7);
        const string = 'pizzasz -> 7 -> null';
        assert.equal(string, singlylinkedlist.toString());
    });
});

