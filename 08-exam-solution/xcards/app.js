/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    word_en : "Apple",  // word in english
 *    word_de : "Apfel"   // word in german
 *  }
 */ 

var tmpl = ' <li id="ID">' +
           '  <h3>WORD</h3>' +
           '  <h3 class="solution">SOLUTION</h3>'+
           ' </li> ';

$(document).ready(function(){

  var current = -1
  var correct = 0;
  
  $(".cards").empty();
  $(".final").hide();
  
  for (var i=0; i< data.length; i++){
    var card = tmpl.replace("WORD", data[i].word_en)
                   .replace("SOLUTION", data[i].word_de)
                   .replace("ID", i);
    $(".cards").append(card);
  }
  
  
  var next = function(){
    current++
    $(".cards li").removeClass("current");
    $("#" + current).addClass("current");
    
    $("#" + current).find(".solution").hide();
    $(".options").hide();
    
    if (current == data.length){
      $(".final").show();
      
      $("#tot").text(data.length);
      $("#tot-good").text(correct);
    }

  };
  
  var flip = function(){
    $("#" + current).find("h3").hide();
    $("#" + current).find(".solution").show();    
    $(".options").show();
  };
  
  
  $(".jumbotron").on("click", "li", function(){
      flip();
  });
  
  $(".opt-correct").click(function(){
      next();
      correct++;
  });
  
  $(".opt-incorrect").click(function(){
      next();
  });
  
  next();
  
});







