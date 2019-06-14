///Set parameters for wins and losses
var win = 0;
var loss = 0;
var score = 0;
var balloonOne;
var balloonTwo;
var balloonThree;
var balloonFour;

//Create arrays for random numbers

var computerGuess = Array.apply(null, { length: 121 }).map(Number.call, Number);
computerGuess.splice(0, 19); // removes 0-18 from array

console.log(computerGuess)

var balloonNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(balloonNumber)

//Create a variable to randomly select numbers from computerGuess and balloonNumber
var rand = computerGuess[Math.floor(Math.random() * computerGuess.length)];

console.log(rand)

function Reset() {
    score = 0;
    $("#numberToGuess").text(rand);      
    $("#score").text(score);
    balloonOne = balloonNumber[Math.floor(Math.random() * balloonNumber.length)];
    balloonTwo = balloonNumber[Math.floor(Math.random() * balloonNumber.length)];
    balloonThree = balloonNumber[Math.floor(Math.random() * balloonNumber.length)];
    balloonFour = balloonNumber[Math.floor(Math.random() * balloonNumber.length)];
    $("#number1").attr("data-value", balloonOne);
    $("#number2").attr("data-value", balloonTwo);
    $("#number3").attr("data-value", balloonThree);
    $("#number4").attr("data-value", balloonFour);
    console.log(balloonOne)
    console.log(balloonTwo)
    console.log(balloonThree)
    console.log(balloonFour)
}


$(document).ready(function () {

    Reset();
    $(".balloon-image").on("click", function () {
        balloonOne = $(this).attr("data-value");
        score += parseInt(balloonOne);
        $("#score").text(score);
        $("#numberToGuess").text(rand);      
      
        if (score === rand) {
            Reset();
            win++;
            $("#win").text(win);
            $("#numberToGuess").text(rand);
            score=0;
            alert("You win!");
        }
        else if (score >= rand) {
            Reset();
            loss++;
            $("#loss").text(loss);
            $("#numberToGuess").text(rand);
            score=0;
            alert("You lose!");
        }
    });
    console.log('Score: ' + score);
    
    $("#win").text(win);
    $("#loss").text(loss);
    $("#score").text(score);
    $("#numberToGuess").text(rand);
    
    for (var i = 0; i < computerGuess.length; i++) {
        var imageBalloon = $("<img>");
        imageBalloon.attr("data-value", computerGuess[i]);
        imageBalloon.addClass("balloon-image");
        //imageBalloon.attr("src", "assets/images/jadeBalloon.jpg");
        //$("#balloons").append(imageBalloon);
    }
});

// setTimeout(function() {
    // other operatios here
// }, 10000);