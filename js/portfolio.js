/* THUMBNAIL GALLERY */


$(document).ready(function() {
		$(".fancybox").fancybox({
    helpers : {
        overlay : {
            css : {
                'background' : 'rgba(58, 42, 45, 0.95)'
            }
        }
    }
});
	});



/* HAMBURGER MENU */


$(document).ready(function(){
	$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
});
