var slider=function(){var f=document.querySelectorAll(".dots__btn");var b=document.querySelectorAll(".hero-slider__item");var a;for(var d=0;d<f.length;d++){f[d].addEventListener("click",c)}function c(g){g.preventDefault();for(var h=0;h<f.length;h++){f[h].classList.remove("dots__btn--active")}this.classList.add("dots__btn--active");a=this.getAttribute("data-name");e(a)}function e(g){for(var h=0;h<b.length;h++){if(b[h].classList.contains(g)){b[h].classList.add("hero-slider__item--visual")}else{b[h].classList.remove("hero-slider__item--visual")}}}};slider();