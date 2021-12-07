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
  if (".input" === "rock","Rock") 
     if (computerInput === 1); {
     $(".result").text(`Tie`);
  }
  

});








