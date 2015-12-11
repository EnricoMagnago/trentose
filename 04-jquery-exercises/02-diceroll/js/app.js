/* Main Dicerool file */

$(document).ready(function(){
    var diceNumber = initGame();
    var dices = Dice.rollDices(diceNumber);
    Dice.addDices(dices);
    $(".btn-roll").click(function(event){
        dices = Dice.rollDices(diceNumber);
        Dice.addDices(dices);
    });        

});

function initGame(){
    $("#actionButton").text("Start");
    $("#actionButton").click(function(){
       var diceNumber = Dice.getDiceNumber();
        if(!isNaN(diceNumber) && diceNumber > 0){
            $(".diceNumberSelection").addClass("hidden");
            $("#actionButton").text("Roll dices");
            $(".dices").removeClass("hidden");
            return diceNumber;
        }else{
            alert("please insert a number greater than 0");
        }
    }); 
}

Dice = {
    getDiceNumber : function(){
        return $("#diceNumber").val();
    },
    roll : function(){
        Math.round(Math.random() * 5 + 1);
    },
    addDices : function(dices){
        console.log("addDices: " + dices.length);
        var template =  '<img src="img/dice-?.png">'
        $(".dices").empty();
        for(var i=0; i<dices.length; i++){
            var diceImage = template.replace('?', dices[i]);
            console.log(diceImage);
            $(".dices").append(diceImage);
        }    
    },
    rollDices : function(diceNumber){
        var dices = [];
        for(var i=0; i<diceNumber; i++){
            dices[i] = Dice.roll();
        }
        return dices;
    }
};