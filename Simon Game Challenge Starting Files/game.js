var gamePattern =[];

var buttonColors = ["red","blue","green","yellow"];


function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

$("#green" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
var audio = new Audio("sounds/" + randomChosenColour + "green.mp3");
audio.play();
}


