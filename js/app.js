'use strict';

console.log ('SUP');

// questionOne =prompt('Hi there! What is your name?');

// alert(`Howdy ${questionOne}, we are going to play a game!`);
let correctA = 0;


function firstQuestion(){
  let answerOne =prompt('Here is a underhanded pitch.. Can Marcus speak Spanish?').toLocaleLowerCase();
  //consol.log()

  if(answerOne === 'yes' || answerOne === 'y'){
    alert('That was an easy one.');
    correctA++;
  } else if(answerOne === 'no' || 'n') {
    alert(`How did you get that wrong ? I gave you a hint at the begining!`);
  }
}

function secondQuestion(){
  let answerTwo =prompt('Does Marcus have a place with a view?') .toLowerCase();
  //consol.log()

  
  if (answerTwo === 'yes' || answerTwo === 'y'){
    alert('you are correct!');
    correctA++
  } else if(answerTwo === 'no' || 'n'){
    alert("nono... I do. And I love waking up to it.");
  }
}

function thirdQuestion(){
  let answerThree =prompt('Does Marcus have a dog?').toLowerCase();
  //consol.log()

  if(answerThree === 'yes' || answerThree === 'y'){
    alert(`I do, and his name is Ollie. He's the best boy!`);
    correctA++;
  } else  if(answerThree === 'no' || answerThree === 'n'){
    alert('You have answered poorly. I do Have a Dog.')
  }
}

function fourthQuestion(){
  let answerFour =prompt('Did Marcus get married in Seattle?').toLowerCase();
  //consol.log()

  if(answerFour === 'yes' || answerFour === 'y'){
    alert('I did not, I got married in NYC');
    correctA++
  } else if(answerFour === 'no' || answerFour === 'n'){
    alert(`You're correct  NYC, Right before COVID hit.`)
  }
}

function fifthQuestion(){
  let answerFive =prompt('Did Marcus enjoy writing all this code?').toLowerCase();
  //consol.log()

  if(answerFive === 'yes' || answerFive === 'y'){
    alert('You are not wrong.');
    correctA++
  } else if(answerFive === 'no' || answerFive === 'n'){
    alert(`you are not wrong.`);
  }
}


// Start FOR LOOP
// Question 6
// user has 4 attempts.

function sixthQuestion(){
  for(let i = 0; i< 4; i++){
    let correctAnswer = 10;
    let userresponse =prompt("What number an I thinking of between 1-10?");
    if (userresponse == 10){
      alert('yay!');
      correctA++
      break;
      // Alert if too low
    } else if(userresponse< 10){
      alert('You gotta go higher!')
      // Alert if too high.
    } else if(userresponse> 10){
      alert ('The number you selected is TOO DAMN HIGH!')
    }
  } // after all attemts have been exhausted, tell user the correct answer. 
}

// Start ARRAY
function seventhQuestion(){
  let correctNPs = ['zion', 'yellowstone', 'grand Teton', 'yosemite', 'great sand dunes', 'glacier', 'arches', 'bryce canyon', 'grand canyon', 'A lot more, I just dont want to keep typing.'];
  for(let i = 0; i < 6; i++){
    let NPGuess =prompt('Can you guess just one of the many National Parks I have been to? You have 6 trys.').toLowerCase();
    for(let j = 0; j < correctNPs.length; j++){
      if(NPGuess === correctNPs[j]){
        alert('You are RIGHT! Although the list is quite long.');
        correctA++
        i = 6;
        break;
      }
    }
  }
  alert(`Here were my possible answers - ${correctNPs}! There is a lot, trust me. `)
  alert(`you got ${correctA} out of right!`)
}

//alert(`enjoy my site ${questionOne}.`)

// firstQuestion();
// secondQuestion();
// thirdQuestion();
// fourthQuestion();
// fifthQuestion();
// sixthQuestion();
// seventhQuestion();


