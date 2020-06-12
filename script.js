(function () {

	var names = ["John", "Joey","Chandler", "Monica"," Ross", "Rachel", "Pheebe","Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	for (var i = 0; i < names.length; i++){
		var first = names[i].charAt(0).toLowerCase();
		if (first === 'j') {
	    byeSpeaker.speak(names[i]);
	  } 
	    else {
	    helloSpeaker.speak(names[i]);
	  }
	

	}

})();

