var popupOpen=document.querySelector(".popup__open");var map=document.querySelector(".popup");var popupClose=document.querySelector(".popup__close");popupOpen.addEventListener("click",function(a){a.preventDefault();map.classList.add("popup--show")});popupClose.addEventListener("click",function(){map.classList.remove("popup--show")});document.addEventListener("keydown",function(a){if(a.keyCode===27){map.classList.remove("popup--show")}});