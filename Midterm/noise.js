
//¿Que me ves? Largo, shoo!
var pasito = 0;
function arrows(order) {
	if (order == ++pasito){
		pasito = order;

		//alert("Ok! " + orden);
	} else {
		//alert("Err!");
		pasito = 0;

	}
	if(pasito == 4){
		location.href ="MidtermPage2.html";
}
