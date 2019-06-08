///Set parameters for wins and losses
var win = 0;
var loss = 0;
var score = 0;

//Create arrays for random numbers

var computerGuess = Array.apply(null, { length: 121 }).map(Number.call, Number);
computerGuess.splice(0, 19); // removes 0-18 from array

//var computerGuess = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];

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
    $("#number2").attr("data-value", crystalOne);

    $("#number2").on("click", function () {
        crystalOne = $(this).attr("data-value");
        score += parseInt(crystalOne)


        $("#number3").attr("data-value", crystalOne);

        $("#number3").on("click", function () {
            crystalOne = $(this).attr("data-value");
            score += parseInt(crystalOne)


            $("#number4").attr("data-value", crystalOne);

            $("#number4").on("click", function () {
                crystalOne = $(this).attr("data-value");
                score += parseInt(crystalOne)
                // function for #number2

                // function for #number3
            })

            function crystalAdd() {
                //crystalOne + crystalTwo + crystalThree + crystalFour === score
                // score === $.add(crystalOne,crystalTwo,crystalThree,crystalFour)
            }

            crystalAdd()
            //console.log(crystalAdd())

            //win condition: computerGuess === sum of crystals one,two,three,four

            if (computerGuess === crystalAdd()) {
                win++;
            }
            //loss condition: sum of crystals one,two,three,four > computerGuess

            else if (crystalAdd() > computerGuess) {
                loss++;
            }