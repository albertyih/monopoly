window.onload = function(e){

	// Initialization
	$('#team-A').css("left", $("#grid-1").offset().left);

	var distance = $("#grid-2").offset().left;


	alert(distance);

	$( "#right" ).click(function() {
		$( "#team-A" ).animate({ left: distance }, "slow" );
	});
	 
	$( "#left" ).click(function(){
		$( "#team-A" ).animate({ "left": "-=50px" }, "slow" );
	});

}