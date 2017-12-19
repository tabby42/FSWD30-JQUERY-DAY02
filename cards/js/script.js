$(document).ready(function() {
	$( ".draggable" ).draggable({
		// when not dropped, the item will revert back to its initial position
		revert: "invalid", 
		containment: "document"
	});
	$( ".droppable" ).droppable({
		accept: function( d ) { 
	        if($(this).text()  === d.text()){ 
	            return true;
	        }
    	},
		drop: function( event, ui ) {
        	$( this ).addClass( "ui-state-highlight" );
          
      }
	});
});