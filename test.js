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

