var outputToBox = 0;

function produceAnswer(){

var questions = document.getElementsByName("qp");
var currentQuestion = questions[0].value;
for(var i = 0; i < questions.length; i++){

if(questions[i].checked == true){

    currentQuestion = questions[i].value;

    if(currentQuestion == "YFC"){
        currentQuestion = "Because\n I\ like\ doing hard things and coding is allegedly hard";
    }
    
    else if(currentQuestion == "YAB"){
        currentQuestion = "He's meticulous and he knows French (kinda)";
    }
    
    else if(currentQuestion == "TYW"){
        currentQuestion =  "If you have as much fun viewing these as I did completing them then we're perfect for each other";
        }
        
    document.getElementById("output").innerHTML = currentQuestion;
}
}



                                     
    
}


