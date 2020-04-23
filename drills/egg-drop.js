// This is a fun exercise to do - consider this optional after you are 
// done with all the exercises above. Imagine that you wanted to find 
// the highest floor of a 100 story building that you could drop an egg 
// from without the egg breaking. But you only have 2 eggs. Write an 
// algorithm to find out in the most efficient way which floors you should 
// drop the eggs from. After you have understood the question and made some 
// attempts to solve the problem, go through this reading before you start 
// coding: http://datagenetics.com/blog/july22012/index.html.

const getDropCount = (eggs, floors) => {
  const dropCount = [
    null,
    [...Array(floors + 1).keys()],
    ...Array.from(Array(eggs - 1), _ => [0, 1])
  ];
  
  for ( let eggsLeft = 2; eggsLeft <= eggs; eggsLeft++ ) {
    for ( let choices = 2; choices <= floors; choices++ ) {
      let min = Infinity;
      for ( let dropAt = 1; dropAt <= choices; dropAt++ ) {
        min = Math.min(min,
          1 + Math.max(dropCount[eggsLeft - 1][dropAt - 1],
            dropCount[eggsLeft][choices - dropAt])
        );
      }
      dropCount[eggsLeft][choices] = min;
    }
  }
  return dropCount[eggs][floors];
};

// This returns the max number of guesses you'd need to be certain to find the critical floor
// To guess which floors specifically, we'd need feedback on the first drop.
console.log(getDropCount(2,100));