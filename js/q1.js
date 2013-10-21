var elementID = function(id) {
    return document.getElementById(id);
}


var add = function(a, b) {
    return a + b;
}

var say = function(something) { 
	return something; 
}


function getArray(num) {
    //console.log(num);
    return Array.prototype.slice.apply(num);
}

Function.prototype.curry = function() {

    /*
		1. Initializing variables    
 	    2. find any arguments and parse is to args
     */ 
    
    var args = arguments,
    method = this;

    // return as it is if no argument is parsed
    if (args.length < 1) {
        return method;
    }

    // else
  
    args = getArray(arguments);
    //console.log(args);
    return function() {
        return method.apply(null, args.concat(getArray(arguments)));
    }
}

var addTo = add.curry(2);

var welcome = say.curry('Hi, how are you?');


elementID("add").innerHTML = addTo(5);

elementID("welcome").innerHTML = welcome();
