/************************************************** */
/*          Developed by Indima Dias                */
/*                  06/06/2019                      */
/************************************************** */

//importing construtor from Letter.js file
var Letter = require('./Letter.js');



function Word(wordArray){
    this.wordArray = wordArray;
    // this.
    this.toString = function(){
        var checkArray = this.wordArray;
        var strArray = [];

        for(var i=0; i<checkArray.length; i++){
            if(checkArray[i] === '\xA0'){
                strArray.push(" "); 
              
            }
            else{ 
                strArray.push(checkArray[i].validateLetter());  
            }
                         

        }
        console.log(strArray.join(" "));
    }

    this.chekLetter = function(letter){

        this.wordArray.forEach(matchLetter);
            
            
        
        function matchLetter(letterObj){
            if(letterObj.letter === letter){
                letterObj.updateGuessed(letter);
            }   
        }
    }

    function matchLetter(letterObj){

    }
}

var wordRandom = "test test";
var newWord = [];
for(var i =0 ; i<wordRandom.length ; i++){
    if(wordRandom[i] === " "){
        newWord.push('\xA0');
    }
    else {
        newWord.push(new Letter(wordRandom[i]));
    }    
    
}

var wordArr = new Word (newWord);
wordArr.toString();

var args = process.argv;

var playerChoise = args[2];

wordArr.chekLetter(playerChoise);

wordArr.toString();

// wordArr.wordArray - new Word(newWord);

// console.log(wordArr);
    