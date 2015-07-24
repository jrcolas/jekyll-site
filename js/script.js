jQuery(document).ready(function() {
	
	var navOffset = jQuery("nav").offset().top;
	
	jQuery(window).scroll(function() {
		var scrollPos = JQuery(window).scrollTop();
		
		if (scrollPos >= navOffset) {
			jQuery("nav").addClass("fixed");
		} else {
			JQuery("nav").removeClass("fixed");
		}
	});
	
	
});