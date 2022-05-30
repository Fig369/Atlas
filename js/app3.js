const game = {
  win: 0,
  loss: 0,
};

const choices = ["rock", "paper", "scissors"];

function returnResult() {
  console.clear(); // This is just to prevent console crowding for this example

  // Move your random number generators inside the function
  // so you get a new random number each time game is played.
  const random1 = Math.round(Math.random() * 2);
  const random2 = Math.round(Math.random() * 2);

  const bot1 = choices[random1];
  const bot2 = choices[random2];

  console.log("Player 1:" + bot1);
  console.log("Player 2:" + bot2);

  // var result = "";  You don't this if you are keeping score in `game` object

  // No need to call switch on bot1 three times:
  switch (bot1) {
    case "paper":
      switch (bot2) {
        case "rock":
          console.log("Player 1 Wins!");
          game.win++; // Update game win
          break;
        case "scissors":
          console.log("Player 2 Wins!");
          game.loss++; // Update game loss
          break;
        case "paper":
          console.log("Draw!");
          break;
      }
      break;

    case "rock":
      switch (bot2) {
        case "scissors":
          console.log("Player 1 Wins!");
          game.win++; // Update game win
          break;
        case "paper":
          console.log("Player 2 Wins!");
          game.loss++; // Update game loss
          break;
        case "rock":
          console.log("Draw!");
          break;
      }
      break;

    case "scissors":
      switch (bot2) {
        case "paper":
          console.log("Player 1 Wins!");
          game.win++; // Update game win
          break;
        case "rock":
          console.log("Player 2 Wins!");
          game.loss++; // Update game loss
          break;
        case "scissors":
          console.log("Draw!");
          break;
      }
      break;
  }

  // return result;  No need to return result.  Update game object every play instead.
  console.log(game);
  return game; // Return game object if needed
}
