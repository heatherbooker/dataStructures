const Stack = require('./index.js');
const chai = require('chai');
const assert = chai.assert;
let stack;


function timeToPushN(n) {
    const start = Date.now();
    for (let i = 0; i < n; i++) {
        stack.push(i);
    }
    const end = Date.now();
    return (end - start);
}

describe('stack', function() {
    
    beforeEach(function() {
        stack = new Stack();
    });
    
    it('can push a new element', function() {
        const el = 'wicked cat hats';
        stack.push(el);
        const list = stack.toArray(); 
        assert.include(list, el);
    });

    it('takes O(n) to push (LOOK AT TIMES TO CONFIRM)', function() {
        const times = [];
        for (let i = 1; i <= 2000; i+=40) {
            stack = new Stack();
            times.push(timeToPushN(i));
        }
        console.log('times to push n elements, where n is from 1 - 2000, incrementing by 40', JSON.stringify(times));
    });

    it('can find the length', function() {
        assert.equal(stack.length(), 0);
        stack.push('mizpah ghetti');
        assert.equal(stack.length(), 1);
        stack.push(647474);
        stack.push('wicked shocks!');
        assert.equal(stack.length(), 3);
    });

    it('can pop an element', function() {
        const el1 = 'waffles';
        const el2 = 'snoggin';
        stack.push(el1);
        stack.push(el2);

        let list = stack.toArray();
        // Make sure the element was originally there.
        assert.lengthOf(list, 2);
        stack.pop();
        list = stack.toArray();
        assert.lengthOf(list, 1);
        assert.notInclude(el2);

        stack.pop();
        list = stack.toArray();
        assert.lengthOf(list, 0);
    });

    it('can peek at the top element', function() {
        const el = 'wizardry';
        const el2 = 'witches mostly';
        stack.push(el);
        stack.push(el2);

        const top = stack.peek();
        assert.equal(top, el2);
    });

    it('throws an error when pop or peek are called on an empty stack', function() {
        assert.throws(stack.pop);
        assert.throws(stack.peek);
    });

    it('can be stringified', function() {
        stack.push('pizzasz');
        stack.push(7);
        const string = 'pizzasz -> 7 -> null';
        assert.equal(string, stack.toString());
    });
});

