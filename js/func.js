// HOVER IMAGE MAGNIFY===============================================================================
$(document).ready(function(){
    //Set opacity on each span to 0%
    $(".magnify").css({'opacity':'0'});

	$('.pictures a').hover(
		function() {
			$(this).find('.magnify').stop().fadeTo(800, 1);
		},
		function() {
			$(this).find('.magnify').stop().fadeTo(800, 0);
		}
	)
});	

// PRETTYPHOTO ===============================================================================
$("a[data-rel^='prettyPhoto']").prettyPhoto({
		social_tools: '',
		overlay_gallery: false
});	