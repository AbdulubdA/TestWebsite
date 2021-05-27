var outputToBox = 0;

function produceAnswer(){

var questions = document.getElementsByName("qp");
var currentQuestion = questions[0].value;
for(var i = 0; i < questions.length; i++){

if(questions[i].checked == true){

    currentQuestion = questions[i].value;

    if(currentQuestion == "YFC"){
        outputToBox = "Because I like doing hard things and coding is allegedly hard\n
        Because I heard good things from an F and C alumni\n
        Because I want to ascend";
    }
    
    else if(currentQuestion == "YAB"){
    outputToBox = "He's meticulous and he knows French (kinda)\n
    Years competing (and winning) in sports forged commitment to excellence\n
    He wants to ascend";
    }
    
    else if(currentQuestion == "TYW"){
        outputToBox =  "If you have as much fun viewing these as I did completing them then we're perfect for each other\n
        <a href=\"https://www.freecodecamp.org/fcc5c365cd4-a634-4737-9abd-7a469b0c75b0> Abdul's excellent freeCodeCamp adventure\n
        <a href=https://www.codewars.com/users/09ahmeaa> Abdul's battles in the Codewars\n
        <a href=https://github.com/AbdulubdA/TestWebsite> Abdul's GitHub repository";
        }
        
    document.getElementById("output").innerHTML = outputToBox;
}
}



                                     
    
}


