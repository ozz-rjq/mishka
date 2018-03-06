;(function(){
	var mainNav = document.querySelector(".main-nav");

	if (mainNav.classList.contains("main-nav--no-js")){
		mainNav.classList.remove("main-nav--no-js");
	}

	if (document.querySelector(".reviews__slider").
			classList.
			contains("reviews__slider--no-js")){
		document.querySelector(".reviews__slider").classList.remove("reviews__slider--no-js");
	}
})();