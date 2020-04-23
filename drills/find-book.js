// Imagine you are looking for a book in a library with a Dewey Decimal 
// index. How would you go about it? Can you express this process as a 
// search algorithm? Implement your algorithm to find a book whose Dewey 
// and book title is provided.

/***********************************************
 * THIS IS ALL SETUP *
***********************************************/
const HashMap = require('../lib/HashMap');
const BinarySearchTree = require('../lib/BinarySearchTree');

const deweyIndexes = [
  "General Works",
  "Philosophy & Psychology",
  "Religion",
  "Social Sciences",
  "Language",
  "Natural Sciences and Mathematics",
  "Technology",
  "The Arts",
  "Literature",
  "History, Biography, and Geography"
];

const deweyHash = new HashMap();
HashMap.SIZE_RATIO = 3;
HashMap.MAX_LOAD_RATIO = 0.5;

let indexNum = 000;
deweyIndexes.forEach(cat => {
  deweyHash.set(indexNum, {name: cat, data: new HashMap()});
  indexNum += 100;
});

let books = [
  {title: "Far Away"},
  {title: "Gone Again"},
  {title: "Hello world"},
  {title: "Goodnight Moon"},
  {title: "Farewell Friend"}
];

books.forEach(book => {
  for ( let i = 0; i < deweyHash.length; i++ ) {
    deweyHash.get(i * 100).data.set(book.title, book.title);
  };
});
/***********************************************
 * THIS IS ALL SETUP *
***********************************************/

// Finding a book with an easy data structure.
const findBook = (title, ddi) => {
  const deweyTitle = deweyHash.get(ddi).name;
  return `${deweyTitle}: ${deweyHash.get(ddi).data.get(title)}`;
};

console.log(findBook("Goodnight Moon", 000));