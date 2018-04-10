;(function(){
	var cartStatus = document.querySelector(".cart__status");
	var cartNum;
	var orderBtns = document.querySelectorAll(".order-js");

	for (var i = 0; i < orderBtns.length; i++){
		orderBtns[i].addEventListener("click", function(event){
			event.preventDefault();

			cartNum = parseInt(cartStatus.innerHTML, 10);
			if (isNaN(cartNum))
				cartNum = 0;

			console.log(cartNum);

			++cartNum;

			cartStatus.innerHTML = cartNum;
		});
	}
})();