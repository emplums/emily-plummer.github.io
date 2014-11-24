$(document).ready(function() {
$( ".drop-button-1" ).click(function() {
  $( ".experience-work-1" ).toggle( "slow", function() {
  });
});
});

$(document).ready(function() {
$( ".drop-button-2" ).click(function() {
  $( ".experience-work-2" ).toggle( "slow", function() {
  	$(".experience-work-2").css("visibility", "visible");
  });
});
});


$(document).ready(function() {
$( ".drop-button-3" ).click(function() {
  $( ".experience-work-3" ).toggle( "slow", function() {
  	$(".experience-work-3").css("visibility", "visible");
  });
});
});


$(document).ready(function() {
$( ".after" ).click(function() {
	$(".after").hide();
  $( ".full-size-after" ).toggle( "slow", function() {
  	$(".full-size-after").css("visibility", "visible");
  });
});
});


$(document).ready(function() {
$( ".full-size-after" ).click(function() {
	$(".full-size-after").hide();
  $( ".after" ).toggle( "slow", function() {
  	$(".after").css("visibility", "visible");
  });
});
});


$(document).ready(function() {
$( ".before" ).click(function() {
	$(".before").hide();
  $( ".full-size-before" ).toggle( "slow", function() {
  	$(".full-size-before").css("visibility", "visible");
  });
});
});



$(document).ready(function() {
$( ".full-size-before" ).click(function() {
	$(".full-size-before").hide();
  $( ".before" ).toggle( "slow", function() {
  	$(".before").css("visibility", "visible");
  });
});
});
