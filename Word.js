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

// wordArr.wordArray - new Word(newWord);

// console.log(wordArr);
    