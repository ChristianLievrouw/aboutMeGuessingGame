'use strict';
//first thing to do
console.log('This file is connected.');

// var userPoints = 0;

// var userName = prompt('What is your name?!');
// console.log(userName);

// alert('Hello ' + userName);

// var iWasBorn = prompt('Was I born in Charles City, IA? yes/no').toLowerCase();
// console.log(iWasBorn);

// if(iWasBorn === 'no'){
//   alert('You\'re right ' + userName);
// } else {
//   alert('Nope! good try though, I was born in Mason City, IA');
// }

// var myChild = prompt('Do I have a daughter? yes/no').toLowerCase();
// console.log(myChild);

// if(myChild === 'no'){
//   alert('You\'re right! I have a son and his name is Liam');
// } else {
//   alert('Nope! good try though!');
// }

// var myHobby = prompt('Is one of my favorite hobbies drawing? yes/no').toLowerCase();
// console.log(myHobby);

// if(myHobby === 'yes'){
//   alert('You\'re right ' + userName + ' I love to draw!');
// } else {
//   alert('Drawing actually is one of my favorite hobbies ' + userName );
// }

// var dreamJob = prompt('Is my dream job to be a software developer for Apple? yes/no').toLowerCase();
// console.log(dreamJob);

// if(dreamJob === 'yes'){
//   alert('You\'re correct ' + userName + '!! I could not think of anywhere I would wanna work more');
// } else {
//   alert('Nope! good try though, I was born in Mason City, IA');
// }

// var homeTown = prompt('Was I raised in Charles City, IA? yes/no').toLowerCase();
// console.log(homeTown);

// if(homeTown === 'yes'){
//   alert('You\'re right ' + userName + ', I grew up in Charles City, IA. That is about two hours away from Cedar Rapids, IA');
// } else {
//   alert('Nope! good try though, I was raised in Charles City, IA');
// }

// alert('Thank you ' + userName + ' for taking the time to get to know me a little more!');
// var userChance = 0;
// var myPick = 3;

// while(userChance < 4){
//   var userNumber = prompt('Choose a number between 1 and 10!');
//   userNumber = Number(userNumber);
//   userChance += 1;
//   if(userChance === 4){
//     alert('You are all of of chances');
//   }else if(userNumber === myPick){
//     alert('Way to go!!');
//     userPoints += 1;
//     break;
//   }else if(userNumber < myPick){
//     alert('Too low!!');
//   }else if(userNumber > myPick){
//     alert('Too high');
//   }
// }
var guesses = 0;
var favMovies = ['Black Hawk Down', 'Ready Player One', 'Rubber', 'Platform', 'Zero Dark Thirty'];
console.log(favMovies);


while(guesses < 6){
  
  var correctAnswer = false;
  var movieAnswer = prompt('Guess what five of my favorite movies are?');
  
  for (var i = 0; i < favMovies.length; i++) {
    if (movieAnswer === favMovies[i]) {
      console.log(guesses, movieAnswer, 'correct');
      correctAnswer = true;
      break;
    } else if(movieAnswer !== favMovies[i]){
      console.log(guesses, movieAnswer, 'incorrect');
      continue;
    }
  }
  if(correctAnswer === true) {
    alert('Awesome movie, absolutely love it.');
  } else if(correctAnswer === false) {
    alert('I don\'t think so.');
  }
  guesses += 1;
}

// alert('Thanks for playing ' + userName + 'you got '+ userPoints '/ 7 correct!');
