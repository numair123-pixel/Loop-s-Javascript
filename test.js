//Object Constructor Functions 
//Object Constructor Functions are used to create multiple objects

function Home(rooms, apartment, color, swimingPool, state, city) {
    this.rooms = rooms;
    this.apartment = apartment;
    this.color = color;
    this.swimmingPool = swimmingPool
    this.state = state;
    this.city = city;
 }
 var home1 = new Home(3, false, 'blue' true,'J&K' "Srinagar" )
 var home2 = new Home(5, false, 'red'false,'Delhi' "Noida")

//array mini app

// assign and array with four string elements to the variable `randomBodyParts`
var randomBodyParts = ['Face', 'Nose', 'Hair', 'Chin'];
// assign and array with four string elements to the variable `randomAdjectives`
var randomAdjectives = ['Smelly', 'Boring', 'Stupid', 'Lazy'];
// assign and array with five string elements to the variable `randomWords`
var randomWords = ['Fly', 'Marmot', 'Stick', 'Dog', 'Rat'];
// choose a random item from `randomBodyParts` array and assign to `randomBodyPart`
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];
// choose a random item from `randomAdjectives` array and assign to `randomAdjective`
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];
// choose a random item from `randomWords` array and assign to `randomWord`
var randomWord = randomWords[Math.floor(Math.random() * 5)];
console.log("Your " + randomBodyPart + " is like a "
+ randomAdjective + " " + randomWord + "!!!");

// functions mini app

// create function getUserChoice with a parameter of `userInput`
function getUserChoice(userInput) {
    // turn future `userInput` to lower case
    userInput = userInput.toLowerCase();
    // if there is a match return `userInput`
    if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {
        return userInput;
      // if no match prompt user for valid entry
    } else {
        return 'Please enter valid option';
    }
}

// create a function that will provide a random computer choice for each round
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'bear';
    } else if (randomNumber === 1) {
        return 'human';
    } else {
        return 'gun';
    }
}
// create a function `determineWinner` and pass in parameters
// `userChoice` and `computerChoice`
function determineWinner(userChoice, computerChoice) {
    // if there is a tie
    if (userChoice === computerChoice) {
        return 'It is a tie';
    }
    // if user selects `'human'`
    if (userChoice === 'human') {
        // if computer selects `'bear'`
        if (computerChoice === 'bear') {
            return 'You have been mauled by a bear';
        } else {
            return 'You have disarmed a gun';
        }
    }
    // if user selects `'bear'`
    if (userChoice === 'bear') {
        // if computer selects `'gun'`
        if (computerChoice === 'gun') {
            return 'You have been shot by a gun';
        } else {
            return 'You have mauled a human';
        }
    }
    // if user selects `'gun'`
    if (userChoice === 'gun') {
        // if computer selectsion `'human'`
        if (computerChoice === 'human') {
            return 'Your gun has been disarmed';
        } else {
            return 'You have shot a bear';
        }
    }
}


function playGame() {
    // prompt user to make choice
    var promptUsesChoice = prompt("Please choose bear, human or gun");
    // format user choice to lower case and check for valid word
    var userChoice = getUserChoice(promptUsesChoice);
    // call `getComputerChoice()` and assign to variable `computerChoice` 
    var computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(userChoice);
    // pass `userChoice` and `computerChoice` to the function `determineWinner`
    // and log to the console
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();

// Loops mini app

var userName = prompt('What is your name');

if (userName) {
  console.log('Hello, ' + userName + '.');
}
 console.log('Hello!');

var userQuestion = prompt('Please provide a questions');
var randomNumber = Math.floor(Math.random() * 7);
console.log(randomNumber);
var eightBall = '';

switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Dont count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log('User question: ' + userQuestion); 
console.log('The eight ball answer: ' + eightBall);



