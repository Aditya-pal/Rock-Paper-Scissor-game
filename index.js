var you;
var opponent;
var yourScore = 0;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function () {
  for (let i = 0; i < 3; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }
};

function selectChoice() {
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  opponent = choices[Math.floor(Math.random() * 3)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  if (you == opponent) {
    yourScore += 1;
    opponentScore += 1;
  } else {
    if (you == "rock") {
      if (opponent == "paper") {
        opponentScore += 1;
      } else {
        yourScore += 1;
      }
    }
    if (you == "paper") {
      if (opponent == "scissors") {
        opponentScore += 1;
      } else {
        yourScore += 1;
      }
    }
    if (you == "scissors") {
      if (opponent == "rock") {
        opponentScore += 1;
      } else {
        yourScore += 1;
      }
    }
  }

  document.getElementById("opponent-scores").innerText = opponentScore;
  document.getElementById("your-scores").innerText = yourScore;
}
