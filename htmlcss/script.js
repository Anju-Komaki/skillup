$(function(){
	$('.menu-box').on('click',function(){
		$(this).toggleClass('active');
		$('#h-menu').fadeToggle();
		return false;
	});
});