jQuery(document).ready(function(){

	"use strict";
	$('#slider-carousel').carouFredSel({
		responsive:true,
		width:'100%',
		circular:true,
		scroll:{
				items:1,
				duration:500,
				pauseOnHover:true,
		},
		auto:true,
		items:{
				visible:{
					min:1,
					max:1
				},
				height:"variable"
		},
		pagination:{
			container:".sliderpager",
			pageAnchorBuilder:false
		}
});



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



// ===== Scroll to Top ==== NO FUNCIONAAAA

	$(window).scroll(function(){
		if($(this).scrollTop()>40){
			$('#button').fadeIn();
		} else{
			$('#button').fadeOut();
		}
	});



	$("#button").click(function(){
		$('html ,body').animate({scrollTop:0},800);

	});



});