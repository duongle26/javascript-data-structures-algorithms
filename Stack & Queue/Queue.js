class Queue {
  constructor() {
    this.queue = [];
  }

  // O(1) time | O(1) space
  peek() {
    return this.queue.length ? this.queue[0] : "Queue is empty";
  }

  // O(1) time | O(1) space
  enqueue(element) {
    return this.queue.push(element);
  }

  // O(1) time | O(1) space
  dequeue() {
    return this.queue.length ? this.queue.shift() : "Queue is empty";
  }
}