class LinkedList {

  constructor(firstItem) {
    this.list = {
      data: firstItem,
      link: {}
    };
  }

  insertBefore(nodeToInsertBefore, newNode) {
    var node = this.findPrevNode(nodeToInsertBefore);
    var oldNode = Object.assign({}, node.link);
    node.link = {data: newNode, link: oldNode};
  }

  insertAfter(nodeToInsertAfter, newNode) {
    var node = this.findNode(nodeToInsertAfter, this.list);
    var oldNode = Object.assign({}, node.link);
    node.link = {data: newNode, link: oldNode};
  }

  findNode(dataAtNode, nodeToStartAt=this.list) {
    if (nodeToStartAt.data === dataAtNode) {
      return nodeToStartAt;
    }
    return this.findNode(dataAtNode, nodeToStartAt.link);
  }

  findPrevNode(dataAtNode, prevNode=null, nodeToStartAt=this.list) {
    if (nodeToStartAt.data === dataAtNode) {
      return prevNode;
    }
    return this.findPrevNode(dataAtNode, nodeToStartAt, nodeToStartAt.link);
  }

}

