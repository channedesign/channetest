$(document).ready(function() {

	var now = new Date();
	var hours = now.getHours();

	//document.getElementById("test").innerHTML = hours;

	function clock_slide(x,y,z) {
		$(x).stop().animate({ marginTop: ((y*z)-700) + "px"}, 250, "linear");
	}


	for (i=1; i<25; i++) {
		if (i == hours){
			$("#test").append( "<hr />");
		}
		$("#test").append(i + "<br />");
	}

});