const LinkedList_2_2 = require('../singlyLinkedList/exercises.js').LL2_2;
const SinglyLinkedList = require('../singlyLinkedList/index.js');
require('sinon');
const expect = require('chai').expect;

describe('LinkedList_2_2', function () {
describe('LinkedList_2_2 findKthElementFromEnd', function () {

  it('returns null if 0 length list', function () {
      var l = new SinglyLinkedList();
      var item = LinkedList_2_2.findKthElementFromEnd4(l, 1);
      expect(item).to.be.null;
    });
    
    it('returns null if k >= list length', function () {
      var l = new SinglyLinkedList();
      l.add("foo");
      var item = LinkedList_2_2.findKthElementFromEnd4(l, 1);
      expect(item).to.be.null;
    });

    it('returns 1st item in 1 length list k == 0', function () {
      var l = new SinglyLinkedList();
      l.add("foo");
      var item = LinkedList_2_2.findKthElementFromEnd4(l, 0);
      expect(item).to.be.not.null;
      expect(item.data).to.equal("foo");
    });


    it('returns 1st item in 2 length list k == 0', function () {
      var l = new SinglyLinkedList();
      l.add("foo");
      l.add("bar");
      var item = LinkedList_2_2.findKthElementFromEnd4(l, 0);
      expect(item).to.be.not.null;
      expect(item.data).to.equal("bar");
    });
    
    it('returns 2nd item in 2 length list k == 1', function () {
      var l = new SinglyLinkedList();
      l.add("foo");
      l.add("bar");
      var item = LinkedList_2_2.findKthElementFromEnd4(l, 1);
      expect(item).to.be.not.null;
      expect(item.data).to.equal("foo");
    });
    
  });

});
