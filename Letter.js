/************************************************** */
/*          Developed by Indima Dias                */
/*                  06/06/2019                      */
/************************************************** */


// constructor to create letter objects.
function Letter(letter) {
    this.letter = letter;
    this.letterGuessed = false; //This letter has been guessed by user or not
        
}

// constructor method validateLetter
Letter.prototype.validateLetter = function(){
    var returnChar = "";

    if(!this.letterGuessed){
        returnChar = "_";
    }
    else{
        returnChar = this.letter;
    }

    return returnChar;
} // end method validateLetter

// contructor method updateGuessed 
Letter.prototype.updateGuessed = function(userChoise){
    // this method will update the propoerty letterGuessed
    if(userChoise === this.letter){
        this.letterGuessed = true;
    }
    

} //end updateGuessed


module.exports = Letter;

// var args = process.argv;

// var wordRandom = args.slice(2,args.length).join(" ");

// console.log(wordRandom);
// wordRandom = "Phone case";

