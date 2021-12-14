let scoreboard_user = 0;
let scoreboard_computer = 0;

$(".play").click(function() {
  
  // Computer Random Choice
  let computerInput;
  computerInput = Math.random() * 3;
  computerInput = Math.ceil(computerInput);
  if (computerInput === 1) {
    $(".computerChoice").text("Rock")
  }
  else if (computerInput === 2) {
    $(".computerChoice").text("Paper")
  }
  else if (computerInput === 3) {
   $(".computerChoice").text("Scissors")
  }
  
  //User Choice
  let userInput;
  userInput = $(".input").val();
  $(".userChoice").text(userInput);
  
  //Win or Lose
  console.log("userInput",userInput,"Rock");
  if (userInput.toLowerCase() === "rock" && computerInput === 1) {
     $(".result").text(`Tie`);
  }
  else if (userInput.toLowerCase() === "rock" && computerInput === 2) {
     $(".result").text(`You Lost.`);
  }
  else if (userInput.toLowerCase() === "rock" && computerInput === 3) {
     $(".result").text(`You Won.`);
  }
  else if (userInput.toLowerCase() === "paper" && computerInput === 1) {
     $(".result").text(`You Won`);
  }
  else if (userInput.toLowerCase() === "paper" && computerInput === 2) {
     $(".result").text(`Tie.`);
  }
  else if (userInput.toLowerCase() === "paper" && computerInput === 3) {
     $(".result").text(`You Lost.`);
  }
  else if (userInput.toLowerCase() === "scissors" && computerInput === 1) {
     $(".result").text(`You Lost`);
  }
  else if (userInput.toLowerCase() === "scissors" && computerInput === 2) {
     $(".result").text(`You Won.`);
  }
  else if (userInput.toLowerCase() === "scissors" && computerInput === 3) {
     $(".result").text(`Tie.`);
  }
  else {
    $(".result").text(`Please pick either rock, paper, or scissors.`)
    
  }

//Score Board
  if (".result".text("You Won") {
    scoreboard = scoreboard_user + 1
  }
  
  else if (".result".text() === "You Lost"){
    
  }
  
  
});








