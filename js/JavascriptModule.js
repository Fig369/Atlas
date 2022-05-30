const para = document.querySelector("p");
const div = document.getElementById("paragraph");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  para.textContent = `Player1 ${name}`;
}
