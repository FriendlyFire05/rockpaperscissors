$(".play").click(function() {
  let input = $(".input").val();
  $(".userChoice").text(input)
});


$(".play").click(function() {
  let input = Math.random();
  if (input < 0.33) 
  $(".computerChoice").text("rock")
  if (input > 0.34 < 0.66) 
  $(".computerChoice").text("paper")
  if (input > 0.67) 
  $(".computerChoice").text("scissors")
});


