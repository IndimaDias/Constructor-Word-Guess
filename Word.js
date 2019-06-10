/************************************************** */
/*          Developed by Indima Dias                */
/*                  06/06/2019                      */
/************************************************** */

//importing construtor from Letter.js file
var Letter = require('./Letter.js');


// constructor 
var Word = function(newWord){
    // Array storing the random word
    this.wordArray = [];
    
    for(var i=0; i<newWord.length;i++){
        if(newWord[i] === " "){
            this.wordArray.push('\xA0');
        }
        else {
            this.wordArray.push(new Letter(newWord[i]));
        }
    }
}


// toString function that prints the array 
Word.prototype.toString = function(){
    
        var checkArray = this.wordArray;
        var strArray = [];  // new array to store the values to be printed

        for(var i=0; i<checkArray.length; i++){           
            if(checkArray[i] === '\xA0'){
                // if the word contains a space, add space to the array to be printed 
                strArray.push(" "); 
              
            }
            else{ 
                // validate the letter and print the letter or _
                strArray.push(checkArray[i].validateLetter());  
            }
                        
            
        }
        // print the array as a string
        console.log(strArray.join(" ")+"\n\n");
    }
//   ......................................end of method toSting..............................................................

    Word.prototype.chekLetter = function(letter){
        // this method will comapare the letter enterd by the player with each letter in the array
        // it calls the helper function matchLetter for each object in the array
        var matchFound = false;

        this.wordArray.forEach(matchLetter);   
        
        
        function matchLetter(letterObj){
            // helper function for checkLetter method. This is called in the forEach of the array
            if(letterObj.letter === letter){
                // update the status of object of player entered letter is matched
                letterObj.updateGuessed(letter);
                matchFound = true;

            }   
        }
        return matchFound;
    }
    // ...................................end of method checkLetter.........................................
// .............................end of constructor..............................................

module.exports = Word;

// var wordRandom = "test test";
// var newWord = [];

// var wordArray = [ 'b', 'a', 's', 'k', 'e', 't' ];
// var wordArr = new Word('testtest');
// wordArr.toString();

// var args = process.argv;

// var playerChoise = args[2];

// wordArr.chekLetter(playerChoise);

// wordArr.toString();

// wordArr.wordArray - new Word(newWord);

// console.log(wordArr);
    