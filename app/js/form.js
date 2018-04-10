var form = document.querySelector(".form");

var modalSuccess = document.querySelector(".order-result--success");
var modalFailure = document.querySelector(".order-result--failure");

var submitBtn = document.querySelector(".form__submit");
var modalBtnOk = document.querySelector(".order-result__btn--ok");
var modalBtnClose = document.querySelector(".order-result__btn--close");

var nameRequire = document.querySelector("input[name=name]");
var surnameRequire = document.querySelector("input[name=surname]");
var phoneRequire = document.querySelector("input[name=phone]");
var emailRequire = document.querySelector("input[name=email]");


submitBtn.addEventListener("click", function(event){
	event.preventDefault();
	console.log("azaza");

	if (nameRequire.value && surnameRequire.value 
			&& emailRequire.value && phoneRequire.value){
		modalSuccess.classList.add("order-result__show");
	} else if (!nameRequire.value || !surnameRequire.value 
			|| !emailRequire.value || !phoneRequire.value){
		modalFailure.classList.add("order-result__show");
	}
});

modalBtnOk.addEventListener("click", function(event){
	event.preventDefault();

	if(modalFailure.classList.contains("order-result__show")){
		modalFailure.classList.remove("order-result__show");
	}
});

modalBtnClose.addEventListener("click", function(event){
	event.preventDefault();

	if(modalSuccess.classList.contains("order-result__show")){
		modalSuccess.classList.remove("order-result__show");
	}
});