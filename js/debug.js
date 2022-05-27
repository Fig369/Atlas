const person = {
  firstName: "Jorge",
  lastName: "Figueroa",
  id: 1133,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

function hello(person) {
  let phrase = `Hello, ${person}!`;

  debugger; // <-- the debugger stops here

  say(phrase);
}

function Hello() {
  alert("caller is " + Hello.caller);
}
