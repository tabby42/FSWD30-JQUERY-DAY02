$(document).ready(function() {
	var numbers = [1,2,3,4,5,6,7,8,9,10];

	$( ".draggable" ).draggable({
		// when not dropped, the item will revert back to its initial position
		revert: "invalid", 
		containment: "document"
	});
	$( ".droppable" ).droppable({
		accept: function( d ) { 
	        if( $(this).text()  === d.text() ){ 
	            return true;
	        }
    	},
		drop: function( event, ui ) {
        	$( this ).addClass( "ui-state-highlight" );
            $( ui.draggable[0] ).addClass( "dropped-color" );
      }
	});

	function shuffle(array) {
		var currentIndex = array.length, 
			temporaryValue, 
			randomIndex;
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;
		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		}
	    return array;
	}

	var randomOrder = shuffle(numbers);
});