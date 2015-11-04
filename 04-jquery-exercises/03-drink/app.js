var drinkChoicePattern = "<option value=?v>?t</option>"
/* your code should go here */
$(document).ready(function(){
    for(var i=0; i<data.length; i++){
        var drinkChoice = drinkChoicePattern.replace('?v', i);
        drinkChoice = drinkChoice.replace('?t', data[i].name);
        $(".drinkSelect").append(drinkChoice);
    }
    
    $(".drinkSelect").
  // you may want to write things here
  
});