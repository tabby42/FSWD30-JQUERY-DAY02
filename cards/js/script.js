jQuery(document).ready(function ($) {
	'use strict';
	var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var dragAttempts = 0;

	$( ".draggable" ).draggable ({
		// when not dropped, the item will revert back to its initial position
		revert: "invalid", 
		containment: "document",
	});

	$( ".droppable" ).droppable ({
		//accept only, if numbers match
		accept: function ( d ) { 
	        if( $(this).attr("data-num") === d.text() ){ 
	            return true;
	        }
    	},
		drop: function ( event, ui ) {
            $( ui.draggable[0] ).addClass( "dropped-color" );
            $( ui.draggable ).css( {background: randomColor()} );
            //snap to same position 
            $(ui.draggable).detach().css({top: 0,left: 0}).appendTo(this);
      	},
      	activate: function( event, ui ) {
      		$( ui.draggable ).addClass( "ui-state-highlight" );
      		dragAttempts ++;
      		if (dragAttempts > 50) {
      			$("#score").text( "Game over!" );
      			$( ".droppable" ).droppable( "option", "disabled", true );
      			$( ".draggable" ).draggable( 'disable' );
      		} else {
      			$("#score").text( "You dragged " + dragAttempts + " times." );
      		}
      	},
      	deactivate: function( event, ui ) {
      		$( ui.draggable ).removeClass( "ui-state-highlight" );
      	}
	});

	//shuffle numbers randomly
	function shuffle ( array ) {
		var currentIndex = array.length, 
			temporaryValue, 
			randomIndex;
		// While there remain elements to shuffle...
		while ( 0 !== currentIndex ) {
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

	//random Order for cards
	var randomOrder = shuffle(numbers);
	$.each($(".card.draggable"), function( index, value ) {
		$(this).text(randomOrder[index]);
	});
	var secondRandomOrder = shuffle(numbers);
	$.each($(".card.droppable"), function( index, value ) {
		$(this).attr("data-num", randomOrder[index]);
	});

	function randomColor () {
		var red = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		return "rgb(" + red + ","  + green + ","  + blue + ")";
	}
});


