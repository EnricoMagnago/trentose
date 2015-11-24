/* your code should go here */

var tmpl = ' <li id="ID">' +
           '  <h3>SENTENCE</h3>' +
           ' </li> ';

$(document).ready(function(){

  var current = -1;
  var correct = 0;
  
  
  $(".sentences").empty();
  $(".final").hide();
  
  for (var i=0; i< data.length; i++){
    var exercise = tmpl.replace("SENTENCE", data[i].phrase_en)
                       .replace("ID", i);
    $(".sentences").append(exercise);
  }  
  
  var next = function(){
    current++;
    $(".sentences li").removeClass("current");          
    $("#" + current).addClass("current");  
        
    if (current == data.length){
      $(".practice").hide();
      $(".final").show();  
      
      $("#tot").text(data.length);
      $("#tot-good").text(correct);
    }
  };
  
  $(".opt-continue").click(function(e){
    var value = $("input").val();
    if (value == data[current].phrase_de){
      correct++;
    } 
    next();    
  });
  
  next();
  
});







