var tab = function () {
    var tabNav = document.querySelectorAll(".services__link");
    var tabContent = document.querySelectorAll(".services__item");
    var tabName;

    tabNav.forEach(function (item) {
        item.addEventListener("click", selectTabNav)
    });

    function selectTabNav(evt) {
        evt.preventDefault();
        tabNav.forEach(function (item) {
            item.classList.remove("is-active");
        });
        this.classList.add("is-active");
        tabName = this.getAttribute("data-filter");
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(function (item) {
            item.classList.contains(tabName) ? item.classList.add("services__item--active") :
             item.classList.remove("services__item--active");
        })
    }
};

tab();