'use strict';

const LinkedList = require('./index.js');
const assert = require('chai').assert;


describe('Linked list', function() {
    
  beforeEach(function() {
      var list = new LinkedList('words');
  });
  // {data: words, link: {}}

  //list.insertAfter('words', 'more words');
  // {data: words, link: {data: more words, link: {}}}

  //list.insertAfter('more words', 'yet more');
  // {data: words, link: {data: more words, link: {data: yet more, link: {}}}}

  //list.insertAfter('words', 'moar');
  // {data: words, link: {data: moar, link: {data: more words, link: {data: yet more, link: {}}}}

  //var foundNode = list.findNode('moar');
  // {data: moar, link: {data: more words, link: {data: yet more, link {}}}}
  //var shouldHaveFoundNode = {data: 'moar', link: {data: 'more words', link: {data: 'yet more', link: {}}}};
  //console.log('searched for node where "data" is "moar"; should have found:\n', JSON.stringify(shouldHaveFoundNode, null, 2));
  //console.log('actually found:\n', JSON.stringify(foundNode, null, 2));

  //list.insertBefore('more words', 'WURD');
  // {data: words, link: {data: moar, link: {data: WURD, link: {data: more words, link: {data: yet more, link: {}}}}

  //var finalList = {data: 'words', link: {data: 'moar', link: {data: 'WURD', link: {data: 'more words', link: {data: 'yet more', link: {}}}}}};
  //console.log('final list should look like: \n', JSON.stringify(finalList, null, 2));
  //console.log('actual list is:\n');
  //console.log(JSON.stringify(list.list, null, 2));

});

