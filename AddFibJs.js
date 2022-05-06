function addNums(...nums){
    let res= nums.reduce((num1, num2) => num1 + num2)
    return res
}

function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(2))
console.log(addNums(1,2))
console.log(addNums(30,60,90))

let x = 1
let y = 2
let z = 3
let abc = "hello world"
let one23 = addNums(x,y,z)
let three21 = addNums(x * y *z)
let easy = x * y * z



console.log(addNums(x,y))
console.log(addNums([x,y,z]))
console.log(addNums([x+y+z * z+x+y]))
console.log(addNums([x+y+z] * [z+x+y]))
console.log(addNums(x,abc))
console.log(addNums(abc,y))
console.log(addNums(one23,three21))
console.log(addNums(one23 * three21))
console.log(three21 * addNums(one23, abc.length))
console.log(addNums(z+(x * x), y-(y - y), x*(z * z)) / Math.PI)
console.log(easy)
console.log(easy ** addNums(1 * z,2 * y,3 *x))
console.log(fibonacci(addNums(one23 * three21)(easy)))