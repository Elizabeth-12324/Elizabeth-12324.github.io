let theBody = document.querySelector("body");
let thePara = document.querySelector("p");

var audio1 = new Audio("backgroundMP3");
var audio2 = new Audio("crash");



// console.log(thePara)

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3=document.getElementById("button3");




button1.addEventListener('click', increment);
button2.addEventListener('click', increment);
button3.addEventListener('click',increment);
let incrementor = 1;
function increment(){

    console.log("You clicked the button!");
    if (incrementor == 1) {
      button1.style.display = "block";
      button2.style.display = "block";

    } else if (incrementor == 2) {
      button2.style.display = "none";
      button1.style.display = "none";
			button3.style.display="block";

  }
 else if (incrementor == 3) {
	button2.style.display = "none";
	button1.style.display = "none";
	button3.style.display="none";

}
    incrementor++;

}
