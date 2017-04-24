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

describe.only('singly linked list', function() {
    
    beforeEach(function() {
        linkedlist = new LinkedList();
    });
    
    it('can add a new element', function() {
        const el = 'wicked cat hats';
        linkedlist.add(el);
        const list = linkedlist.toArray(); 
        expect(list).to.have.deep.property('[0].data', el);
    });

    it('can find the length', function() {
        assert.equal(linkedlist.toArray().length, 0);
        linkedlist.add('mizpah ghetti');
        assert.equal(linkedlist.toArray().length, 1);
        linkedlist.add(647474);
        linkedlist.add('wicked shocks!');
        assert.equal(linkedlist.toArray().length, 3);
    });

    it('can remove elements', function() {
        const el1 = 'waffles';
        const el2 = 'snoggin';
        linkedlist.add(el1);
        linkedlist.add('crepit crackinlack');
        linkedlist.add(el2);

        linkedlist.remove(el1);
        let list = linkedlist.toArray();
        assert.equal(list[0], undefined);
        
        linkedlist.remove(el2);
        list = linkedlist.toArray();
        assert.equal(list[1], undefined, JSON.stringify(list));
    });

    it('can be stringified', function() {
        linkedlist.add('pizzasz');
        linkedlist.add(7);
        const string = JSON.stringify(linkedlist.toArray());
        assert.equal(string, linkedlist.toString());
    });
});

