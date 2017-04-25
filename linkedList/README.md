# Singly linked list


### Definition

A linked list is a data structure wherein there is only one pointer, commonly called "head" to the first item in the list. From there, each item contains its own data as well as a reference to the next item in the list.

Because data in a linked list is not stored contiguously, it can allow small spaces in memory to be used to store just one or two items, as opposed to needing to store all items together.

This is a singly linked list, meaning that each item only points to the item following it. A doubly linked list would have each item having references to both the item preceeding it and the item following it.


### Methods

Method      | Run time
---         | ---
add         | O(n)
remove      | O(n)
insertAfter | O(n)
traverse    | O(n)
length      | O(n)
toString    | O(n)
toArray     | O(n)

