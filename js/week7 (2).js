//Jorge Figueroa//
//4.18.21//

//2//
let wizardName = "jon Dee";

function capitalizeFirstLetter(string) {
  return string.replace(/^\w/, (c) => c.toUpperCase());
}
//3//
var firstCap = capitalizeFirstLetter(wizardName);

console.log(firstCap);
//4//
const isWizard = true;

//5//
if (true) {
  var luckRoll = 3.3;
  var roundUP = Math.round(luckRoll * Math.random(3.3));
  //6//
  console.log("Luck:" + " " + roundUP);
}

/* function gainGrit() {
  window.event.preventDefault;
  let grit = 0;
  grit = grit + roundUP++;
  localStorage.setItem("Grit:", grit++);
}

console.log(gainGrit()); */

if (true) {
  let charType = "Wizard";
  console.log("Type:" + " " + charType);
}
if (isWizard) {
  var level = 6;
  console.log("Level:" + " " + level);
}
//7//
if (level > 3) {
  let manaPower = Math.sqrt(6);
  manaLevel = Math.ceil(manaPower + 9);
  console.log("Power:" + " " + manaLevel);
}

//8//
/* console.log(manaPower); */

//9//
/* var extraDef = isWizard;
var isWizard = 7;
console.log(isWizard); */

//10//
const attack = [];

if (isWizard == true && level == 6) {
  const attack6 = [
    {
      attack: "Fireball",
      power: 9,
    },
    {
      attack: "Wand Thrust",
      power: 3,
    },
    {
      attack: "Ice Javelin",
      power: 6,
    },
  ];

  //11//
  attack.push(attack6);
}

var isAttack = attack[0];

console.log(attack);
console.log(isAttack);
//12//

const spAbilities = {};
console.log(spAbilities);

//13//
const createdBy = [
  {
    name: "Jorge Figueroa",
    age: 32,
  },
];

let myName = createdBy[0].name;
const myAge = createdBy[0].age;
//14//
const myGreet = `Hello i am ${myName}`;
console.log(myGreet);

//15//
function greet() {
  const myGreeting = myGreet + `and i am ${myAge} years old`;
  console.log(myGreeting);
}

greet();

//16//
console.log(myName);
console.log(myAge);

//17//
hello = () => "Hello" + " ";
var arrow1 = hello() + "World!";
console.log(arrow1);

console.log(isAttack[0]);
//18//
fireball = (str) => {
  var str = isAttack[0];
  var arrow2 = `Player used ${str.attack}, ${str.power} damage was dealt`;
  console.log(arrow2);
};

fireball();
//19//
bonusDamage = (a1, b1) => {
  var a1 = manaLevel;
  var b1 = roundUP;
  var arrow3 = (a1 * b1) / a1;
  console.log(`Bonus Damage: + ${arrow3}`);
};

bonusDamage();

//20//
setTimeout(function () {
  if (roundUP > 1) {
    document.write(
      "<img src='https://imgs.search.brave.com/__tx_jtfbmEJl2b3Dujp11gj4Eq4YTwJ6bswlKPrOYI/rs:fit:500:210:1/g:ce/aHR0cDovLzIuYnAu/YmxvZ3Nwb3QuY29t/Ly12WlNxbFBvYW1w/by9VY1VwRG5mZGU0/SS9BQUFBQUFBQUFX/WS95ZnBYOHFkZ1VQ/WS9zMTYwMC9pbnRv/VGhlRmlyZTEucG5n' alt='alt tag'>"
    );
    console.log("Bonus Hit!");
  } else {
    console.log("Bounus Miss!");
  }
}, 2310);

//21//
for (const element of attack) {
  console.log(element);
}

//22/
if (Object.keys(spAbilities).length === 0) {
  Object.assign(spAbilities, { name: "Magic Force", power: 5 });
}
console.log(spAbilities);

for (const key of Object.keys(spAbilities)) {
  console.log(`${key}: ${spAbilities[key]}`);
}

for (let i = 1; i <= myAge; i++) {
  console.log(`my age is ${myAge}`);
}
