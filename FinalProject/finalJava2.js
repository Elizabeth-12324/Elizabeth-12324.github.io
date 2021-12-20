let theBody = document.querySelector("body");
let thePara = document.querySelector("p");

var audio1 = new Audio("backgroundMP3");
var audio2 = new Audio("crash");


  var newLink = "page2.html"
// console.log(thePara)

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3=document.getElementById("button3");
const button4=document.getElementById("button4");
const button5=document.getElementById("button5");

button1.addEventListener('click', increment);
button2.addEventListener('click', increment);
button3.addEventListener('click',increment);
button4.addEventListener('click',increment);
button5.addEventListener('click',increment);

let incrementor = 1;

function onButton(){
  button3.style.display="block"
}
function chBackcolor(color) {
   document.body.style.background = color;
}

function onButton2(){
  button4.style.display="block"
}
function onButton3(){
  button5.style.display="block"
}
function increment(){

    console.log("You clicked the button!");
    console.log(incrementor)
    if (incrementor == 1) {
      button1.style.display = "block";
      button2.style.display = "block";
      button4.style.display = "none";

    } else if (incrementor == 2) {
      button2.style.display = "none";
      button1.style.display = "none";
      button4.style.display = "none";
      setTimeout(onButton, 25000);
			//button3.style.display="block";

  }
 else if (incrementor == 3) {
	button2.style.display = "none";
	button1.style.display = "none";
	button3.style.display="none";
  setTimeout(onButton2, 45000)
}
else if (incrementor == 4) {
 chBackcolor("black");
 button4.style.display="none";
  setTimeout(onButton3, 30000)
}
else if (incrementor == 5) {
 location.href = newLink;
}
    incrementor++;

}
