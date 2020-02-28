var slider = function () {
    var sliderNav = document.querySelectorAll(".dots__btn");
    var sliderContent = document.querySelectorAll(".hero-slider__item");
    var sliderName;

    for(var i = 0; i < sliderNav.length; i++) {
        sliderNav[i].addEventListener("click", selectSliderNav);
    };

    function selectSliderNav(evt) {
        evt.preventDefault();
        for (var i = 0; i < sliderNav.length; i++) {
            sliderNav[i].classList.remove("dots__btn--active");
        }
        this.classList.add("dots__btn--active");
        sliderName = this.getAttribute("data-name");
        selectSliderContent(sliderName);
    }

    function selectSliderContent(sliderName) {
       for (var j = 0; j < sliderContent.length; j++) {
           if (sliderContent[j].classList.contains(sliderName)) {
            sliderContent[j].classList.add("hero-slider__item--visual");
           }else {
            sliderContent[j].classList.remove("hero-slider__item--visual");
           }
        }
    }
};
slider();

