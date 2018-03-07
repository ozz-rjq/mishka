;(function(){
	var slides = document.querySelectorAll(".reviews__slide");
	var currentSlide = document.querySelector(".reviews__slide--active");

	var nextSlideBtn = document.querySelector(".reviews__control--next");
	var prevSlideBtn = document.querySelector(".reviews__control--prev");

	nextSlideBtn.addEventListener("click", function(){
		nextSlideFcn();
	});

	prevSlideBtn.addEventListener("click", function(){
		prevSlideFcn();
	});


	function getCurrentSlide(){
		for (var i=0; i < slides.length; i++){
			if (slides[i] == currentSlide)
				return i;
		}
	}

	function nextSlideFcn(){
		currentSlide.classList.remove("reviews__slide--active");
		currentSlidePos = getCurrentSlide();

		if (currentSlidePos >= slides.length - 1)
			currentSlide = slides[0];
		else{
			currentSlidePos++;
			currentSlide = slides[currentSlidePos];
		}

		currentSlide.classList.add("reviews__slide--active");
	}

	function prevSlideFcn(){
		currentSlide.classList.remove("reviews__slide--active");
		currentSlidePos = getCurrentSlide();

		if (currentSlidePos == 0)
			currentSlide = slides[slides.length - 1];
		else{
			currentSlidePos--;
			currentSlide = slides[currentSlidePos];
		}

		currentSlide.classList.add("reviews__slide--active");
	}
}());