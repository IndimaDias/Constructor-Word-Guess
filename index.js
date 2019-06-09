var randomWord = require('random-words');
var inquire = require('inquirer');
var Word = require("./Word");

// Generate a random word using random-words npm 
var newWord = "";
var wordObj ;
var totalGuesses = 10;

// ***********************************function to start the game***************************************
function start(){
    inquire.prompt({
        type : 'list',
        name : 'userChoise',
        message : 'Do you want to play?',
        choices : ["YES","NO"]
    }).then(answers =>{
       if(answers.userChoise === 'YES'){
           generateWord();
           promptForLetter();
       }
    })
}// end start ******************************************************************************************

// ********************************function to generate a random word **********************************

function generateWord (){  
    // generate new word
    newWord = randomWord();
    console.log(newWord);
    // make a word object with the generated word
    wordObj = new Word(newWord);
    // print word 
    wordObj.toString();

}// end generateWord************************************************************************************

// *******************************function prompt to enter a letter ************************************
function promptForLetter(){
    inquire.prompt({
        type : 'input',
        name : 'letterGuessed',
        message : 'You have ' + totalGuesses + ' remaining. Enter a Letter'
    }).then(answers =>{
       wordObj.chekLetter(answers.letterGuessed);
       wordObj.toString();
});
}

console.log("****************Play Guess the word**********************\n\n");


start();
// generateArray(newWord);
// console.log(wordObj);
