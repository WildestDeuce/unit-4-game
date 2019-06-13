///Set parameters for wins and losses
var win = 0;
var loss = 0;
var score = 0;

//Create arrays for random numbers

var computerGuess = Array.apply(null, { length: 121 }).map(Number.call, Number);
computerGuess.splice(0, 19); // removes 0-18 from array

console.log(computerGuess)

var balloonNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(balloonNumber)

//Create a function to randomly select numbers from computerGuess and balloonNumber
var rand = computerGuess[Math.floor(Math.random() * computerGuess.length)];

console.log(rand)

var balloonOne = balloonNumber[Math.floor(Math.random() * balloonNumber.length)];

var balloonTwo = balloonNumber[Math.floor(Math.random() * balloonNumber.length)];

var balloonThree = balloonNumber[Math.floor(Math.random() * balloonNumber.length)];

var balloonFour = balloonNumber[Math.floor(Math.random() * balloonNumber.length)];


console.log(balloonOne)
console.log(balloonTwo)
console.log(balloonThree)
console.log(balloonFour)

$(document).ready(function () {
    $(".balloon-image").attr("data-value", balloonOne);

    $(".balloon-image").on("click", function () {
        balloonOne = $(this).attr("data-value");
        score += parseInt(balloonOne);

        console.log('Score: ' + score);
    })
    // function for #number2
    $(".balloon-image").attr("data-value", balloonTwo);

    $(".balloon-image").on("click", function () {
        balloonTwo = $(this).attr("data-value");
        score += parseInt(balloonTwo);

        console.log('Score: ' + score);
    })
    // function for #number3

    $(".balloon-image").attr("data-value", balloonThree);

    $(".balloon-image").on("click", function () {
        balloonThree = $(this).attr("data-value");
        score += parseInt(balloonThree);

        console.log('Score: ' + score);
    })
    //function for #number4

    $(".balloon-image").attr("data-value", balloonFour);

    $(".balloon-image").on("click", function () {
        balloonFour = $(this).attr("data-value");
        score += parseInt(balloonFour)
        console.log('Score: ' + score);
    })

    $("#score").text(balloonOne + balloonTwo + balloonThree + balloonFour);

    $("#win").text(win);
    $("#loss").text(loss);
    $("#numberToGuess").text(rand);

    for (var i = 0; i < computerGuess.length; i++) {
        imageBalloon = $("<img>");
        imageBalloon.attr("data-value", computerGuess[i]);
        imageBalloon.addClass("balloon-image");
        imageCrystal.attr("src", "assets/images/jadeBalloon.jpg");
        $("#balloons").append(imageBalloon);
    }
    $(".balloon-image").on("click", function () {
        var balloonValue = ($(this).attr("data-value"));
        balloonValue = parseInt(balloonValue);
        score += balloonValue;
        alert("New score: " + score);

        if (score === rand) {
            alert("You win!");
        }

        else if (score >= rand) {
            alert("You lose!");
        }
    })
});