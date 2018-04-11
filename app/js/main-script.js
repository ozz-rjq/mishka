;(function(){
	var navToggle = document.querySelector(".main-nav__toggle");
	var hiddenOptions = document.querySelectorAll(".main-nav__item--hidden");
	
	var searchLink = document.querySelector(".search__link");
	var searchBlock = document.querySelector(".search__form");

	navToggle.addEventListener("click", function(){
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

	searchLink.addEventListener("click", function(){
		if(!searchBlock.classList.contains("search__form--opened")){
			searchBlock.classList.add("search__form--opened");
			searchLink.classList.add("search__form--opened");
		}
		else{
			searchBlock.classList.remove("search__form--opened");
			searchLink.classList.remove("search__form--opened");
		}
	});
})();