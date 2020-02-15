let tab = function () {
    let tabNav = document.querySelectorAll(".services__link");
    let tabContent = document.querySelectorAll(".services__item");
    let tabName;

    tabNav.forEach(item => {
        item.addEventListener("click", selectTabNav)
    });

    function selectTabNav(evt) {
        evt.preventDefault();
        tabNav.forEach(item => {
            item.classList.remove("is-active");
        });
        this.classList.add("is-active");
        tabName = this.getAttribute("data-filter");
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add("services__item--active") :
             item.classList.remove("services__item--active");
        })
    }
};

tab();