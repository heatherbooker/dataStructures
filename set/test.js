'use strict';

const MySet = require('./index.js');
const assert = require('chai').assert;
let setA, setB, setC;


describe('set', function() {
    
    beforeEach(function() {
        setA = new MySet();
        setB = new MySet();
        setC = new MySet();
    });
    
    it('can add a new element', function() {
        const el = 'alps';
        setA.add(el);
        assert(setA.contains(el));
        assert.include(setA.toArray(), el);
    });
    
    it('does not add non-unique elements', function() {
        const el = 'sea potato';
        setB.add(el);
        setB.add(el);
        assert.lengthOf(setB.toArray(), 1);
    });

    it('can tell whether an element exists in the set', function() {
        const el = 'headwaters';
        setA.add(el);
        const hasEl = setA.contains(el);
        assert.include(setA.toArray(), el);
        assert(hasEl);
    });

    it('can tell its length', function() {
        assert.equal(setC.length(), setC.toArray().length);
        setC.add('plebbian');
        assert.equal(setC.length(), setC.toArray().length);
        setC.add('pratts');
        setC.add('manoa');
        assert.equal(setC.length(), setC.toArray().length);
    });

    it('can remove elements', function() {
        const el = 'mixology';
        setA.add(el);
        assert.include(setA.toArray(), el);
        setA.remove(el);
        assert.notInclude(setA.toArray(), el);
    });

    it('can find the union with another set', function() {
        const commonEl = 'wallabee';
        setA.add('mash it up');
        setA.add(commonEl);
        setB.add('wizard kids');
        setB.add(commonEl);
        const union = setA.union(setB);
        assert.equal(union.toArray().length, 1);
        assert.include(union.toArray(), commonEl);
    });

    it('can find the intersection with another set', function() {
        const commonEl = 'wallabee';
        setA.add('mash it up');
        setA.add(commonEl);
        setB.add('wizard kids');
        setB.add(commonEl);
        const intersection = setA.intersect(setB);
        assert.equal(intersection.toArray().length, 3);
        assert.include(intersection.toArray(), commonEl, 'mash it up', 'wizard kids');
    });

    it('can be stringified', function() {
        setC.add('manoah');
        setC.add('boa constrictor');
        setC.add(3);
        const string = setC.toString();
        assert.equal(JSON.stringify(setC.toArray()), string);
    });

    it('can find the difference with another set', function() {
        const commonEl = 'gremlins';
        const diffEl = 'think pink';
        setC.add(diffEl);
        setC.add(commonEl);
        setB.add(commonEl);
        setB.add('pink pencils');
        const diff = setC.difference(setB);
        assert.sameMembers(diff.toArray(), [diffEl]);
    });

    it('can find whether a given set is a subset', function() {
        setA.add('stabbing my illusion');
        const commonEls = [2, 'redirection'];
        assert(setB.isSubsetOf(setA));
        setB.add(commonEls[0]);
        setB.add(commonEls[1]);
        setA.add(commonEls[0]);
        setA.add(commonEls[1]);
        assert(setB.isSubsetOf(setA));
        assert(!setA.isSubsetOf(setB));
    });
});

