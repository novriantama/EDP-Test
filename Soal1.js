const maxBinary = (input) => {
  if (input.length > 10000) {
    throw "invalid input";
  }
  let current = 0;
  let result = 0;
  input.forEach((element) => {
    if (element == 1 || element == 0) {
      if (element == 1) {
        current += 1;
        if (current > result) {
          result = current;
        }
      } else {
        current = 0;
      }
    } else {
      throw "invalid input";
    }
  });
  return result;
};

console.log("input 1 [1,1,0,1,1,1]: " + maxBinary([1, 1, 0, 1, 1, 1]));
console.log("input 2 [1,0,0,1,0,1,1]: " + maxBinary([1, 0, 0, 1, 0, 1, 1]));
