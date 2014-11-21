	$(window).scroll(function() {
		$('#block-two,#block-one,#block-three').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("animate");
			}
		});
	});


/*$(window).load(function() {
	$(".layer").slideDown(function(){

	});
		$(".layer").fadeTo(800, 1.0, function(){
		
	});

});*/


$(window).load(function playVideo(){
	var video = document.getElementById("videoPlayer");
	var button = document.getElementById("play")
$(".play").click(function(){
	$(".still").hide();
	$(".videoPlayer").fadeIn("slow");
	$(".play").hide();
	$("#dropbox-video > h2").hide();
	$(".videoPlayer").get(0).play();
});
});


$(document).ready(function () {
  var change_img_time = 4000,
      transition_speed = 600;

  var listItems = $("#slider").children('li'),
      dotItems = $('#dots').children('li'),
      listLen = listItems.length,
      current,
      changeTimeout;

  function moveTo(newIndex) {

    var i = newIndex;

    if (newIndex == 'prev') {
        i = (current > 0) ? (current - 1) : (listLen - 1);
    }

    if (newIndex == 'next') {
        i = (current < listLen - 1) ? (current + 1) : 0;
    }

    dotItems.removeClass('active')
            .eq(i).addClass('active');

    listItems.fadeOut(transition_speed)
             .eq(i).fadeIn(transition_speed);

    current = i;

    //resets time interval if user clicks on slider dot; then begin automated slider
    clearTimeout(changeTimeout);
    changeTimeout = setTimeout(function() { moveTo('next'); }, change_img_time);
  };

//Move on click

$(function(){
    $('.fadein img:gt(0)').hide();
    $('.control-right').on('click', function(){
        $('.fadein :first-child').fadeOut()
           .next('img').fadeIn()
           .end().appendTo('.fadein');
    });
    $('.control-left').on('click', function () {
        $('.fadein :last-child').fadeIn()
            .insertBefore($('.fadein :first-child').fadeOut());
    });
});

  // Event handlers
  $("#dots li").click(function () {
    var i = $('#dots li').index(this);
    moveTo(i);
  });

  $("#prev").click(function () {
    moveTo('prev');
  });

  $("#next").click(function () {
    moveTo('next');
  });
  
  //initialize slider on load
  moveTo('next');
});