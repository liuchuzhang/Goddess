$(function () {
	$('#slider-goddess').on('click', function () {
		$('#slider-goddess').hide();
		$('.my-goddess-slider').show();
		new Swiper('.swiper-container');
	})
})