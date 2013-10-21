var elementID = function(id) {
    return document.getElementById(id);
}


var add = function(a, b) {
    return a + b;
}

var say = function(something) { 
	return something; 
}


var addTo = add.bind(undefined, 2);

var welcome = say.bind(undefined, 'Hi, how are you?');


elementID("add").innerHTML = addTo(5);

elementID("welcome").innerHTML = welcome();
