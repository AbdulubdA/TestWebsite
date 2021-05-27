var outputToBox = 0;

function produceAnswer(){

var questions = document.getElementsByName("qp");
var currentQuestion = questions[0].value;
for(var i = 0; i < questions.length; i++){

if(questions[i].checked == true){

    currentQuestion = questions[i].value;

    if(currentQuestion == "YFC"){
        currentQuestion = "Because I like doing hard things and coding is allegedly hard" + "<br>" + 
        "Because I heard good things from an F&C alumni" + "<br>" + 
        "Because I want to ascend";
    }
    
    else if(currentQuestion == "YAB"){
        currentQuestion = "He's meticulous and he knows French (kinda)" + "<br>" + 
        "Years competing (and winning) in sports forged commitment to excellence" + "<br>" +
        "He wants to ascend";
    }
    
    document.getElementById("output").innerHTML = currentQuestion;
}
}



                                     
    
}


