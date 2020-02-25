var modalOpen = document.querySelector(".modal__open");
var modalWindow = document.querySelector(".modal");
var modalClose = document.querySelector(".modal__close");
var form = modalWindow.querySelector(".modal__form");
var userName = modalWindow.querySelector("[name=user-name]");
var email = modalWindow.querySelector("[name=user-email]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("userName");
}catch (err) {
    isStorageSupport = false;
}

modalOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindow.classList.add("modal--show");
    
    if (storage) {
        userName.value = storage;
        email.focus();
    }else {
        userName.focus();
    }
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindow.classList.remove("modal--show");
    modalWindow.classList.remove("modal--error");
});

form.addEventListener("submit", function(evt) {
    if (!userName.value || email.value) {
        evt.preventDefault();
        modalWindow.classList.remove("modal--error");
        modalWindow.offsetWidth = modalWindow.offsetWidth;
        modalWindow.classList.add("modal--error");
    }else {
        if (isStorageSupport) {
            localStorage.setItem("userName", userName.value);
        }
    }
    
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalWindow.classList.contains("modal--show")) {
            modalWindow.classList.remove("modal--show");
            modalWindow.classList.remove("modal--error");
        }
    }
});