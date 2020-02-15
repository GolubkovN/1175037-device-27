const modalOpen = document.querySelector(".modal__open");
const modalWindow = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

modalOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindow.classList.add("modal--show");
});

modalClose.addEventListener("click", function (evt) {
    modalWindow.classList.remove("modal--show");
});

document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        modalWindow.classList.remove("modal--show");
    }
});