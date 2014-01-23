$(document).ready(function() {
	var extraText = $('.extra');
	extraText.hide();

	$('.project-box').hover(function() {
		$(this).find('.extra').show("fast");
	}, function() {
		$(this).find('.extra').hide("fast");
	});
});