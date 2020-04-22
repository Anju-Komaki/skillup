$(function(){

	$('.menu-trigger').on('click', function(){
		$(this).toggleClass('active');
		$('#h-menu').fadeToggle();
		return false;
	});

});