function addNums(...nums){
    let res= nums.reduce((num1, num2) => num1 + num2)
    return res
}

function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(2)) // 2
console.log(addNums(1,2)) //3
console.log(addNums(30,60,90)) //180

let x = 1
let y = 2
let z = 3
let r = 10
let abc = "hello world"
let one23 = addNums(x,y,z)
let three21 = addNums(x * y *z)
let easy = x * y * z



console.log(addNums(x,y)) //3
console.log(addNums([x,y,z])) //[1, 2, 3]
console.log(addNums([x+y+z * z+x+y])) //[15]
console.log(addNums([x+y+z] * [z+x+y])) //36
console.log(addNums(x,abc)) //1hello world
console.log(addNums(abc,y)) //hello world2
console.log(addNums(one23,three21)) //12
console.log(addNums(one23 * three21)) //36
console.log(three21 * addNums(one23, abc.length)) //102
console.log(addNums(z+(x * x), y-(y - y), x*(z * z)) / Math.PI) //4.7746482927568605
console.log(easy) ///6
console.log(easy ** addNums(1 * z,2 * y,3 *x)) //60466176


function range(from, to, reverse) {
  // Make sure our inputs are actually numbers
  if (Number(from) != from || Number(to) != to) {
    throw new TypeError("range() expects a Number as both it's first and second argument");
  }

  let o = []; // initialize our output array
  
  // get the lowest value argument as our starting index
  let i = Math.min(from, to);
  
  // get the highest value argument as our ending index
  let x = Math.max(from, to); 

  // push i onto our output array and then increment until i == x
  while (i <= x) { o.push(i); i++; }

  // reverse the range order if necessary
  if (reverse) { o = o.reverse(); }
  
  // return our output array
  return o;
}

function sum(range) {
  if (!(range instanceof Array)) {
    throw new TypeError("sum() expects an Array as it's only argument");
  } return range.reduce((a,b) => a+=b);
}

/* function range(start, end, step=(start <= end)? 1: -1) {
   let array = [];
  
   if (step > 0) {
       if (start > end) {
           return undefined;
       }
       for (let n = start; n <= end; n += step) {
           array.push(n);
       }
   }
   else if (step < 0) {
       if (start < end) {
           return undefined;
       }
       for (let n = start; n >= end; n += step) {
           array.push(n);
       }
   }
   else {
       return undefined;
   }
  
   return array;
}
function sum(array) {
   let result = 0;

   for (num of array) {
       result += num;
   }

   return result;
}
 */

let a = range(1,10);
let b = range(8, 5);
let c = range(5,2,false);
let d = range(10,1,true);
let e = range(1,10,false);
let f = range(1,10,true)
let g = range(1,1)
let h = sum(range(1,10))


console.log(a); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(b); //[5, 6, 7, 8]
console.log(c); //[2, 3, 4, 5]
console.log(d); //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(e); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(f) //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(g) //[1]
console.log(h) //55


console.log(sum(a)); // 55
console.log(sum(b)); // 26
console.log(sum(c)); // 14

console.log(range(x, r)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



function reverseArray(array) {
   let reversedArray = [];

   for (let element of array) {
       reversedArray.unshift(element);
   }

   return reversedArray;
}

function reverseArrayInPlace(array) {
   for (let index = 0; index < array.length; index++) {
       let lastValue = array.pop();
       array.splice(index, 0, lastValue);
   }
}
function reverseArrayInPlace(array) {
   const lastIndex = array.length - 1;
  
   for (let index = 0; index < Math.floor(array.length / 2); index++) {
       let firstValue = array[index];
       array[index] = array[lastIndex - index];
       array[lastIndex - index] = firstValue;
   }
}
console.log(reverseArray(["A", "B", "C"])); // ??? ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);

console.log(arrayValue); // ??? [5, 4, 3, 2, 1]





function deepEqual(a,b)
{
  if( (typeof a == 'object' && a != null) &&
      (typeof b == 'object' && b != null) )
  {
     var count = [0,0];
     for( var key in a) count[0]++;
     for( var key in b) count[1]++;
     if( count[0]-count[1] != 0) {return false;}
     for( var key in a)
     {
       if(!(key in b) || !deepEqual(a[key],b[key])) {return false;}
     }
     for( var key in b)
     {
       if(!(key in a) || !deepEqual(b[key],a[key])) {return false;}
     }
     return true;
  }
  else
  {
     return a === b;
  }
}
var obj = {here: {is: "an"}, object: 2}

console.log(deepEqual(obj, obj)); // ??? true

console.log(deepEqual(obj, {here: 1})); // ??? false

console.log(deepEqual(obj, {here: 2})); // ??? false

console.log(obj === { here:2 }); // ??? false

console.log(deepEqual(obj, {here: 1, object: 2})); // ??? false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // ??? true

console.log(deepEqual(1, '1')); // ??? false

console.log(deepEqual(1, [1])); // ??? false

console.log(deepEqual(12, 12.1)); // ??? false

console.log(deepEqual(null, undefined)); // ??? false

console.log(deepEqual('null', null)); // ??? false

console.log(deepEqual(undefined, undefined)); // ??? true

console.log(deepEqual(null, null)); // ??? true

console.log(deepEqual([1, 1, 1], [1, 1, 2])); // ??? false

console.log(deepEqual([1, 2, 3], [1, 2, 3])); // ??? true

console.log(deepEqual([1, 2, [1, {obj: 'abc'}]], [1, 2, [1, {obj: 'abc'}]])); // ??? true

console.log(deepEqual([1, 2, [1, {obj: 'abc'}]], [1, 2, [1, {obj: 'abc', obj2: 'def'}]])); // ??? false

console.log(deepEqual([1], [1])); // ??? true

console.log(deepEqual(1, 1)); // ??? true

console.log(deepEqual("Hey", "hey")); // ??? false

console.log(deepEqual("Hey", "Hey")); // ??? true

function arrayToList(arr) {
  var li = {};
  li.value=arr[0], arr.shift();
  if(arr.length) li.rest=arrayToList(arr);
  else li.rest=null; 
  return li;
}
function listToArray(li) {
  var arr = [];
  for(var i=li; i; i=i.rest) arr.push(i.value);
  return arr;
}
function prepend(a, b) {
  var li = {};
  li.value=a, li.rest=b;
  return li;
}
function nth(li, n) {
  var elem, cnt=0;
  for(var i=li; i; i=i.rest, cnt++) {
    if(cnt==n) {
      elem=i.value;
      break;
    }
  }
  return elem;
}
console.log(arrayToList([10, 20]));
// ??? {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// ??? [10, 20, 30]

console.log(prepend(10, prepend(20, null)));
// ??? {value: 10, rest: {value: 20, rest: null}}

console.log(nth(arrayToList([10, 20, 30]), 0));
// ??? 20










