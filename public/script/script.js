$(document).ready(function() {
	
	//Register the onepagescroll plugin
	$("#page").onepage_scroll({
	   sectionContainer: "section",   
	   easing: "ease-in",                                              
	   animationTime: 300,            
	   pagination: true,                
	   updateURL: false,               
	   beforeMove: function(index) {}, 
	   afterMove: function(index) {}, 
	   loop: true,                 
	   keyboard: true,                  
	   responsiveFallback: false,                           
	   direction: "horizontal"         
	});
	
	//Register the link listener
	$("#home_link").click(function(e) {
		//Prevent default link behaviour
		e.preventDefault();
		//Scroll to the home page
		$("#page").moveTo(1);
	});
	
	//Register the link listener
	$("#about_link").click(function(e) {
		//Prevent default link behaviour
		e.preventDefault();
		//Scroll to the about page
		$("#page").moveTo(2);
	});
	
	//Register the link listener
	$("#projects_link").click(function(e) {
		//Prevent default link behaviour
		e.preventDefault();
		//Scroll to the projects page
		$("#page").moveTo(3);
	});
	
});