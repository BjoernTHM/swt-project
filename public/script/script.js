var BREAKPOINT = 786;
var currentPage = 0;

$(document).ready(function() {
	
	$(".page").scroll(function(e) {
		e.preventDefault();
		e.stopPropagation();
	});
	
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
	   updateURL: true,               
	   beforeMove: function(index) {
		   disappear(index - 1);
	   }, 
	   afterMove: function(index) {
		   appear(index - 1);
		   currentPage = index - 1;
	   }, 
	   loop: false,                 
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
	
	$('#contact_link').click(function(e) {
		//Prevent default link behaviour
		e.preventDefault();
		//Scroll to the projects page
		$("#page").moveTo(4);
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
		$("*").css({
			"color" : ""
		}).removeClass("searchMatched");
	});
	
});

function disappear(index) {
	var elements = $(".page").eq(index).find("*[data-onscroll-animation]");
	elements.each(function(i) {
		elements.eq(i).css({
			"display" : ""
		}).removeClass(elements.eq(i).data("onscroll-animation"));
	});
	
}

function appear(index) {
	var elements = $(".page").eq(index).find("*[data-onscroll-animation]");
	elements.each(function(i) {
		elements.eq(i).css({
			"display" : "block"
		}).addClass(elements.eq(i).data("onscroll-animation"));
	});
}

function showSearchResults(search) {
	search = search.replace(/\\s+/g, "");
	var searchElements = 
		$("#page p")
		.add("#page h1")
		.add("#page h2")
		.add("#page h3")
		.add("#page h4")
		.add("#page h5")
		.add("#page h6")
		.add("#page span")
		.add("#page b")
		.add("#page strong")
		.add("#page u")
		.add("#page center")
		.add("#page table")
		.add("#page tr")
		.add("#page td")
		.add("#page a");
	if (search.length > 0) {
		for (var i = 0; i < searchElements.length; i++) {
			if (searchElements.eq(i).text().toLowerCase().indexOf(search.toLowerCase()) !== -1) {
				searchElements.eq(i).css({
					"color" : ""
				}).addClass("searchMatched");
			}
			else {
				searchElements.eq(i).css({
					"color" : "rgba(51, 51, 51, 0.2)"
				}).removeClass("searchMatched");
			}
		}
	}
	else {
		$("*").css({
			"color" : ""
		}).removeClass("searchMatched");
	}
	if ($(".page").eq(currentPage).find(".searchMatched").length < 1) {
		var page = $(".searchMatched").closest(".page");
		var index = $("#page").find(".page").index(page);
		if (index > -1) {
			$("#page").moveTo(index + 1);
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

