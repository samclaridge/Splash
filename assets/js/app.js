$(document).ready(function(){
  
  // Write your Javascript!

	$.backstretch("assets/images/background12.jpg");
	
	set_device_type();
	
	colorbox_iphone();

	$("a.youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});

});