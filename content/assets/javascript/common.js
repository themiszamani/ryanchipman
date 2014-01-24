$(document).ready(function() {
	var extraText = $('.extra');
	extraText.hide();

	$('.project-box').hover(function() {
		$(this).find('.extra').show("slow");
	}, function() {
		$(this).find('.extra').stop().hide("slow");
	});
});