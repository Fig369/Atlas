//Jorge Figueroa//
//10:19 PM UTC April2nd 2022//

//Start//Food//

const food = [
  "okra",
  "carrots",
  "kale",
  "spinach",
  "onion",
  "apples",
  "bananas",
  "grapes",
  "oranges",
];
console.log(food);

food.pop();
console.log(food);

food.push("strawberries");
console.log(food);

food.shift();
console.log(food);

food.unshift("broccoli");
console.log(food);

//Fruits and Veggie//

let veggies = food.slice(0, 5);
console.log(veggies);

let fruit = food.slice(5);
console.log(fruit);

food.splice(4, 1);
console.log(food);

food.splice(2, 2, "brussels sprouts");
console.log(food);

//Lorem Text//

var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
console.log([text[5]]);

console.log([text[text.length - 1]]);

var lorem = text.slice(0, 5);

console.log([lorem]);

//Chores//

var chores1 = "clean, pay bills, groceries";
var chores2 = "learn JS, doctors office, pick up kids";
chores1Combine = chores1.split(/\s*,\s*/);
chores2Combine = chores2.split(/\s*,\s*/);
var allChores = chores1Combine.concat(chores2Combine);
console.log(allChores);
