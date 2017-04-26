// The following are questions from cracking the coding interview.
// This is not condoning asking such questions in interviews.
// Don't do that, unless it really makes sense to do that.

// 2.1 Remove duplicates from an unsorted linked list.
// Follow up: do it without a temporary buffer.

function deDuplicate(linkedList) {
    let currNode = linkedList.head;
    let prevNode = null;
    const dataSeen = {};

    while (currNode) {
        if (dataSeen[currNode.data]) {
            prevNode.next = currNode.next;
        } else {
            dataSeen[currNode.data] = true;
        }
        prevNode = currNode;
        currNode = currNode.next;
    }
    return linkedList;
}

function deDupNoBuffer(linkedList) {
    let currNode = linkedList.head;
    let beforeCompareTo = currNode;
    let compareTo = linkedList.head && linkedList.head.next;

    while (currNode !== null) {
        while (compareTo !== null) {
            if (currNode.data === compareTo.data) {
                beforeCompareTo.next = compareTo.next;
            }
            beforeCompareTo = compareTo;
            compareTo = compareTo.next;
        }
        currNode = currNode.next;
        beforeCompareTo = currNode;
        compareTo = currNode && currNode.next;
    }

    return linkedList;
}

function findKthFromEnd(list, k) {
    let current = list.head;
    let recentKth = [];

    while (current !== null) {
        recentKth.push(current);
        if (recentKth.length > k + 1) {
            recentKth.shift(); // Only store k most recent elements.
        }
        current = current.next;
    }
    if (recentKth.length > k) {
        return recentKth[0] || null;
    }
    return null;
}

module.exports = {
    LL2_1: {
        deleteDuplicatesA: deDuplicate,
        deleteDuplicatesB: deDupNoBuffer
    },
    LL2_2: {
        findKthElementFromEnd4: findKthFromEnd
    }
};

