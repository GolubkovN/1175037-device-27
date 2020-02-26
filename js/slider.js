var slider = function () {
    var sliderNav = document.querySelectorAll(".points__btn");
    var sliderContent = document.querySelectorAll(".hero-slider__item");
    var sliderName;

    sliderNav.forEach(function (item) {
        item.addEventListener("click", selectSliderNav)
    });

    function selectSliderNav() {
        sliderNav.forEach(function (item) {
            item.classList.remove("points__btn--active");
        });
        this.classList.add("points__btn--active");
        sliderName = this.getAttribute("data-name");
        selectSliderContent(sliderName);
    }

    function selectSliderContent(sliderName) {
        sliderContent.forEach(function (item) {
            item.classList.contains(sliderName) ? item.classList.add("hero-slider__item--visual") : 
            item.classList.remove("hero-slider__item--visual");
        })
    }
};
slider();