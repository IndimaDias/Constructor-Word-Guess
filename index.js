 


var randomWord = require('random-words');
var inquire = require('inquirer');
var Word = require("./Word");
const chalk = require('chalk');
const gradient = require('gradient-string');

var figlet = require('figlet');


// Generate a random word using random-words npm 
var newWord = "";
var wordObj ;
var totalGuesses = 10;
var wordLength = 0;


// ***********************************function to start the game***************************************
function start(){
//   function that starts the game
    totalGuesses = 10;
    inquire.prompt({
        type : 'list',
        name : 'Choose',
        message : changeToChalk('Do you want to play?','M'),
        choices : ["YES","NO"]
    }).then(answers =>{
       if(answers.Choose === 'YES'){
           generateWord();
           promptForLetter();
       }
    })
}// end start ******************************************************************************************

// ********************************function to generate a random word **********************************

function generateWord (){  
    // generate new word
    newWord = randomWord();
  
    // make a word object with the generated word
    wordObj = new Word(newWord);
    wordLength = newWord.length;
    // print word 
    wordObj.toString();

}// end generateWord************************************************************************************

// ****************************fucntion continuePormpt***************************************************
// This function checks of player is allowed to continue guessing 
function continuePrompt(){
    if(totalGuesses> 0 ){
        return true;
    }
    else{
        return false;
    }
}
// end continuePrompt 

// *******************************function prompt to enter a letter ************************************
function promptForLetter(){
    inquire.prompt({
        type : 'input',
        name : 'Guess',
        message : changeToChalk('You have ' + totalGuesses + ' remaining. Enter a Letter\n','M')
    }).then(answers =>{
       var matchFound = wordObj.chekLetter(answers.Guess);
      
       if (!matchFound){
        //    player guessed an incorrect letter
              changeToChalk("\nIncorrect guess\n",'I');
        //    reduce the no of allowed turns
           totalGuesses--; 
        //    if allowed to continue playing 
           if(continuePrompt()){
            //    call function recursively
            promptForLetter(); 
            wordObj.toString();
           }
           else{
               toFiglet(newWord);
               changeToChalk("Game end. You Loose ....\n\n",'W');
               
               start();
           }
           
       }
       else {          
           if (wordObj.allLettersGuessed()){
            //    if the word has been guessed within the allowed turns 
              
            //   change the word to Figlet style
              toFiglet(newWord);
            //   display message in different color
              
              changeToChalk("\nYou win!!!!!!!!!!!!!!!!\n\n",'W');
              console.log("   ");

              start();
            }

           else{            
                if(continuePrompt()){
                 
                  wordObj.toString();
                  promptForLetter();
                }
            
       }

       }
      
});
} // end function promptForLetter

// **************************************function change to gradient***************************************
function gradiantBigWord(wordToChange){
    // change the word to gradiant style
    console.log( gradient.rainbow.multiline(wordToChange));
}
// 

// *************************************function toFiglet**************************************************
function toFiglet(wordToFiglet){
    // change the word to Figlet fonts
    figlet(wordToFiglet, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        gradiantBigWord(data);
    });
}// End toFiglet

// **************************************function changeToChalk*******************************************

function changeToChalk(wordToChalk, sign){
    // change word according to message type. "I" - incorrect , "M" - Message , "W" - Win or end game
    var color = "";
    
    switch (sign) {
        case 'I':
            color = 'red';
            break;
        
        case 'M':
            color = 'blue';
            break;   
        
        case 'W':
            color = 'magenta';
            break;
        
    }
    console.log(chalk.keyword(color)(wordToChalk));
}


// console.log("****************Play Guess the word**********************\n\n");
changeToChalk("****************Welcome to - Guess the word**********************\n\n"+
              "Play by guessing the word on the screen. No of undersores will show how many letters"+
              " to be guessed\n" +
              "Maximum incorrect guesses allowed is 10\n\n","W");



start();

