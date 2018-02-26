;(function(){
	var navToggle = document.querySelector(".main-nav__toggle");
	var hiddenOptions = document.querySelectorAll(".main-nav__item--hidden");


	navToggle.addEventListener("click", function(){
		console.log(hiddenOptions);
		if (navToggle.classList.contains("main-nav__toggle--open")){
			navToggle.classList.remove("main-nav__toggle--open");
			navToggle.classList.add("main-nav__toggle--close");

			hiddenOptions.forEach(function(elem){
				elem.classList.remove("main-nav__item--hidden");
			});
		} else{
			navToggle.classList.add("main-nav__toggle--open");
			navToggle.classList.remove("main-nav__toggle--close");

			hiddenOptions.forEach(function(elem){
				elem.classList.add("main-nav__item--hidden");
			});
		}
	});


})();