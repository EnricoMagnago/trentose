/* your code should go here */

var list = [];
$(document).ready(function(){
    initThemes();
     $(".opt-choose").on("click", function(){
            var from = $("#inputFrom").val();
            var to = $("#inputTo").val();
            var message = $("#inputMsg").val();
            if(areSetted(from, to, message)){
                showPreview($(this).val(), from, to, message);             
            }else
                alert("Please enter values");
        });
   
});

function initThemes(){
    var template = '<li><img src="?img"><h2>?name</h2><button class="opt-choose" value="?id">Choose</button></li>';
    $(".themes").empty();
     for(var i = 0; i < data.length; i++){
        list[data[i].id] = data[i].img;
        var element = template.replace("?img", data[i].img);
        element = element.replace("?name", data[i].name);
        element = element.replace("?id", data[i].id);
        $(".themes").append(element);
     }      
}

function areSetted(string1, string2, string3){
        var res = true;
        if(string1 == undefined || string2 == undefined || string3 == undefined) 
            res = false;
        else
            if(string1.length == 0 || string2.length == 0 || string3.length == 0)
                res = false;
        else    
            if(string1 == " " || string2 == " " || string3 == " ")
                res = false;
    return res;
}

function showPreview(id, from, to, message){
    $("div.picture > img").attr("src", list[id]);
    $("#cardTo").text(to);
    $("#cardMsg").text(message);
    $("#cardFrom").text(from);
    $("#preview").removeClass("hidden");
}







