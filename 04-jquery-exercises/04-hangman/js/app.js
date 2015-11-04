/* Hangman file */
var imgPattern = "img/hman-?.png"
$(document).ready(function(){       
    Hangman.start();
    $("#secret-word").append(Hangman.maskedWord);
    
    $(".btn-try").click(function(){
        console.log("handler");
        var letter = $("input[id=letter]").val();
        if(letter.length != 1) alert("inserisci un solo carattere");
        else{
            Hangman.processLetter(letter);
            $("#secret-word").text(Hangman.maskedWord);
            if(Hangman.numFails > 6){
                alert("you lost");
            }else{
                if(Hangman.maskedWord.indexOf("-") == -1){
                    alert("you won");                    
                }else{
                    var imgSrc = imgPattern.replace('?', Hangman.numFails);
                    $("#hangmanImg").removeAttr("src").attr("src", imgSrc);
                }
            }
        }
    });
});

var Hangman = {
  
  WORDS  : ["atterrito", "abietto", "atavico", "affrancare"], 
  
  STATUS_WON : 1,
  STATUS_LOST : -1,
  STATUS_CONTINUE : 0,
  
  TRIALS : 6,
  
  /* the secret word */
  secretWord : null,
  
  /* the secret word */
  maskedWord : null,  
  
  /* number of fails */
  numFails : 0,
  
  /* init a new game */
  start : function() {
    
    $.ajax({
        async:false,
        url: 'http://randomword.setgetgo.com/get.php',
        success: function(data) {
            Hangman.secretWord = data;
            } 
        });
      this.maskedWord = "";
      for(var i=0; i < this.secretWord.length; i++){
          this.maskedWord += '-';          
      }
  }, 
  
 /*
  * Verifies whether the word belongs to the secretWord
  * return the new mask for the word
  */
  processLetter : function(letter){
    var index = this.secretWord.indexOf(letter);
    if(index == -1) Hangman.numFails++;
    while(index != -1){
        var prefix = this.maskedWord.substring(0, index);
        var suffix =  this.maskedWord.substring(index+1, this.maskedWord.length);
        this.maskedWord = prefix + letter.charAt(0) + suffix;
        index = this.secretWord.indexOf(letter, index+1);
    }
    return this.maskedWord;
  }, 
  
  /* Verifies the status of the game. 
   * return STATUS_WON if the user won the game
   *        STATUS_LOST if the user lost the game
   *        STATUS_CONTINUE if the game hasn't finished
   */  
  checkStatus : function(){
    return;
  }
  
};