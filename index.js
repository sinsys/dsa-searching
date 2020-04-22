// Linear search
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
};

console.log("Linear Search - indexOf([1,4,5,6,7,8], 5)");
console.log(indexOf([1,4,5,6,7,8], 5));

// Binary search
function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  if (item == value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
};

console.log("Binary Search - binarySearch([1,4,5,6,7,8], 6)");
console.log(binarySearch([1,4,5,6,7,8], 6));

const BinarySearchTree = require('./lib/BinarySearchTree');
const insertChars = ["E","A","S","Y","Q","U","E","S","T","I","O","N"];
const BST = new BinarySearchTree();
insertChars.forEach(char => BST.add(char, char));

// Depth first search
BinarySearchTree.prototype.dfs = function(values=[]) {
  if (this.left) {
    values = this.left.dfs(values);
  }

  values.push(this.val);

  if (this.right) {
    values = this.right.dfs(values);
  }
  return values;
};

console.log("Depth first search:");
console.log(BST.dfs());

// Breadth first search
const Queue = require('./lib/Queue');
BinarySearchTree.prototype.bfs = function(values=[]) {

  const queue = new Queue();
  queue.enqueue(this);

  while (queue.first !== null) {
    const node = queue.dequeue();
    values.push(node.val);

    if (node.left) {
      queue.enqueue(node.left);
    }

    if (node.right) {
      queue.enqueue(node.right);
    }
  }

  return values;
};

console.log("Breadth first search:");
console.log(BST.bfs());