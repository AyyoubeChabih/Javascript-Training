var counter = 0;

function afficher() {
	alert(counter);
	window.alert(window.counter);
	counter++;
}

window.counter++;

afficher();

var f = afficher;