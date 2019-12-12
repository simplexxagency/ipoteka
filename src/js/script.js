'use strict';

$(document).ready(function () {


    // Form Mask
    jQuery(function ($) {
        $('#phone').mask('+9 (999) 999-9999');

    });

    // Tooltip in Header
  let $langTip = $('.hero__lang-tooltip');
  let $langMenu = $('.hero__top-lang');

  $langTip.on('click', function () {
    $langMenu.find('div').toggleClass('active');
  });

  // Header bg color
  let $header = $('.header');
  let $hero = $('.hero');

  $(window).scroll(function () {
      let top = $(this).scrollTop();

      $header.toggleClass('active', top > ($hero.height() / 2));
  });
});