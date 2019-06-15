// Overlay
function openNav(){
	document.getElementById('nav').style.width="100%";
}

function closeNav(){
	document.getElementById('nav').style.width="0%";
}
function openNav(){
	document.getElementById('nav').style.height="100%";
}

function closeNav(){
	document.getElementById('nav').style.height="0%";
}

// Magnific Popup
$(".gallery").magnificPopup({
	delegate: 'a',
	type: 'image',
	gallery:{
		enabled:true
	}
})

// Sticky navbar
	$(window).scroll(function(){

		var top = $(window).scrollTop();
		if(top>=60){
			$("nav").addClass('secondary');
		}
		else 
			if($("nav").hasClass('secondary')){

				$("nav").removeClass('secondary');
			}

	});

// Return to top

	$(window).scroll(function(){
		if($(this).scrollTop()>30){
			$('#back').fadeIn();
		} else{
			$('#back').fadeOut();
		}
	});

	$("#back").click(function(){
		$('html ,body').animate({scrollTop:0},0);

	});

