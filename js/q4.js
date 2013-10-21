var elementID = function(id) {
    return document.getElementById(id);
}


var originalObj = {
    num: 1,
    str: "I am an old string",
    Obj: {
        val1: "Old value"
    },
    Arr: [
        "a string",    
        {  
            val2: "Changing me if you can"       
        }
    ]
};



var ObjHandler = {
	getCopy: function(oldObject) {
		var tempCopy;

		if (oldObject == null) {

			tempCopy = null;

		}else if (typeof(oldObject) == "object" && oldObject.length != undefined){

			// for array
			tempCopy = new Array;

			for ( var i = 0; i < oldObject.length; ++i ){
				tempCopy[tempCopy.length] = ObjHandler.getCopy(oldObject[i]);
			}

		}else if (typeof(oldObject) == "object"){

			// for object
			tempCopy = new Object;

			for ( var i in oldObject ){
				tempCopy[i] = ObjHandler.getCopy(oldObject[i]);
			}

		}else{
			// for plain text
			tempCopy = oldObject;

		}

		return tempCopy;
	}
};

var dCopy = ObjHandler.getCopy(originalObj);

dCopy.Obj.val1 = "New value";
dCopy.Arr[1].val2 = "I am changed";


elementID("result1").innerHTML = originalObj.Obj.val1;
elementID("result2").innerHTML = originalObj.Arr[1].val2;
