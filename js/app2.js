var bob1 = prompt("Enter a number");
var num1 = Number(bob1);

var bob2 = prompt("Enter another number");
var num2 = Number(bob2);

alert(Math.pow(num1, num2));

var getRandom = Math.floor(Math.random() * (4 - 1) + 1);
console.log(getRandom);

const alphabet = ["a", "b", "c", "d", "e", "f"];

var myIndex = alphabet.indexOf("f");
if (myIndex !== -1) {
  alphabet.splice(myIndex, 1);
}

alphabet.push("g");

var myIndex = alphabet.indexOf("a");
if (myIndex !== -1) {
  alphabet.splice(myIndex, 1);
}

alphabet.unshift(1);

console.log(alphabet);
