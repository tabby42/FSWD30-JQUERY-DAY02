$(document).ready(function() {
	$(".images-1 img").on("click", function () {
		var name = $(this).attr("alt");
		$("#message").text("You clicked on the " + name + ".");
	});

	$(".image-matrix > div img").on("click", function() {
		var name = $(this).attr("alt");
		if (name === "Santa Claus") {
			$(this).hide();
		}
	});


});