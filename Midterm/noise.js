//¿Que me ves? Largo, shoo!
var pasito = 0;
var nomeveas = "MidtermPage2.html"
//var bipbip = new Audio('images/hmm.mp3');
var bipbip = new Audio('chime.mp3');
//var ufail = new Audio('images/err.mp3');
var ufail=new Audio('error.mp3');
function puzzle(orden) {
	if (orden == ++puzzle){
		puzzle = orden;
		bipbip.play();
		//alert("Ok! " + orden);
	} else {
		//alert("Err!");
		puzzle = 0;
		ufail.play();
	}
	if(puzzle ==3){
		location.href = nomeveas;
	}
}

function fadeIn() {
	$('.fade-in').each(function() {
			var top_of_element = $(this).offset().top;
			var bottom_of_element = $(this).offset().top + $(this).outerHeight();
			var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
			var top_of_screen = $(window).scrollTop();

			if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
					$(this).addClass('is-visible');
			}
	});
}

$(function() {
		fadeIn();
});

$(window).scroll(function() {
		fadeIn();
});
