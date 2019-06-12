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
