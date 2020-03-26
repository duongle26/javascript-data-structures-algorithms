class Stack {
  constructor() {
    this.stack = [];
  }

  // O(1) time | O(1) space
  peek() {
    return this.stack.length ? this.stack[this.stack.length - 1].val : "Stack is empty";
  }

  // O(1) time | O(1) space
  pop() {
    if (this.stack.length) {
      const val = this.stack[this.stack.length - 1].val;
      this.stack.pop();
      return val;
    }
    return "Stack is empty";
  }

  // O(1) time | O(1) space
  push(number) {
    const newNumber = {
      min: number,
      max: number,
      val: number
    };
    if (this.stack.length) {
      const lastNumber = this.stack[this.stack.length - 1];
      newNumber.min = Math.min(lastNumber.min, number);
      newNumber.max = Math.max(lastNumber.max, number);
    }

    this.stack.push(newNumber);
  }

  // O(1) time | O(1) space
  getMin() {
    return this.stack.length ? this.stack[this.stack.length - 1].min : "Stack is empty";
  }

  // O(1) time | O(1) space
  getMax() {
    return this.stack.length ? this.stack[this.stack.length - 1].max : "Stack is empty";
  }
}