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
        currentQuestion =  "If you have as much fun viewing these as I did completing them then we're perfect for each other" ;
        }
        /*"href=https://www.freecodecamp.org/fcc5c365cd4-a634-4737-9abd-7a469b0c75b0> Abdul's excellent freeCodeCamp adventure" 
        "href=https://www.codewars.com/users/09ahmeaa> Abdul's battles in the Codewars"
        "href=""> Abdul's GitHub repository"*/
        
    document.getElementById("output").innerHTML = currentQuestion;
}
}

}

function openTab(tabNo){

var tabcontent, tablinks;

tabcontent = document.getElementsByClassName("tabcontent"); /* grabs all content within tab pages and hides them*/
for (var i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
}

tablinks = document.getElementsByClassName("tablinks");/* replaces active attribute of all buttons with nothing making them inactive*/
for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}

document.getElementById(tabNo).style.display = "block"; /*shows current tab and adds an active class attribute to it to let computer know which one s currently open"
evt.currentTarget.className += " active";
}


