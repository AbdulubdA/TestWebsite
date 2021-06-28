var outputToBox = 0;

function produceAnswer(){

    // Create anchor element
var a = document.createElement('a');
// Create the text node for anchor element.
var link1 = document.createTextNode("Abdul's excellent freeCodeCamp adventure");
// Append the text node to anchor element.
output.appendChild(link1);
// Set the title.
a.title = "Abdul's excellent freeCodeCamp adventure";
// Set the href property.
a.href = "https://www.freecodecamp.org/fcc5c365cd4-a634-4737-9abd-7a469b0c75b0";

//var b = document.createElement('b');
//var link2 = document.createTextNode("Abdul's battles in the Codewars");
//output.appendChild(link2);
//b.title = "Abdul's battles in the Codewars";
//b.href = "https://www.codewars.com/users/09ahmeaa";
//document.output.appendChild(b);

//var c = document.createElement('c');
//var link3 = document.createTextNode("Abdul's GitHub repository");
//output.appendChild(link3);
//c.title = "Abdul's GitHub repository";
//c.href = "https://github.com/AbdulubdA/TestWebsite";
//document.output.appendChild(c);



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
        currentQuestion = // Append the anchor element to the body.
        document.output.appendChild(a);
        
        }
        
    document.getElementById("output").innerHTML = currentQuestion;
}
}

}

function openTab(evt, tabNo){

var tabcontent, tablinks;

tabcontent = document.getElementsByClassName("tabcontent"); /* grabs all content within tab pages and hides them*/
for (var i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
}

tablinks = document.getElementsByClassName("tablinks");/* replaces active attribute of all buttons with nothing making them inactive*/
for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}

document.getElementById(tabNo).style.display = "block"; /*shows current tab and adds an active class attribute to it to let computer know which one s currently open"*/
evt.currentTarget.className += " active";
}

var slideIndex = 1;
showSlides(slideIndex);

/* next and previous controls*/
function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

if (n > slides.length){slideIndex = 1} /* makes clicking next arrow cyclical*/
if (n < 1){slideIndex = slides.length}

for(i = 0; i < slides.length; i++){
slides[i].style.display = "none"; /* makes every slide inactive at first*/
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}

slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}

function toggleDark(){

var element = document.body;
element.classList.toggle("dark-mode");

}

var offset = 0;

setInterval(printClock, 1000);


function printSelection(){
var firstVariable = document.getElementsByName("timezone");
var secondVariable = "bst";
for(let i = 0; i < firstVariable.length; i++){
if(firstVariable[i].checked == true){

secondVariable = firstVariable[i].value;

}
}

if(secondVariable === "est"){offset = -5;}
else if(secondVariable === "cst"){offset = -6;}
else if(secondVariable === "mst"){offset = -7;}
else if(secondVariable === "pst"){offset = -8;}
else if(secondVariable === "ast"){offset = -4;}
else if(secondVariable === "hast"){offset = -11;}
else if(secondVariable === "bst"){offset = 0;}
else if(secondVariable === "abz"){offset = "PRIMETIME";}

}

function printClock(){

const day = new Date();
const secondsRatio = day.getSeconds()/60;
const minutesRatio = (day.getMinutes() + secondsRatio) / 60
const hoursRatio = (day.getHours() + minutesRatio + offset) / 12;

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

setRotation(secondHand, secondsRatio)
setRotation(minuteHand, minutesRatio)
setRotation(hourHand, hoursRatio)

}

function setRotation(element, rotationRatio){

    element.style.setProperty(`--rotation`, rotationRatio * 360);

 /* digital clock stuff below*/

        var dateVariable = new Date();
        var hours = dateVariable.getHours() + offset;
        var minutes = dateVariable.getMinutes();
        var seconds = dateVariable.getSeconds();
        var session = "AM";
        
        if(hours >= 12){session = "PM";}
        else{session = "AM";}
        
        if(hours < 10){hours = "0" + hours;}
        if(minutes < 10){minutes = "0" + minutes;}
        if(seconds < 10){seconds = "0" + seconds;}

        var currentTime = hours + ":" + minutes + ":" + seconds + " " + session;

        if(offset === "PRIMETIME"){currentTime = offset;}
        
        setTimeout(printClock, 1000);
        
        document.getElementById("digital clock").innerHTML = currentTime;
        
        
}

printClock();

function setDigital(){
    
    var digital = document.getElementById("digital clock");
    var analogue = document.getElementById("clock");

    analogue.style.display = "none";
    digital.style.display = "flex";

}

function setAnalogue(){

    var digital = document.getElementById("digital clock");
    var analogue = document.getElementById("clock");

    analogue.style.display = "flex";
    digital.style.display = "none";

}

setAnalogue()