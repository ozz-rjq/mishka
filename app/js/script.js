;(function(){
	var navToggle = document.querySelector(".main-nav__toggle");
	var hiddenOptions = document.querySelectorAll(".main-nav__item--hidden");

	navToggle.addEventListener("click", function(){
		console.log(hiddenOptions);
		if (navToggle.classList.contains("main-nav__toggle--open")){
			navToggle.classList.remove("main-nav__toggle--open");
			navToggle.classList.add("main-nav__toggle--close");

			for (var i = 0; i < hiddenOptions.length; i++){
				hiddenOptions[i].classList.remove("main-nav__item--hidden");
			}
		} else{
			navToggle.classList.add("main-nav__toggle--open");
			navToggle.classList.remove("main-nav__toggle--close");

			for (var i = 0; i < hiddenOptions.length; i++){
				hiddenOptions[i].classList.add("main-nav__item--hidden");
			}
		}
	});
})();