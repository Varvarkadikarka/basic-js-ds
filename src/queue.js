const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node { //узел связанного списка
  constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
}

class Queue { //«первым пришел — первым вышел» (FIFO — first in first out).
  constructor() { // узел очереди
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new Node(value); //создадим новый узел

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }
    
    this.tail.next = newNode;

    this.tail = newNode;

    return this;
      
  }

  dequeue(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    deletedNode = this.head;

    this.head = this.head.next;

    return deletedNode.value;
  }
}

module.exports = {
  Queue
};
