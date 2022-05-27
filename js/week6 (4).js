var heading = document.querySelector("div").querySelector("h1");
/* console.log(heading); */

heading.innerHTML = "Generic Heading";

//Paragraph Blue and New//
var paragraphs = document.querySelector("div").querySelectorAll("p");

paragraphs.forEach((p) => {
  p.className = "blue";
});

var newP = document.querySelector("div");

newP.appendChild(document.createElement("p")).textContent = "new paragraph";

const myHobbies = ["Gamming", "Crypto", "Reading", "Eating", "Drawing"];

var ul = document.querySelector("ul");
for (i = 0; i < myHobbies.length; i++) {
  ul.appendChild(document.createElement("li")).textContent = myHobbies[i];
}

//form//

var form = document.querySelector("form");
const goButton = document.querySelector("#go");
const stopButton = document.querySelector("#stop");

form.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target == goButton) {
    goButton.classList.add("go");
    stopButton.classList.remove("stop");
  } else if (event.target == stopButton) {
    stopButton.classList.add("stop");
    goButton.classList.remove("go");
  }
});
