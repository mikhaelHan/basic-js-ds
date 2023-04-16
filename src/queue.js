const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

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
class Queue {
  constructor () {
    this.next = null;
  }

  getUnderlyingList() {
    return this.next
  }

  enqueue(item) {

    let newNode = new ListNode(item);

    if (this.next === null) this.next = newNode;

    else {

      let currant = this;

      while (currant) {

        if (currant.next !== null) {
          currant = currant.next;
        }

        else {
          currant.next = newNode;
          currant = currant.next.next;
        }
      }
    }
  }

  dequeue() {
    const val = this.next.value;
    const nextNode = this.next.next;
    this.next = nextNode;
    return val
  }
}

module.exports = {
  Queue
};
