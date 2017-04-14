const MySet = require('./index.js');

const setA = new MySet();
setA.add('alps');
console.log('next should be: ["alps"]');
setA.print();
setA.add('alps');
setA.add('kickin');

const setB = new MySet();
setB.add('mash');
setB.add('slow');
setB.add('alps');
console.log('next should be: ["mash", "slow", "alps"]');
setB.print();
setB.remove('slow');
console.log(setB.contains('slow'), 'should be false');
console.log(setA.contains('mash'), 'should be false');
console.log(setB.difference(setA), 'should be ["mash"]');
console.log(setA.union(setB), 'should be ["alps"]');

const setC = new MySet();
setC.add('mash');
console.log(setB.isSubset(setC), 'should be true');
console.log(setC.length(), 'should be 1');

