// Purpose: determine the bigger number
// Signature: greaterNum(num1, num2) will accept two numbers and will return the bigger number
// Examples:
//      greaterNum(2, 5) --> 5
//      greaterNum(100, 42) --> 100
//      greaterNum(50, 50) --> You broke it!

function greaterNum(num1, num2) {
  if (num1 > num2){
    alert (num1)
  } else if (num2 > num1) {
    alert (num2)
  } else {
    alert ("You broke it!")
  }
}

// Purpose: Translate the phrase, "Hello, World!" in at least three other languages
// Signature: helloWorld() takes a language code and returns "Hello, World!" in that language.
// Examples:
//      helloWorld(es) --> "Hola, mundo!"
//      helloWorld(de) --> "Gutentag, Welt!"
//      helloWorld (ca) --> "Hola, mon!"
// Why it originally did not work: our variables were assigned to strings and the if statement requires a boolean
var es = "Spanish"
var de = "German"
var ca = "Catalan"

function helloWorld(lang){
  if (lang === es){
    alert ("Hola, mundo!")
  } else if (lang === de) {
    alert ("Gutentag, Welt!")
  } else if (lang === ca) {
    alert ("Hola, mon!")
  } else {
    alert ("Hello, world!")
  }
}

// Purpose: Convert a number score into a letter score
// Signature: assignGrade takes an integer and translates it into a single character
// Examples:
//       assignGrade(95) --> A
//       assignGrade(85) --> B
//       assignGrade(75) --> C

function assignGrade(numScore){
  if (numScore >= 90) {
    alert("A")
  } else if (numScore >= 80) {
    alert("B")
  } else if (numScore >= 70) {
    alert("C")
  } else {
    alert("you fail :(")
  }
}


// Purpose: Convert a singular noun and convert it to a plural noun, according to the number specified
// Signature: pluralize() tankes a noun and a number and returns the number and pluralizes the noun
// Examples:
//      pluralize(turtle, 5)  --> 5 turtles
//      pluralize(dog, 7)  --> 7 dogs
//      pluralize(rabbit, 500,000)  --> 500,000 rabbits

function pluralize(animal, num) {
  if (animal==="goose") {
    alert (num + " geese")
  } else if (animal.charAt(animal.length - 1 ) === "s" && animal.charAt(animal.length - 2 )==="u") {
    var animalNew = animal.substring(0, animal.length - 2);
    alert (num + " " + animalNew + "i")}
    else {
      alert (num + " " + animal + "s")
    }
  }

  // Purpose: Assign odd/even to each number between 0 and 15.
  // Signature: oddOrEven() takes a single number and alerts user if number is even or odd
  // Examples:
  //      oddOrEven() NA

  var num = 0

  function oddOrEven(){
    while(num<=15){
      if (num % 2 === 0){
        console.log (num + " is even!")}
        else {
          console.log (num + " is odd!")
        }
        num = num + 1
      }
    }

    // Purpose: Print fizz for multiples of 3, buzz for multiples of 5, fizzbuzz for multiples of both, and the integer for all numbers between 1 and 100
    // Signature: fizzBuzz()
    // Examples:
    //      NA

    var num = 1

    while (num <= 100){
      if ((num % 3 === 0) && (num % 5 === 0)) {
        console.log(num + " FizzBuzz")
      } else if (num % 3 === 0){
        console.log(num + " Fizz")
      } else if (num % 5 === 0){
        console.log(num + " Buzz")
      } else {
        console.log(num)
      }
      num++
    }

    // Purpose: Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses. If the user's guess is too high or too low, the computer notifies them. Otherwise, if the user guesses the secret number correctly, the computer displays a winning message and the game is over. Hint: See Math.random()
    // Signature:
    // Examples:
    //





    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function guessingGame() {
      var name = prompt("What's your name, playa?")
      var guess = prompt("Pick a number, any number!");
      var secret = getRandomIntInclusive(1, 100);
      var count = 1;



      while (parseInt(guess) !== secret && count <=7){

        while (isNaN(parseInt(guess))) {
          var guess = prompt ("Numbers only fool!")
        }

        if ((guess > secret) && count < 7){
          count++;
          var guess = prompt ("TOO HIGH SUCKA. Guess again")
        } else if ((guess < secret) && count < 7){
          count++;
          var guess = prompt ("TOO LOW SUCKA. Guess again")
        } else {
          count++;
          alert("Lozer");
        }

      }
      if ((guess == secret) && count < 7){
        alert ("Congrats! You got it, " + name)
      }
    }

    function getName(){
      var name = prompt("What's your name, playa?")
    }

    function combine () {
      getName();
      guessingGame();
    }
