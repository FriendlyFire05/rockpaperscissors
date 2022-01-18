//Scoreboard
let scoreboard_user = 0;
let scoreboard_computer = 0;

//Start Button
$(".play").click(function () {
  // Computer Random Choice
  let computerInput;
  computerInput = Math.random() * 3;
  computerInput = Math.ceil(computerInput);
  if (computerInput === 1) {
    $(".computerChoice").text("Rock");
  } else if (computerInput === 2) {
    $(".computerChoice").text("Paper");
  } else if (computerInput === 3) {
    $(".computerChoice").text("Scissors");
  }

  //User Choice
  let userInput;
  userInput = $(".input").val();
  $(".userChoice").text(userInput);

  //Win or Lose
  if (userInput.toLowerCase() === "rock" && computerInput === 1) {
    $(".result").text(`Tie.`);
  } else if (userInput.toLowerCase() === "rock" && computerInput === 2) {
    $(".result").text(`You Lost.`);
  } else if (userInput.toLowerCase() === "rock" && computerInput === 3) {
    $(".result").text(`You Won.`);
  } else if (userInput.toLowerCase() === "paper" && computerInput === 1) {
    $(".result").text(`You Won.`);
  } else if (userInput.toLowerCase() === "paper" && computerInput === 2) {
    $(".result").text(`Tie.`);
  } else if (userInput.toLowerCase() === "paper" && computerInput === 3) {
    $(".result").text(`You Lost.`);
  } else if (userInput.toLowerCase() === "scissors" && computerInput === 1) {
    $(".result").text(`You Lost.`);
  } else if (userInput.toLowerCase() === "scissors" && computerInput === 2) {
    $(".result").text(`You Won.`);
  } else if (userInput.toLowerCase() === "scissors" && computerInput === 3) {
    $(".result").text(`Tie.`);
  } else {
    $(".result").text(`- Please pick either rock, paper, or scissors. -`);
  }

  //Capatilization in User Choice
  if (userInput.toLowerCase() === "rock") {
    $(".userChoice").text("Rock");
  } else if (userInput.toLowerCase() === "paper") {
    $(".userChoice").text("Paper");
  } else if (userInput.toLowerCase() === "scissors") {
    $(".userChoice").text("Scissors");
  }

  //Score Board
  if ($(".result").text() === "You Won.") {
    scoreboard_user = scoreboard_user + 1;
    $(".scoreboarduser").text(`Score: ${scoreboard_user}`);
    $(".scoreboardcomputer").text(`Score: ${scoreboard_computer}`);
  } else if ($(".result").text() === "You Lost.") {
    scoreboard_computer = scoreboard_computer + 1;
    $(".scoreboardcomputer").text(`Score: ${scoreboard_computer}`);
    $(".scoreboarduser").text(`Score: ${scoreboard_user}`);
  }
});
