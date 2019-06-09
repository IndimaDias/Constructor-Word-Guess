var randomWord = require('random-words');
var inquire = require('inquirer');
var Word = require("./Word");

// Generate a random word using random-words npm 
var newWord = randomWord();
var wordArray = [];
var wordObj ;

function generateArray (randowChiose){  
    
    wordObj = new Word(newWord);
    // wordObj.toString();

}
console.log(newWord);
generateArray(newWord);
console.log(wordObj);
