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
    
    else if(currentQuestion == "TYW"){
        currentQuestion =  "If you have as much fun viewing these as I did completing them then we're perfect for each other" + "<br>" +
        "<ul><li><a href=https://www.freecodecamp.org/fcc5c365cd4-a634-4737-9abd-7a469b0c75b0> Abdul's excellent freeCodeCamp adventure </a></li>" 
        "<li><a href=https://www.codewars.com/users/09ahmeaa> Abdul's battles in the Codewars </a> </li>"
        "<li><a href=""> Abdul's GitHub repository </a> </li> </ul>";
        }
        
    document.getElementById("output").innerHTML = currentQuestion;
}
}



                                     
    
}


