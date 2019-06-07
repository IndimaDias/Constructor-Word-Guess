/************************************************** */
/*          Developed by Indima Dias                */
/*                  06/06/2019                      */
/************************************************** */

//importing construtor from Letter.js file
var Letter = require('./Letter.js');



function Word(wordArray){
    this.wordArray = wordArray;
    // this.
}

var wordRandom = "test test";
var newWord = [];
for(var i =0 ; i<wordRandom.length ; i++){
    
    newWord.push(new Letter(wordRandom[i]));
    
}

var wordArr = new Word (newWord);
// wordArr.wordArray - new Word(newWord);

console.log(wordArr);
    