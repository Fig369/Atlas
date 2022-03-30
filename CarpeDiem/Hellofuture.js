const para = document.querySelector("p");
// create a div
const div = document.getElementById("paragraph");
para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player 1: ${name}`;
  createBio();
}
console.log(nameupdated )
// append a bio
function createBio() {
  paragraph = document.createElement("p");
  const stringToAppend = "I am a Human.";
  paragraph.innerHTML = stringToAppend;
  div.appendChild(paragraph);
  console.log("completed createBio");
}
  console.error(error did not pass line "20")