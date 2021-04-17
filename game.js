var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function getRandomIntInclusive(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(".btn").on("click", function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
});

function nextSequence(){
  var randomNumber = getRandomIntInclusive(0, 3);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  
  $("#" + randomChosenColour).fadeOut(1000).fadeIn(1000).fadeOut(1000).fadeIn(1000);

  // $("#" + randomChosenColour).on("click", function() {
  var sound = new Audio("sounds/" + randomChosenColour + ".mp3");
  sound.play();

  // });
}

function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}