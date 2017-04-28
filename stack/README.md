# Stack


### Definition

A stack is also known as a LIFO or Last In, First Out data structure. This means that as elements are added, the one that was added most recently will be the one to be removed soonest. Imagine a literal stack of anything - when you put something on top, you cannot remove the elements on the bottom until you first remove the ones on the top.

Stacks are how computers often manage instructions. For example, to add in assembly, you might imagine that an operation such as "1 + 2" would be completed as follows:

- put 1 on the stack
- put 2 on the stack
- put add on the stack

Thus, we might imagine the stack looking like:

(top)
add
2
1
(bottom)

However, stacks are generally represented in the technical world as growing from top down. So actually, we should imagine the contents of the stack in the order we first listed the operations:

(bottom)
1
2
add
(top)

Next, the add operator will be taken ("popped") off the stack. Then, because it knows it needs two operands, it will pop whatever the next two elements on the stack are off and use them. Then it can throw the answer onto the stack, and finally our stack looks like:

(bottom)
3
(top)

### Uses

- backtracking in puzzles and games
- keeping track of pages visited in web browser
- basically anything involving 'back' or 'undo'
- call stacks (see above example for very basic)
- matching tags in xml or brackets in a text editor

### Methods

Method      | Run time
---         | ---
push        | O(n)
pop         | O(n)
length      | O(n)
toArray     | O(n)

### Test coverage

[Check it out](https://heatherbooker.github.io/dataStructures/coverage/stack/index.html)
