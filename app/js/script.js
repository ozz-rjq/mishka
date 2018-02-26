;(function(){
	var navToggle = document.querySelector(".main-nav__toggle");
	var hiddenOptions = document.querySelector(".main-nav__options");


	navToggle.addEventListener("click", function(){
		console.log(hiddenOptions);
		if (navToggle.classList.contains("main-nav__toggle--open")){
			navToggle.classList.remove("main-nav__toggle--open");
			navToggle.classList.add("main-nav__toggle--close");

			hiddenOptions.classList.add("main-nav__options--show");
		} else{
			navToggle.classList.add("main-nav__toggle--open");
			navToggle.classList.remove("main-nav__toggle--close");

			hiddenOptions.classList.remove("main-nav__options--show");
		}
	});


})();