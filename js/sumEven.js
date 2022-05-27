/* let numStr = [2, 1, 6, 5, 3, 2, 4 ]; */
/* let numStr = [1, 5, 7, 9]; */
let numStr =  [2, 4, 6, 3];

const even_sum = (numStr) => {
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] % 2 === 0) {
    sum = sum + numStr[i];
    }
  }
  return sum;
}
 
console.log(even_sum(numStr));