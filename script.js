var outputToBox = 0;

function produceAnswer(){

var questions = document.getElementsByName("qp");
var currentQuestion = questions[0].value;
for(var i = 0; i < questions.length; i++){

if(questions[i].checked == true){

    currentQuestion = questions[i];
    document.getElementById("output").innerHTML = currentQuestion;
}
}

if(currentQuestion == "YFC"){
    outputToBox = 
    <ul>
    <li>Because I like doing hard things and coding is allegedly hard</li>
    <li>Because I heard good things from an F and C alumni</li>
    <li>Because I want to ascend</li>
  </ul>;
}

else if(currentQuestion == "YAB"){
outputToBox = <ul>
<li>He's meticulous and he knows French (kinda)</li>
<li>Years competing (and winning) in sports forged commitment to excellence</li>
<li>He wants to ascend</li>
</ul>;
}

else if(currentQuestion == "TYW"){
    outputToBox =  "If you have as much fun viewing these as I did completing them then we're perfect for each other" <br>
    <ul>
      <li><a href="https://www.freecodecamp.org/fcc5c365cd4-a634-4737-9abd-7a469b0c75b0"> Abdul's excellent freeCodeCamp adventure </a></li>
      <li><a href="https://www.codewars.com/users/09ahmeaa"> Abdul's battles in the Codewars </a> </li>
      <li><a href="https://github.com/AbdulubdA/TestWebsite"> Abdul's GitHub repository </a> </li>
    </ul>;
    }

    
}


