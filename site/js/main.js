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
function hola(){
 		var bu = new Array(80);
		bu = bu.sort(function() {return Math.random() - 0.5});
				for(i=1; i<=120; i++){
			bu[i]=i;
		}
		bu = bu.sort(function() {return Math.random() - 0.5});
 	
      AOS.init();
		
    	
    	for( i = 1; i<=119; i++ ){
    	

    	document.write("<a href=\"images/"+bu[i]+".jpg\" class=\"image\"><img data-aos=\"zoom-in-right\" src=\"resized/"+bu[i]+".jpg\" id=\"capt\" <a/> ");


    	}
    	}