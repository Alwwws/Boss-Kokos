 var mixer = mixitup('.footer__bank-all', {
  load: {
    filter: '.category-title'
  }
});


emailInput.onclick = () => {
  navigator.clipboard.writeText('olga.fortuna210@gmail.com')
}
emailInput1.onclick = () => {
  navigator.clipboard.writeText('4441 1144 6748 6724')
}
emailInput2.onclick = () => {
  navigator.clipboard.writeText('5167 8020 0139 2320')
}
emailInput3.onclick = () => {
  navigator.clipboard.writeText('UA74 3808 0500 0000 0026 0087 7439 2')
}
emailInput4.onclick = () => {
  navigator.clipboard.writeText('UA17 3808 0500 0000 0026 0097 7442 1')
}
emailInput5.onclick = () => {
  navigator.clipboard.writeText('UA36 3808 0500 0000 0026 0007 7441 9')
}

$(function () {
  $('.top-slider').slick({
    dots: true,
    arrows: true,
  });
})
$((function () {
  $(".rightside-menu__close").on("click", (function () {
    $(".rightside-menu").addClass("rightside-menu__close")
  }
  )),
    $(".header__btn").on("click", (function () {
      $(".rightside-menu").removeClass("rightside-menu__close")
    }
    )),
    $(".header__btn-menu").on("click", (function () {
      $(".menu").toggleClass("menu--open")
    }
    ))
  }));