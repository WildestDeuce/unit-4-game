///Set parameters for wins and losses
var win = 0;
var loss = 0;
var score = 0;

//Create arrays for random numbers

var computerGuess = Array.apply(null, { length: 121 }).map(Number.call, Number);
computerGuess.splice(0, 19); // removes 0-18 from array

console.log(computerGuess)

var crystalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(crystalNumber)

//Create a function to randomly select numbers from computerGuess and crystalNumber
var rand = computerGuess[Math.floor(Math.random() * computerGuess.length)];

console.log(rand)

var crystalOne = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];

var crystalTwo = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];

var crystalThree = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];

var crystalFour = crystalNumber[Math.floor(Math.random() * crystalNumber.length)];


console.log(crystalOne)
console.log(crystalTwo)
console.log(crystalThree)
console.log(crystalFour)

//picks a random number from computerGuess
//random numbers are assigned to crystals one,two,three,four
//to keep score we need to add crystals one,two,three,four
//assign attribute value in jQuery
$(document).ready(function () {
    $("#number1").attr("data-value", crystalOne);

    $("#number1").on("click", function () {
        crystalOne = $(this).attr("data-value");
        score += parseInt(crystalOne);

        console.log(score);
    })
    // function for #number2
    $("#number2").attr("data-value", crystalTwo);

    $("#number2").on("click", function () {
        crystalTwo = $(this).attr("data-value");
        score += parseInt(crystalTwo);

        console.log(score);
    })
    // function for #number3

    $("#number3").attr("data-value", crystalThree);

    $("#number3").on("click", function () {
        crystalThree = $(this).attr("data-value");
        score += parseInt(crystalThree);

        console.log(score);
    })
    //function for #number4

    $("#number4").attr("data-value", crystalFour);

    $("#number4").on("click", function () {
        crystalFour = $(this).attr("data-value");
        score += parseInt(crystalFour)
        console.log(score);
    })

    //win condition: computerGuess === sum of crystals one,two,three,four

    if (rand === score) {
        win++;
        $("#win").html("<h3>" + win + "</h3>");
    }

    //loss condition: sum of crystals one,two,three,four > computerGuess

    //else (computerGuess > score) {
        //lose++;
        //$("#loss").html("<h3>" + loss + "</h3>");
    //}
});