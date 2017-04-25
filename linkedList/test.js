'use strict';

const LinkedList = require('./index.js');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
let linkedlist;


function timeToAddN(n) {
    const start = Date.now();
    for (let i = 0; i < n; i++) {
        linkedlist.add(i);
    }
    const end = Date.now();
    return (end - start);
}

describe('singly linked list', function() {
    
    beforeEach(function() {
        linkedlist = new LinkedList();
    });
    
    it('can add a new element', function() {
        const el = 'wicked cat hats';
        linkedlist.add(el);
        const list = linkedlist.toArray(); 
        assert.include(list, el);
    });

    it('takes O(n) to add (LOOK AT TIMES TO CONFIRM)', function() {
        const times = [];
        for (let i = 1; i <= 2000; i+=40) {
            linkedlist = new LinkedList();
            times.push(timeToAddN(i));
        }
        console.log('times to add n elements, where n is from 1 - 2000, incrementing by 40', JSON.stringify(times));
    });

    it('can find the length', function() {
        assert.equal(linkedlist.length(), 0);
        linkedlist.add('mizpah ghetti');
        assert.equal(linkedlist.length(), 1);
        linkedlist.add(647474);
        linkedlist.add('wicked shocks!');
        assert.equal(linkedlist.length(), 3);
    });

    describe('removing elements', function() {
        const linkedlist = new LinkedList();
        const el1 = 'waffles';
        const el2 = 'snoggin';
        const el3 = 'crepit crackinlack';
        linkedlist.add(el1);
        linkedlist.add(el2);
        linkedlist.add(el3);

        it('can remove a middle element', function() {
            let list = linkedlist.toArray();
            // Make sure the element was originally there.
            assert.lengthOf(list, 3);
            linkedlist.remove(el2);
            list = linkedlist.toArray();
            assert.lengthOf(list, 2);
            assert.notInclude(el2);
        });

        it('can remove the last element', function() {
            linkedlist.remove(el3);
            let list = linkedlist.toArray();
            assert.notInclude(el3);
        });

        it('can remove the first element', function() {
            linkedlist.remove(el1);
            let list = linkedlist.toArray();
            assert.notInclude(el1);
        });
    });

    it('can insert after any node', function() {
        const el = 'blippni';
        linkedlist.add(el);
        linkedlist.add('wagon wheels');
        linkedlist.add('ninja');

        linkedlist.insertAfter(el, 99);
        let list = linkedlist.toArray();
        assert.equal(list[1], 99);

        const el2 = 'winter snowfaluff';
        linkedlist.insertAfter('ninja', el2);
        list = linkedlist.toArray();
        assert.equal(list[4], el2);
        
    });

    it('can be stringified', function() {
        linkedlist.add('pizzasz');
        linkedlist.add(7);
        const string = 'pizzasz -> 7 -> null';
        assert.equal(string, linkedlist.toString());
    });
});

