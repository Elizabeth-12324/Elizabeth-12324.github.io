let theBody = document.querySelector("body");
let thePara = document.querySelector("p");

var audio1 = new Audio("backgroundMP3");
var audio2 = new Audio("crash");
var newLink = "page2.html";

// console.log(thePara)

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3=document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6=document.getElementById("button6");



button1.addEventListener('click', increment);
button2.addEventListener('click', increment);
button3.addEventListener('click',increment);

button4.addEventListener('click', increment);
button5.addEventListener('click', increment);
button6.addEventListener('click',increment);





let incrementor = 1;


function chBackcolor(color) {
   document.body.style.background = color;
}


function backChange() {

  document.body.style.backgroundColor = "#f3f3f3";
  document.body.style.backgroundImage = url("https://i0.wp.com/altizerlaw.com/wp-content/uploads/2016/12/Driver-Ejected-From-Vehicle-in-Fatal-Houston-Crash-After-Car-Lands-Upside-Down.jpg?resize=500%2C334&ssl=1");

}

function increment(){

    console.log("You clicked the button!");
    console.log(incrementor);

     if (incrementor == 1) {
      button1.style.display = "block";
      button2.style.display = "block";

//car accident scene
    } else if (incrementor == 2) {
      button2.style.display = "none";
      button1.style.display = "none";

    button3.style.display="block";
			//button3.style.display="block";

  }
 else if (incrementor == 3) {
   //button3.style.display = "block";
   //button4.style.display = "none";
   //button5.style.display = "none";
   //button6.style.display = "none";
  //setTimeout(onButton, 5000);
  button3.style.display="none";
  button4.style.display="block";
}
else if (incrementor == 4) {
  button4.style.display="none";
  button5.style.display="block";
}
else if (incrementor == 5) {
  button5.style.display="none";
  button6.style.display="block";

}
else if (incrementor == 6) {
  button6.style.display="block";


}
else if (incrementor == 7) {
  button3.style.display = "none";
  button4.style.display = "none";
  button5.style.display = "none";
  button6.style.display = "none";

 //setTimeout(onButton, 5000);
}
    incrementor++;
  }
