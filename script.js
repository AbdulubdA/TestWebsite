var outputToBox = 0;

function produceAnswer(){

var questions = document.getElementsByName("qp");
var currentQuestion = questions[0].value;
for(var i = 0; i < questions.length; i++){

if(questions[i].checked == true){

    currentQuestion = questions[i].value;

    if(currentQuestion == "YFC"){
        currentQuestion = "Because I like doing hard things and coding is allegedly hard" + "\n" + "Because I heard good things from an F&C alumni" + "\n" + "Because I want to ascend";
    }
    
    else if(currentQuestion == "YAB"){
        currentQuestion = "He's meticulous and he knows French (kinda)" + "\n" + 
        "Years competing (and winning) in sports forged commitment to excellence" + "\n" +
        "He wants to ascend";
    }
    
    else if(currentQuestion == "TYW"){
        currentQuestion =  "If you have as much fun viewing these as I did completing them then we're perfect for each other";
        }
        
    document.getElementById("output").innerHTML = currentQuestion;
}
}



                                     
    
}


