let scissors = document.getElementById("scissors");
let paper = document.getElementById("paper");
let rock = document.getElementById("rock");

let options = "";

scissors.onclick = () => {
  options = 'scissors';
  compare();
};

paper.onclick = () => {
  options = 'paper';
  compare();
};

rock.onclick = () => {
  options = 'rock';
  compare();
};

function randome() {
  return Math.floor(Math.random() * 3);
}

function compMove() {
  let arr = ["paper", "scissors", "rock"];
  return arr[randome()];
}
let decs = document.getElementById("desc");
let result = document.getElementById("result");
function compare() {
  let comp = compMove();
  // document.getElementById("computer").innerHTML = " " + comp;
  decs.innerHTML = "Computers chose " 
    + comp 
    + "<br> Player chose " 
    + options;

  if (
    (comp === "paper" && options === "rock") ||
    (comp === "rock" && options === "scissors") ||
    (comp === "scissors" && options === "paper")
  ) {
    result.innerHTML = "Result: Computer wins!";
  } else if (comp === options) {
    result.innerHTML = "Result: DRAW";
  } else result.innerHTML = "Result: You win!";
}
