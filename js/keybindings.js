$(function() {
    $('.column').click(function() {
    	$('.column').removeClass("active inactive default")
        $(this).addClass("active")
        updateClasses()
    });
});

document.onkeydown = checkKey

function checkKey(e) {

    e = e || window.event;

	const active = $('.active')
    const firstChild = $(active).is(':first-child')
    const lastChild = $(active).is(':last-child')

    if (e.keyCode == '38') {
        if (!firstChild) {
    		$(active).removeClass('active')	
        }

        $(active).prev('div').addClass('active').removeClass('default')
		updateClasses()
    }

    if (e.keyCode == '40') {
    	if (!lastChild) {
	        $(active).next('div').removeClass('inactive').addClass('active')
	        $(active).removeClass('active')
    	}

		updateClasses()
    }

}

function updateClasses () {
	$('.active').prevAll('div').addClass('default')
	$('.active').nextAll('div').addClass('inactive')
}