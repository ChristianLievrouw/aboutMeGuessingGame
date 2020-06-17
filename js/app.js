'use strict';
//first thing to do
console.log('This file is connected.');
var userPoints = 0;

var userName = prompt('What is your name?!');
// console.log(userName);

alert('Hello ' + userName);

// var iWasBorn = prompt('Was I born in Charles City, IA? yes/no').toLowerCase();
// // console.log(iWasBorn);

// if(iWasBorn === 'no'){
//   alert('You\'re right ' + userName);
// } else {
//   alert('Nope! good try though, I was born in Mason City, IA');
// }

// var myChild = prompt('Do I have a daughter? yes/no').toLowerCase();
// // console.log(myChild);

// if(myChild === 'no'){
//   alert('You\'re right! I have a son and his name is Liam');
// } else {
//   alert('Nope! good try though!');
// }

// var myHobby = prompt('Is one of my favorite hobbies drawing? yes/no').toLowerCase();
// // console.log(myHobby);

// if(myHobby === 'yes'){
//   alert('You\'re right ' + userName + ' I love to draw!');
// } else {
//   alert('Drawing actually is one of my favorite hobbies ' + userName );
// }

// var dreamJob = prompt('Is my dream job to be a software developer for Apple? yes/no').toLowerCase();
// // console.log(dreamJob);

// if(dreamJob === 'yes'){
//   alert('You\'re correct ' + userName + '!! I could not think of anywhere I would wanna work more');
// } else {
//   alert('Nope! good try though, I was born in Mason City, IA');
// }

// var homeTown = prompt('Was I raised in Charles City, IA? yes/no').toLowerCase();
// // console.log(homeTown);

// if(homeTown === 'yes'){
//   alert('You\'re right ' + userName + ', I grew up in Charles City, IA. That is about two hours away from Cedar Rapids, IA');
// } else {
//   alert('Nope! good try though, I was raised in Charles City, IA');
// }

// alert('Thank you ' + userName + ' for taking the time to get to know me a little more!');

var userGuess = prompt('Guess a number between 1 and 10?');

// for(var i=0; i<= 3; i++)
// if(userGuess > 3){
//   prompt('To high');
// } else if(userGuess < 3) {
//   prompt('To Low');
// } else {
//   alert('You got it, The correct answer is 3');
// }

while(userGuess !== 3){
  prompt('To high! Try again!');
} if(userGuess < 3); {
  prompt('To Low! Try again!');
} if (userGuess === 3); {
  alert('Correct the answer was 3');
}

// alert('Thanks for playing ' + userName + 'you got '+ userPoints '/ 7 correct!');
