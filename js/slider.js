let slider = function () {
    let sliderNav = document.querySelectorAll(".points__btn");
    let sliderContent = document.querySelectorAll(".hero-slider__item");
    let sliderName;

    sliderNav.forEach(item => {
        item.addEventListener("click", selectSliderNav)
    });

    function selectSliderNav() {
        sliderNav.forEach(item => {
            item.classList.remove("points__btn--active");
        });
        this.classList.add("points__btn--active");
        sliderName = this.getAttribute("data-name");
        selectSliderContent(sliderName);
    }

    function selectSliderContent(sliderName) {
        sliderContent.forEach(item => {
            item.classList.contains(sliderName) ? item.classList.add("hero-slider__item--visual") : 
            item.classList.remove("hero-slider__item--visual");
        })
    }
};
slider();