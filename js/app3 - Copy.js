for (i = 1; i < 11; i++) {
  console.log(i);
}

while (true) {
  break;
}

const bottlesOnTheWall = true;
let beerBottles = 99;

// Initiate infinite loop
while (bottlesOnTheWall) {
  console.log(
    ` ${beerBottles} bottles of beer on the wall. Take one down pass it around.`
  );
  beerBottles--;
  if (beerBottles === 1) {
    console.log(
      " " + "1 bottle of beer on the wall. Take one down pass it around."
    );
    break;
  }
}
//original version//
/* for (var i = 99; i >= 2; i--) {
  console.log(
    i + " " + "bottles of beer on the wall. Take one down pass it around."
  );
}
for (var i = 1; i >= 1; i--) {
  console.log(
    i + " " + "bottle of beer on the wall. Take one down pass it around."
  );
} */

var bools = [true, true, false, true, false, true, true, true];
for (let i = 0; i <= bools.length; i++) {
  if (bools[i] === true) {
    console.log([bools[i]]);
  }
}

let str = "apples";
let vowels = ["a", "e", "i", "o", "u"];
for (let i = 0; i <= str.length; i++) {
  if (vowels.includes(str[i])) {
    console.log([str[i]]);
  }
}
