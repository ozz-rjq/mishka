;(function(){
	var modalWindow = document.querySelector(".modal");
	var orderBtn = document.querySelectorAll(".order-js");
	var addBtn = document.querySelector(".add-js");

	for (var i = 0; i < orderBtn.length; i++){
		orderBtn[i].addEventListener("click", function(event){
			event.preventDefault();

			if (!modalWindow.classList.contains("modal--show")){
				modalWindow.classList.add("modal--show");
			} else{
				modalWindow.classList.remove("modal--show");
			}
		});
	}

	addBtn.addEventListener("click", function(event){
		event.preventDefault();

		if (modalWindow.classList.contains("modal--show")){
			modalWindow.classList.remove("modal--show");
		}
	});
})();