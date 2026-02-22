var imgarr=["1.jfif","2.jfif","3.jfif","4.jfif","5 (1).jpg","5 (2).jpg","5 (3).jpg"];

i=0;
var slider= null;
function nextimg(){
    i++;
    if(i>= imgarr.length)
        i = 0;
    var img= document.getElementById("myimg");
    img.src= imgarr[i]; 
}

function previmg(){
    i--;
     if(i<= 0)
        i = imgarr.length-1;
    var img= document.getElementById("myimg");
     img.src= imgarr[i];
}

function startshow(){
   stopshow();
     slider=setInterval("nextimg()",1000);
}

function stopshow(){
     if(slider != null){
        clearInterval(slider);
        slider= null;
     }
    
}

  var win;
  var message = "Welcom to my page, it display the text char by char! thanks ";
  var i = 0;
  var speed = 100;
function showMessage() {
    
  
     win = window.open("", "", "width=300,height=200");
     win.document.write("<p id='text'></p>");
     i=0;
     typeText();
   
}

function typeText(){
        if (i < message.length) {
        win.document.getElementById("text").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeText, speed);
    } else {
        setTimeout(function () {
            win.close();
        }, 1000);
    }
}

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});
document.addEventListener("keydown",function(event){
     alert("you pressed: "+event.key);
})


var lights = document.getElementsByClassName("light");
var index = 0;
var intervalId;

function startGame() {
    intervalId = setInterval(function () {

        for (var i = 0; i < lights.length; i++) {
            lights[i].classList.remove("active");
        }

        lights[index].classList.add("active");

        index++;

        if (index === lights.length) {
            index = 0; 
        }

    }, 2000);
}

function stopGame() {
    clearInterval(intervalId);
}


startGame();