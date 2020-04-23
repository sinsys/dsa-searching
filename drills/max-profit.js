// The share price for a company over a week's trading is as follows:

// [128, 97, 121, 123, 98, 97, 105].

// If you had to buy shares in the company on a particular day, and sell 
// the shares on a subsequent day, write an algorithm to work out what the 
// maximum profit you could make would be.

const maxProfit = (arr) => {
  let minIndex = 0;
  let maxIndex = 1;
  let curMin = 0;
  let maxProfit = 0;

  if ( arr.length < 2 ) {
    throw new Error("We need at least two prices");
  }

  for ( let i = 0; i < arr.length; i++ ) {
    // Get current minimum
    if ( arr[i] < arr[curMin] ) {
      curMin = i;
    };

    // Get best profit
    if ( arr[maxIndex] - arr[minIndex] < arr[i] - arr[curMin] ) {
      maxIndex = i;
      minIndex = curMin;
    };

  }

  maxProfit = arr[maxIndex] - arr[minIndex];
  return maxProfit;
};

const prices = [128, 97, 121, 123, 98, 97, 105];
console.log(maxProfit(prices));