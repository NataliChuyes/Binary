$(window).resize(function(event){
	mainblock();
});

function mainblock(){
	let h=$(window).outerHeight();
	$('mainblock').css('min-height',h);
}
mainblock();

$('.filter__item').click(function (event) {
	let i = $(this).data('filter');	
	if(i==1){
		$('.portfolio__column').show();
	}else{
		$('.portfolio__column').hide();
		$('.portfolio__column.f_'+i).show();

	}
	$('.filter__item').removeClass('active');
	$(this).addClass('active')
})


$(window).scroll(function(event) {
	let col_pixel = 0-$(this).scrollTop()/1.5;// кол-во пикселей, которые прокрутили
	$('mainblock__image').css('transform','translate3d(0,'+col_pixel+'+px,0)');
});