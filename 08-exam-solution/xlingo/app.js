/* your code should go here */

var tmpl = ' <li id="ID">' +
           '  <h3>SENTENCE</h3>' +
           ' </li> ';

$(document).ready(function(){

  // current position
  var current = -1;  
  // number of correct answers 
  var correct = 0;   
  
  
  $(".sentences").empty();
  $(".final").hide();
  
  // loading the sentences
  for (var i=0; i< data.length; i++){
    var exercise = tmpl.replace("SENTENCE", data[i].phrase_en)
                       .replace("ID", i);
    $(".sentences").append(exercise);
  }  
  
  // moving to the next 
  var next = function(){
    // we move to the "next" sentence
    current++;
    // we remove the current classs
    $(".sentences li").removeClass("current");          
    // we add it to the new "current" sentence
    $("#" + current).addClass("current");  
    
    // have we reached the last element?
    if (current == data.length){
      $(".practice").hide();
      $(".final").show();  
      
      // we show the final result
      $("#tot").text(data.length);
      $("#tot-good").text(correct);
    }
  };
  
  // user click on continue
  $(".opt-continue").click(function(e){
    var value = $("input").val();
    if (value == data[current].phrase_de){
      correct++;
    } 
    next();    
  });
  
  // move to the first when loading the page.
  next();
  
});







