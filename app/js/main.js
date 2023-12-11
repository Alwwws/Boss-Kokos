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

$((function (){'use strict'; document.addEventListener('click', EasyTogglerHandler);function EasyTogglerHandler(event){
  const EY_BTN=event.target.closest('[data-easy-toggle]'); if (EY_BTN) {event.preventDefault(); let ey_target=EY_BTN.getAttribute('data-easy-toggle'); let ey_class = EY_BTN.getAttribute('data-easy-class');try{document.querySelector(ey_target).classList.toggle(ey_class)}catch (ey_error){console.warm('EasyToggler.js : Блок '+ ey_target + 'не существует')}}if(!EY_BTN){ let ey_rcoe_block_targets = document.querySelectorAll('[data-easy-rcoe]'); Array.from(ey_rcoe_block_targets).forEach.call(ey_rcoe_block_targets, function (ey_rcoe_block_target) {let ey_rcoe_block = ey_rcoe_block_target.getAttribute('data-easy-toggle'), ey_rcoe_block_class = ey_rcoe_block_target.getAttribute('data-easy-class'); if (!event.target.closest(ey_rcoe_block)) { try { document.querySelector(ey_rcoe_block).classList.remove(ey_rcoe_block_class)}catch(ey_error){console.warn('EasyToggler.js : Блок '+ey_rcoe_block+' не существует')}}})}}})());
//# sourceMappingURL=easy-toggler.min.js.map