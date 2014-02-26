$(document).ready(function() {
	$('body').append('<div class="lshadow"></div><div class="rshadow"></div>');
	var fheight = $('.footer').height()+1;
	var wheight = $(window).height();
	$('.wrapper').css({'min-height': wheight+'px'});
	$('.footer').css({'margin-top': -fheight+'px'});
	$('.clear').css({'height': fheight+'px'});
	$('.artist .portfolio > div:nth-child(2n)').css({'text-align': 'right', 'padding': '95px 414px 12px 42px'});
	$('.artist .portfolio > div:nth-child(2n) img').css({'float': 'right', 'margin': '-95px -414px -12px 0'});
	$('.gallery > div > div:nth-child(4n)').css({'margin-right': '0'});
	$('.footer > div > div > div ul > li > ul > li:last-child').css({'border-bottom-width': '0'});
});