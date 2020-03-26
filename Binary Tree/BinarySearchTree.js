class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Average: O(log(n)) time | O(log(n)) space
  // Worst: O(n) time | O(n) space
  insert(value) {
    if (value < this.value) {
      this.left ? this.left.insert(value) : this.left = new BST(value);
    } else {
      this.right ? this.right.insert(value) : this.right = new BST(value);
    }
    return this;
  }

  // Average: O(log(n)) time | O(log(n)) space
  // Worst: O(n) time | O(n) space
  contains(value) {
    if (value < this.value) {
      return this.left ? this.left.contains(value) : false;
    } else if (this.value < value) {
      return this.right ? this.right.contains(value) : false;
    } else return true;
  }

  remove(value) {
    // TODO
    return this;
  }
}