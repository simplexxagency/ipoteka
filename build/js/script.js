'use strict';

$(document).ready(function () {

  // Form Mask
  jQuery(function ($) {
    $('#phone').mask('+9 (999) 999-9999');
    $('#q-phone').mask('+9 (999) 999-9999');
    $('#phone3').mask('+9 (999) 999-9999');
  });

  // Tooltip in Header
  let $langTip = $('.hero__lang-tooltip');
  let $langMenu = $('.hero__top-lang');

  $langTip.on('click', function () {
    $langMenu.find('div').toggleClass('active');
  });

  // Search in section Hero
  let $heroSearch = $('.hero__main-search');
  let $heroFade = $('.hero__search-fade');
  let $heroSearchMenu = $('.hero__search');
  let $heroSearchInput = $('.hero__search-input');

  $heroSearch.on('click', function() {
    if ($heroSearch.hasClass('active')) {
      $heroSearch.removeClass('active');
      $heroFade.addClass('active');
    }
  });

  $heroSearchInput.on('change', function() {
    $heroSearchMenu.addClass('active');
    $heroSearch.addClass('active');
    $heroFade.removeClass('active');
  });

  // Header bg color
  let $headerMain = $('.header-main');
  let $header = $('.header__container');
  let $hero = $('.hero');

  $(window).scroll(function () {
    let top = $(this).scrollTop();

    $header.toggleClass('active', top > $header.height());
    $headerMain.toggleClass('active', top > ($hero.height() * 0.15));
  });

  // Menu in Header
  let $btn = $('.hero__mobile-line');
  let $navMenu = $('.hero__mobile-menu');

  $('.hero__mobile-btn').on('click', function () {
    if (!($btn.hasClass('active'))) {
      $btn.addClass('active');
      $navMenu.addClass('active');
      $('body').addClass('active');
    } else {
      $btn.removeClass('active');
      $navMenu.removeClass('active');
      $('body').removeClass('active');
    }

  });

  $('.hero__mobile-item a').on('click', function () {
    $('.hero__mobile-line').removeClass('active');
    $('.hero__mobile-menu').removeClass('active');
    $('body').removeClass('active');
  });

  // Smooth scroll
  $('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
    $('body').removeClass('active');
    return false;
  });

  // Slick slider in section Test
  function slickifyTest() {
    $('.test__slider').slick({
      dots: true,
      arrows: true,
      // mobileFirst: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipe: true,
      nextArrow: '.test__arrow-right',
      prevArrow: '.test__arrow-left',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
  }

  slickifyTest();
});