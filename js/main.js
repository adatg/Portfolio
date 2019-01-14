// Initiate waypoint
$(document).ready(function(){
    $('#about-text').waypoint(function() {
        $('#about-text').addClass('visible');
    }, {offset:'70%'});
});

// Smooth Scrolling
$('#nav-main a').on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            window.location.hash = hash;
        });
    }
    // Overlay and menu toggle
    $('.overlay').toggleClass('show');
    $('.navbar-collapse-custom').toggleClass('show');
    $('.hamburger-to-close').toggleClass( 'close' );
});

$("#moreAbout").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
        }, 800, function () {

            window.location.hash = hash;
        });
    }
});

//Nav animation
$(function() {
	// Click Hamburger to Close
	$( '.hamburger-to-close' ).click( function( event ) {
        $( this ).toggleClass( 'close' );
        // Toggle overlay
        $('.overlay').toggleClass('show');
    });
});

//Hide nav when clicked on screen
$(function() {
    $('.overlay').click(function(event){
        $(this).toggleClass('show');
        $('.navbar-collapse-custom').toggleClass('show');
        $('.hamburger-to-close').toggleClass( 'close' );
    });
});
