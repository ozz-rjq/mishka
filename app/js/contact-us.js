;(function(){
	var contactUs = document.querySelector(".contact-us");
	var contactBtn = document.querySelector(".contacts__write-us");
	var contactBtnClose = document.querySelector(".contact-us__close");

	contactBtn.addEventListener("click", function(event){
		event.preventDefault();

		if (!contactUs.classList.contains("contact-us--show")){
			contactUs.classList.add("contact-us--show");
		}
	});

	contactBtnClose.addEventListener("click", function(event){
		event.preventDefault();

		if (contactUs.classList.contains("contact-us--show")){
			contactUs.classList.remove("contact-us--show");
		}
	});
})();