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
	$('.arrivals > div > div').each(function(i, el) {
		var imgwidth = $(this).children('img').width();
		var imgheight = $(this).children('img').height();
		var divmargin = Math.floor((imgheight-$(this).children('div').height())/2);
		if (i % 2 === 0) {
			$(this).css({'padding': divmargin+'px 38px 0 '+(imgwidth+38)+'px'});
			$(this).children('img').css({'margin': (-divmargin)+'px 0 0 '+(-imgwidth-38)+'px'});
		}
		else {
			$(this).css({'text-align': 'right', 'padding': divmargin+'px '+(imgwidth+38)+'px 0 38px'});
			$(this).children('img').css({'float': 'right', 'margin': (-divmargin)+'px '+(-imgwidth-38)+'px 0 0'});
		}
	});
});