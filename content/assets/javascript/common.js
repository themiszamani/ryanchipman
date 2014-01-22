$(document).ready(function() {
	var extraText = $('.extra');
	extraText.hide();

	$('.project-box').hover(function() {
		$(this).find('.extra').show();
	}, function() {
		$(this).find('.extra').hide();
	});
});