;(function(){
	var mainNav = document.querySelector(".main-nav");
	var reviewsSlider = document.querySelector(".reviews__slider");
	var reviewsBlock = document.querySelector(".reviews");

	if (mainNav.classList.contains("main-nav--no-js")){
		mainNav.classList.remove("main-nav--no-js");
	}

	if (reviewsSlider){
		if (reviewsSlider.
				classList.
				contains("reviews__slider--no-js")){
			reviewsSlider.classList.remove("reviews__slider--no-js");
		}
	}

	if (reviewsBlock){
		if (reviewsBlock.
				classList.
				contains("reviews--no-js")){
			reviewsBlock.classList.remove("reviews--no-js");
		}
	}
})();