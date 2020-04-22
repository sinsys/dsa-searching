class _Node {
  constructor(val, next) {
    this.val = val;
    this.next = null;
  };
};

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  };

  // Add an item to the top of the queue
  enqueue(val) {
    // Declare our new item
    const node = new _Node(val);

    // If we don't have a first item, make this node first
    if ( this.first === null ) {
      this.first = node;
    };

    // If we have a last item, point it to this node
    if ( this.last ) {
      this.last.next = node;
    };

    // Make the new node the last item on the queue
    this.last = node;
  };

  // Remove an item from the bottom of the queue
  dequeue() {
    // If the queue is empty, there is nothing to dequeue
    if ( this.first === null ) {
      return;
    };

    // Declare our node to dequeue
    const node = this.first;
    // Set the 2nd item in queue to our first
    this.first = this.first.next;

    // If this is the last item in the queue
    if ( node === this.last ) {
      // Set our last to null
      this.last = null;
    };

    return node.val;
  };
};

module.exports = Queue;