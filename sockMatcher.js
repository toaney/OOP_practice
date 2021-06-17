// takes an array of numbers that represent different colored socks
// return # matched socks
let test1 = [5, 5, 8, 19, 8, 5, 1, 1];
let test2 = [1, 1, 1, 1, 1, 1, 9, 2, 3, 5, 9, 1];

const sockMatcher = (array) => {
  let sockDict = {};
  let totalPairs = 0;

  array.forEach( x => {
    // console.log(x);
    if (!sockDict[x]){
      sockDict[x] = 1;
      return;
    } 

    sockDict[x] = sockDict[x] + 1;
  });

  for (y in sockDict) {
    console.log(y);
    totalPairs = totalPairs + (Math.floor(sockDict[y]/2));
  }


  console.log(sockDict);
  console.log(totalPairs);
}

sockMatcher(test2);