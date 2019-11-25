function Screen(id) {
	// Création d'une propriété :
	this.id = id;
	this.element = document.getElementById(this.id);
	
	/* création d'une methode : la mauvaise version
	this.print = function(data){
		var elem = document.getElementById(this.id);
		elem.innerHTML += data +  "<br />"; // this est obligatiore, c'est pas comme Java
	};
	
	this.clear = function(){
		var elem = document.getElementById(this.id);
		elem.innerHTML = ""; // this est obligatiore pas comme Java
	};
	*/
}
// création d'une methode : bon version
Screen.prototype.print = function(data) {
	this.element.innerHTML += " > " + data +  "<br />";
};

Screen.prototype.clear = function() {
	this.element.innerHTML = "";
};

Screen.prototype.createTable = function() {
	this.table = "<table borger='1' style='border-collapse: collapse; border: solid 1px #20fb00'>";
}

Screen.prototype.addRow = function() {
	var row = "<tr>";
	for (var i = 0; i < arguments.length; i++) {
		row += "<td style='border: solid 1px #20fb00'>" + arguments[i] + "</td>";
	}
	row += "</tr>";
	this.table += row;
}

Screen.prototype.endTable = function() {
	this.element.innerHTML += this.table + "</table>";
}

Screen.prototype.separator = function() {
	this.element.innerHTML += "<hr />";
}
