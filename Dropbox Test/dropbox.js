$(window).scroll(function() {
		$('#busAnimations').each(function(){
		var pos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (pos < topOfWindow+400) {
				$(this).addClass("slideUp");
			}
		});
	});

$(window).load(function() {
	$(".layer").slideDown("slow", function(){


		});
		$(".layer").fadeTo(800, 1.0, function(){

		
	});

});