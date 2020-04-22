// Walk through the binary search tree code in the curriculum and understand it well. 
// Then write a BinarySearchTree class with its core functions (`insert()`, `remove()`,
// `find()`) from scratch.

//  - Create a binary search tree called BST and insert `3,1,4,6,9,2,5,7` into your tree.
//    Compare your result with the result from the 1st exercise.

//  - Create a binary search tree called BST and insert E A S Y Q U E S T I O N into your tree. 
//    Compare your result with the result from the 1st exercise.  
const Queue = require('./Queue');

class BinarySearchTree {
  // Initialize constructor with our required properties
  constructor (
    key = null, 
    val = null, 
    parent = null
  ) {
    this.key = key;
    this.val = val;
    this.parent = null;
    this.left = null;
    this.right = null;
  };

  // Method to add items to the tree
  add(key, val) {
    // Check if the tree is empty (sets as root if so)
    if ( this.key === null ) {
      this.key = key;
      this.val = val;
    
    // Otherwise we start at the root and compare it to our key
    // If its less than we move to the left branch
    } else if ( key < this.key ) {
      // Check if we have a left branch
      // If empty we can just insert
      if ( this.left === null ) {
        this.left = new BinarySearchTree(key, val, this);
      }

      // Otherwise we recursively call the add method
      else {
        this.left.add(key, val);
      };
    }

    // Similarly, if it is greater than or equal to
    else {
      // Check if we have a right branch
      // If empty we can just insert
      if ( this.right === null ) {
        this.right = new BinarySearchTree(key, val, this);
      }

      // Otherwise we recursively call the add method
      else {
        this.right.add(key, val);
      };
    };
  };

  // Method to find an item in the tree
  find(key) {
    // If the item exists at the root of the tree, return the value
    if ( this.key === key ) {
      return this.val;
    }

    // If the item is less than the root we'll go left
    // If the item is larger than the root we'll go right
    // If there is an existing left child, recursively
    // call its left and/or right children until we
    // find the item. Likewise with the right.
    else if ( key < this.key && this.left ) {
      return this.left.find(key);
    }
    else if ( key > this.key && this.right ) {
      return this.right.find(key);
    }

    // Item was not found. Throw an error
    else {
      throw new Error('Key error');
    };
  };

  // Method to delete an item in the tree
  remove(key) {
    // If the item exists at the root of the tree
    if ( this.key === key ) {
      // Check if both of our children exist
      if ( this.left && this.right ) {
        // Find the minimum value on our right tree
        const successor = this.right._findMin();
        this.key = successor.key;
        this.val = successor.val;
        successor.remove(successor.key);
      }

      // If we only have a left child
      else if ( this.left ) {
        this._replaceWith(this.left);
      }

      // If we only have a right child
      else if ( this.right ) {
        this._replaceWith(this.right);
      }

      // If we have no children, we'll simply remove it
      // and all references to it with this._replaceWith(null)
      else {
        this._replaceWith(null);
      };
    }
    
    // Check if our search should go left or right
    else if ( key < this.key && this.left ) {
      this.left.remove(key);
    }

    else if ( key > this.key && this.right ) {
      this.right.remove(key);
    }

    // Item wasn't found. Throw an error
    else {
      throw new Error('Key error');
    };
  };

  // Depth first search
  dfs(values=[]) {
    if (this.left) {
      values = this.left.dfs(values);
    }

    values.push(this.val);

    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  };

  // Breadth first search
  bfs(values = []) {
    const queue = new Queue();
    const root = this;
    queue.enqueue(root);

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
  
  // Helper func to replace a node
  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      }

      else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    }

    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }

      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    };
  };

  // Helper func to find the minimum val
  _findMin() {
    if (!this.left) {
      return this;
    };
    return this.left._findMin();
  };
};

module.exports = BinarySearchTree;