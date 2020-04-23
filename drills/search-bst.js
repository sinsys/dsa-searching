// ** No coding is needed for these drills**. Once you have answered it, 
// you can then code the tree and implement the traversal to see if your 
// answer is correct.

// 1) Given a binary search tree whose in-order and pre-order traversals 
// are respectively
// 14 15 19 25 27 35 79 89 90 91 
// and 
// 35 25 15 14 19 27 89 79 91 90

// What would be its postorder traversal?

// 2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. 
// What is its pre-order traversal?

// In Order
// 14 15 19 25 27 35 79 89 90 91 

// Pre Order
// 35 25 15 14 19 27 89 79 91 90

// Post Order
// 14 19 15 27 25 79 90 91 89 35

// Tree
//               35
//         25           89
//      15   27     79     91
//   14   19             90

const BinarySearchTree = require('../lib/BinarySearchTree');
let originalBST = [35, 25, 89, 15, 27, 79, 91, 14, 19, 90];
let BST = new BinarySearchTree();

originalBST.forEach(i => BST.add(i, i));

console.log(BST);
console.log(BST.dfs("preorder"));

// Post order
// 5 7 6 9 11 10 8

//                8
//             6     10
//          5    9      11
//              7
              
let originalBST2 = [8,6,10,5,9,11,7];
let BST2 = new BinarySearchTree();

originalBST2.forEach(i => BST2.add(i, i));

console.log(BST2);
console.log(BST2.dfs("preorder"));