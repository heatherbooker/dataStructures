# Doubly linked list


### Definition

A doubly linked list is a data structure wherein there are two pointers, commonly called "head" and "tail" to the first and last items respectively in the list. From there, each item contains its own data as well as references to both the next and previous items in the list.

Because data in a linked list is not stored contiguously, it can allow small spaces in memory to be used to store just one or two items, as opposed to needing to store all items together. In languages without dynamically resizing arrays, linked lists are also a good solution to have an unbounded number of items in a collection.

This is a doubly linked list, meaning that each item references two others: the item previous and the item following. A singly linked list would have each item having only one reference, to the item following it.


### Methods

Method      | Run time
---         | ---
add         | O(1)
remove      | O(n)
insertAfter | O(n)
insertBefore| O(n)
traverse    | O(n)
length      | O(n)
toString    | O(n)
toArray     | O(n)

### Test coverage

[Check it out](https://heatherbooker.github.io/dataStructures/coverage/doublyLinkedList/index.html)
