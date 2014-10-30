var BREAKPOINT = 786;

$(document).ready(function() {
	
	//Register resize listener
	resize();
	$(window).resize(function(e) {
		resize();
	});
	
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
	
	//Register search listener
	var timeout = null;
	var search = $("#search");
	search.keyup(function(e) {
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			showSearchResults(search.val());
		}, 300);
	})
	.focus(function(e) {
		search.css({
			"width" : "200px"
		});
	})
	.blur(function(e) {
		search.css({
			"width" : "75px"
		});
	});
	
});

function showSearchResults(search) {
	search = search.replace(/\\s+/g, "");
	var searchElements = 
		$("p")
		.add("h1")
		.add("h2")
		.add("h3")
		.add("h4")
		.add("h5")
		.add("h6")
		.add("span")
		.add("i")
		.add("strong")
		.add("u")
		.add("center");
	for (var i = 0; i < searchElements.length; i++) {
		if (search.length > 0 && searchElements.eq(i).text().toLowerCase().indexOf(search.toLowerCase()) !== -1) {
			searchElements.eq(i).css({
				"border" : "1px solid #333"
			});
		}
		else {
			searchElements.eq(i).css({
				"border" : ""
			});
		}
	}
}

function resize() {
	if ($(window).outerWidth() < BREAKPOINT) {
		$("#search").css({
			"min-width" : "100%"
		});
	}
	else {
		$("#search").css({
			"min-width" : ""
		});
	}
}

