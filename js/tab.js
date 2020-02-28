var tab = function () {
    var tabNav = document.querySelectorAll(".services__link");
    var tabContent = document.querySelectorAll(".services__item");
    var tabName;

    for(var i = 0; i < tabNav.length; i++) {
        tabNav[i].addEventListener("click", selectTabNav);
    };

    function selectTabNav(evt) {
        evt.preventDefault();
        for(var i = 0; i < tabNav.length; i++) {
            tabNav[i].classList.remove("is-active");
        }
        this.classList.add("is-active");
        tabName = this.getAttribute("data-filter");
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        for(var j = 0; j < tabContent.length; j++) {
            if (tabContent[j].classList.contains(tabName)) {
                tabContent[j].classList.add("services__item--active");
            }else {
                tabContent[j].classList.remove("services__item--active");
            }
        }
    }
};

tab();
            