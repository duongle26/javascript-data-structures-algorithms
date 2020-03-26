class Stack {
  constructor() {
    this.stack = [];
  }

  // O(1) time | O(1) space
  peek() {
    return this.stack.length ? this.stack[this.stack.length - 1] : "Stack is empty";
  }

  // O(1) time | O(1) space
  push(element) {
    return this.stack.push(element);
  }

  // O(1) time | O(1) space
  pop() {
    return this.stack.length ? this.stack.pop() : "Stack is empty";
  }
}