'use strict';

console.log ('SUP');

let questionOne = prompt('What is your name?'); 

alert(`Bievenidos ${questionOne}! You are going to play a game that is narcissistically about ME!`);

let answerOne =prompt('Here is a underhanded pitch.. Can Marcus speak Spanish?').toLocaleLowerCase();
//consol.log()

if(answerOne === 'yes' || answerOne === 'y'){
  alert('That was an easy one.');
} else if(answerOne === 'no' || 'n') {
  alert(`How did you get that wrong ${questionOne}? I gave you a hint at the begining!`);
}

let answerTwo =prompt('Does Marcus have a place with a view?') .toLowerCase();
//consol.log()

 
if (answerTwo === 'yes' || answerTwo === 'y'){
  alert('you are correct!');
} else if(answerTwo === 'no' || 'n'){
  alert("nono... I do. And I love waking up to it.");
}

let answerThree =prompt('Does Marcus have a dog?').toLowerCase();
//consol.log()

if(answerThree === 'yes' || answerThree === 'y'){
  alert(`I do ${questionOne}, and his name is Ollie. He's the best boy!`);
} else  if(answerThree === 'no' || answerThree === 'n'){
  alert('You have answered poorly. I do Have a Dog.')
}

let answerFour =prompt('Did Marcus get married in Seattle?').toLowerCase();
//consol.log()

if(answerFour === 'yes' || answerFour === 'y'){
  alert('I did not, I got married in NYC');
} else if(answerFour === 'no' || answerFour === 'n'){
  alert(`You're correct ${questionOne}! NYC, Right before COVID hit.`)
}

let answerFive =prompt('Did Marcus enjoy writing all this code?').toLowerCase();
//consol.log()

if(answerFive === 'yes' || answerFive === 'y'){
  alert('You are not wrong.');
} else if(answerFive === 'no' || answerFive === 'n'){
  alert(`${questionOne}, you are not wrong.`);
}

alert(`enjoy my site ${questionOne}.`)


// document.getElementById('showImage').onclick = function () {
//   document.getElementById('Seattle.jpeg').style.visibility = "visible";
// }