var str1 = "hello";
console.log(str1);

var str2 = str1.concat(" " + "world" + "!");
console.log(str2);

console.log(str2.length);

let strUp = str2;
console.log(strUp);
let str1ALLCaps = strUp.toUpperCase();
console.log(str1ALLCaps);

var removeStr = str1.replace("e", "");
console.log(removeStr);

var strIndex = str2.indexOf("!");
console.log(strIndex);

var str3 = str2.slice(0, 4);
console.log(str3);

var strIncludes = str2.includes("ell");
console.log(strIncludes);

const me = {
  name: "Jorge Figueroa",
  age: 32,
};

console.log(me.name);
console.log(me["name"]);

me["canDrink"] = true;

console.log(me);

me["greet"] = function () {
  return `Hello my name is ${this.name}`;
};

console.log(me.greet());

if (me.name.includes("e")) {
  console.log("true");
} else {
  console.log("false");
}

idCheck = (myName) => {
  var myName = me.name;
  var myAge = me.age;

  if (`${myAge}` > 20) {
    if (true) console.log(`${myName} can drink`);
  } else {
    console.log(`${myName} cannot drink`);
  }
};

idCheck();
