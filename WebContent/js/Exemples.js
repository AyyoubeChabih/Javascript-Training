/************************************* Concept POO ************************************/
function Exp01() {
	screen.clear();
}

function Exp02(){
	var x1 = 20;
	var x2 = new Number(20);
	var x3 = new Number(20);
	var x4 = "20";
	
	screen.print("x1 = " + x1);
	screen.print("x2 = " + x2);
	screen.print("x4 = " + x4);
	screen.print("x1 == x2 : " + (x1 == x2));
	screen.print("x2 == x3 : " + (x2 == x3));
	screen.print("x1 == x4 : " + (x1 == x4));
	
	screen.print("typeof x1 = " + typeof x1);
	screen.print("typeof x4 = " + typeof x4);
	// comparer type et valeur
	screen.print("x1 == x4 : " + (x1 === x4));
	
	var x5;
	screen.print("typeof x5 = " + typeof x5);
	screen.print("x5 == undefined : " + (x5 == undefined));
}

function Exp03(){
	var x1 = "JavaScript";
	var x2 = new String("JavaScript");
	var x3 = new String("JavaScript");
	
	screen.print("typeof x1 = " + typeof x1); // String
	screen.print("x1 = " + x1);
	screen.print("typeof x2 = " + typeof x2); // Object
	screen.print("x2 = " + x2);
	screen.print("x1 == x2 " + (x1 == x2));
	screen.print("x2 == x3 " + (x2 == x3));
	screen.print("x2 == 'JavaScript' " + (x2 == "JavaScript"));
}

function Exp04(){
	function somme(x, y){
		if(x == undefined) x = 0;
		if(y == undefined) y = 0;
		return x + y;
	}
	
	var s1 = somme(20, 30);
	screen.print("s1 = " + s1);
	
	var s2 = somme(20);
	screen.print("s2 = " + s2);
	
	var s3 = somme(20, 30, 40, 50);
	screen.print("s3 = " + s3);
}

function Exp05(){
	function somme(){
		var n = arguments.length;
		screen.print("Nb. d'argument d'appel : " + n);
		var s = 0;
		for(var i = 0; i < n; i++){
			s += arguments[i];
		}
		return s;
	}
	
	var s1 = somme();
	screen.print("s1 = " + s1);
	
	var s2 = somme(20, 30, 40, 50);
	screen.print("s2 = " + s2);
}

// POO
function Exp06() {
	var p1 = new Object(); // premiere method pour cree object
	p1.name = "p1";
	p1.x = 20;
	p1.y = 30;
	
	p1.print = function(name){
		if(name == undefined) name = this.name;
		screen.print(name + "(" + this.x + "," + this.y + ")");
	};
	
	// Prototypage
	var p2 = Object.create(p1);
	p2.name = "p2";
	p2.print();
	// autonomie
	p1.print();
	
	screen.print("Object.getPrototypeOf(p2) = " + Object.getPrototypeOf(p2).name);
	screen.print("Object.getPrototypeOf(p1) = " + Object.getPrototypeOf(p1));
	screen.print("Object.getPrototypeOf(Object.getPrototypeOf(p1)) = " + Object.getPrototypeOf(Object.getPrototypeOf(p1)));
}

function Exp07() {
	var prototype = {  // deuxieme method pour cree object
		x : 20,
		"y" : 30,
		toString : function() {  // redefinition de toString
			return "Point(" + this.x + "," + this.y + ")";
		},
		print : function() {
			screen.print(this);  // this va se transformer à toString
		}
	};

	var p1 = Object.create(prototype);
	p1.print();
	
	p1.x = 45;
	p1.print();
	
	p1["x"] = 60;
	screen.print(p1);
	
	var prop = "x";
	screen.print(p1[prop]);
	
	p1["background-color"] = "red"; // on ne peut pas faire p1.backgound-color = "red";
	
	screen.createTable();
	for(var prop in p1) {
		screen.addRow(prop, p1[prop]);
	}
	screen.endTable();
}

function Point(x,y) {
	if(x > Point.MAX_X) x = Point.MAX_X;
	if(y > Point.MAX_Y) y = Point.MAX_Y;
	
	this.x = x;
	this.y = y;
}

// pour cree un object global => window.object ou Type.object

Point.MAX_X = 100; // c'est comme les variables statique
Point.MAX_Y = 100;

Point.prototype.print = function() {
	screen.print("Point(" + this.x + "," + this.y + "," + this.z + ")");
};

Point.prototype.toString = function() {
	return "Point(" + this.x + "," + this.y + ")";
};

Point.prototype.z = 0; // z dans le prototype de Point
//Object.prototype.z = 0; : z dans le prototype d'Object

function Exp08() {
	var p1 = new Point(20, 30);
	// autre facon : p1 = Object.create(Point.prototype);
	var p2 = new Point(40, 50);
	
	p1.print();
	p2.print();
	
	Point.prototype.z = 10; // z herite
	p1.print();
	p2.print();
	
	p1.z = 60; // redefinition de z
	p1.print();
	p2.print();
}

function Exp09() {
	var t1 = [20, 30, 40, 50]; // ou var t1; t1 = [20, 30, 40];
	var t2 = new Array(20, 30, 40);
	
	for (var i = 0; i < t1.length; i++) {
		screen.print(" - " + t1[i]);
	}
	
	screen.separator();
	
	for ( var index in t2) { // foreach pour javascript est pour recupere l'index c'est pas les valeurs comme Java
		screen.print(" - " + t2[index]);
	}
}

function Exp10() {
	var t1 = [];
	var t2 = new Array();
	
	t1[0] = 20;
	t1["3"] = 30;
	t1[5] = 50;
	
	t1["name"] = "Tableau"; // je peux faire t1.name mais t1.5 est incorrect
	t1.color = "white";
	
	screen.print("Taille : " + t1.length); // length seul les indexs numerique 1 ou "1"
	screen.separator();
	
	// pour les elements index numerique
	for (var i = 0; i < t1.length; i++) {
		screen.print("t1[" + i + "] = " + t1[i]);
	}
	screen.separator();
	
	// pour tous les elements
	for ( var index in t1) {
		screen.print("t1[" + index + "] = " + t1[index]);
	}
	
	screen.separator();
	var x1;
	screen.print("x1 : " + x1); // existe et undefined
	//screen.print("y1 : " + y1); // n'existe pas

	screen.separator();
	var keys = Object.keys(t1); // tableau de clés => Récupérer tous les indices valables != undefined
	for (var i = 0; i < keys.length; i++) {
		screen.print("t1[" + keys[i] + "] = " + t1[keys[i]]);
	}
	
	screen.separator();
	screen.print("<h2>Itérateur : </h2>");
	var keys2 = t1.keys(); // c'est un itérateur => Récupérer les indices numériques
	for (let element of keys2) {
		screen.print("t1[" + element + "] = " + t1[element]);
	}
}

function Exp11() {
	var t1 = [];
	screen.print("t1.length = " + t1.length);
	t1.push(20);
	t1.push(30);
	t1.push(40);
	t1.push("une chaine");
	t1.push([10, 20, 30]);
	t1.push(function(x, y) {
		return x + y;
	});
	t1.push(2.5);
	t1.push(new Point(10, 20));
	
	delete t1[2]; // supprimer un varialble
	
	var element = t1.pop();
	screen.print("élément supprimé : " + element);
	
	screen.separator();
	for (var i = 0; i < t1.length; i++) {
		screen.print("t1[" + i + "] = " + t1[i]);
	}
}

function is(object, type) {
	return (Object.getPrototypeOf(object) == type.prototype);
}

function Exp12() {
	var t1 = [10, 14, 17];
	screen.print("type de t1 : " + typeof t1);
	screen.print("t1 est un Array : " + (t1 instanceof Array));
	screen.print("t1 est un Array : " + is(t1, Array));
	screen.print("arguments est un Array : " + is(arguments, Array));
}

function Exp13() {
	var p1 = new Point(20, 30);
	p1[0] = 20;
	p1[1] = 30;
	p1[2] = 40;
	p1.length = 3;
	for (var i = 0; i < p1.length; i++) {
		screen.print("p1[" + i + "] = " + p1[i]);
	}
}

/*function Exp14() {
	// A partir ES-6 (EcmaScript - 2015)
	class Point{
		x = 0;
		y = 0;
		
		constructor(x, y) {
			this.x = x;
			this.y = y;
		}
		
		toString() {
			return "Point(" + this.x + "," + this.y + ")";
		}
	}
	
	screen.print(typeof Point);
	var p1 = new Point(20, 30);
	screen.print(p1);
	
	for (var p in Point.prototype) {
		screen.print(p + " : " + Point.prototype[p]);
	}
}*/

function Exp15() {
	//"use strict" // pour donne qu'il est une erruer
	function Point() {
		var _color = "black"; // underscore nomProperty => privé
		Object.defineProperty(Point.prototype, "color",
			{
				get : function() {
					screen.print("lecture par getter");
					return _color;
				},
				set : function(val) {
					screen.print("affectation par setter");
					_color = val;
				},
				// je peux pas faire value : , car je met get 
			}
		);
		
		this.get_Color = function() {
			return _color;
		}
	}
	
	Object.defineProperty(Point.prototype, "x",		
		{
			value : 20,
			configurable : false,
			writable : true,
			enumerable : true
		}
	);
	
	Object.defineProperty(Point.prototype, "y",		
		{
			value : 30,
			configurable : false,
			writable : false,
			enumerable : false // pour la rend invisible
		}
	);	
	
	Object.defineProperty(Point.prototype, "toString",		
			{
				value : function() {
					return "Point(" + this.x + "," + this.y + "," + this.color + ")";
				},
				//enumerable : false cas par defaut
			}
	);
	
	var p1 = new Point();
	p1.x = 40;
	p1.y = 50; // erreur car x de lire seulement
	screen.print(p1);
	
	for ( var p in Point.prototype) {
		screen.print(p + " : " + Point.prototype[p]);
	}
	
	screen.separator();
	p1.color = "red";
	var color = p1.color;
	screen.print(p1);
	screen.print(p1.get_Color());
}


/**************************************************************************************************/

function Exp16() {
	var element = document.getElementById("ext01");
	for ( var a in element.dataset) {
		screen.print(a + " : " + element.dataset[a]);
	}
}

function Exp17() {
	var element = document.getElementById("ext01");
	var attributes = element.attributes;
	for (var i = 0; i < attributes.length; i++) {
		if(attributes.item(i).nodeName.startsWith("mql-")){
			screen.print(attributes.item(i).nodeName + " : " + attributes.item(i).nodeValue);
		}
	}
}

function Exp18() {
	var element = document.getElementById("ext02");
	var children = element.children;
	for (var i = 0; i < children.length; i++) {
		if(children.item(i).nodeName.startsWith("MQL-")){
			screen.print(children.item(i).nodeName + " : " + children.item(i).firstChild.nodeValue);
		}
	}
}