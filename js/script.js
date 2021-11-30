$(".play").click(function() {
  // Computer Random Choice
  let input;
  input = Math.random() * 3;
  input = Math.ceil(input);
  if (input == 1) {
    $(".computerChoice").text("Rock")
  }
  if (input == 2) {
    $(".computerChoice").text("Paper")
  }
  if (input == 3) {
   $(".computerChoice").text("Scissors")
  }
  
  //Win or Lose
  if (".userChoice" == "rock") && (".computerChoice" == "Roc`k") {
  }
});








