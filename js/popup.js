const popupOpen = document.querySelector(".popup__open");
const map = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");

popupOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.add("popup--show");
});

popupClose.addEventListener("click", function(){
    map.classList.remove("popup--show");
});

document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        map.classList.remove("popup--show");
    }
});