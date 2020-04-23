// Using your BinarySearchTree class from your previous lesson, create a 
// binary search tree with the following dataset:  

// `25 15 50 10 24 35 70 4 12 18 31 44 66 90 22`  

// Then implement `inOrder()`, `preOrder()`, and `postOrder()` functions. 
// Test your functions with the following datasets.

// A pre-order traversal should give you the following order:  
// `25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90`

// In-order:  
// `4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90`
    
// Post-order:  
// `4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25`  

// Already implemented in the class, but I'll demo here for the sake of demoing

// Setup //
const BinarySearchTree = require('../lib/BinarySearchTree');
const vals = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
const BST = new BinarySearchTree();
vals.forEach(val => BST.add(val, val));


// Traversal functions
const inOrder = (node, values=[]) => {
  if (node.left) {
    values = inOrder(node.left, values);
  }

  values.push(node.val);

  if (node.right) {
    values = inOrder(node.right, values);
  }
  return values;
};

console.log("--InOrder Traversal--")
console.log("Expecting: [ 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90 ]");
console.log(inOrder(BST));


const preOrder = (node, values=[]) => {
  values.push(node.val);

  if (node.left) {
    values = preOrder(node.left, values);
  }

  if (node.right) {
    values = preOrder(node.right, values);
  }
  return values;
};

console.log("--PreOrder Traversal--")
console.log("Expecting: [ 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90 ]");
console.log(preOrder(BST));

const postOrder = (node, values=[]) => {
  if (node.left) {
    values = postOrder(node.left, values);
  }

  if (node.right) {
    values = postOrder(node.right, values);
  }

  values.push(node.val);
  return values;
};

console.log("--PostOrder Traversal--")
console.log("Expecting: [ 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25 ]");
console.log(postOrder(BST));