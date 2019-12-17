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
    } else {
      $heroSearch.addClass('active');
      $heroFade.removeClass('active');
    }
  });

  // $heroSearchInput.on('change', function() {
  //   $heroSearchMenu.addClass('active');
  // });

  $heroSearchInput.on('input', function() {
    $heroSearchMenu.addClass('active');
    $('.hero__search a').html($heroSearchInput.val());

    $('body').on('click', function() {
      $heroSearchMenu.removeClass('active');
    });
  });

    // Search in section Header
    let $headerSearch = $('.header__search-button');
    let $headerFade = $('.header__search-fade');
    let $headerSearchMenu = $('.header__search');
    let $headerSearchInput = $('.header__search-input');
  
    $headerSearch.on('click', function() {
      if ($headerSearch.hasClass('active')) {
        $headerSearch.removeClass('active');
        $headerFade.addClass('active');
      } else {
        $headerSearch.addClass('active');
        $headerFade.removeClass('active');
      }
    });
  
    // $heroSearchInput.on('change', function() {
    //   $heroSearchMenu.addClass('active');
    // });
  
    $headerSearchInput.on('input', function() {
      $headerSearchMenu.addClass('active');
      $('.header__search a').html($headerSearchInput.val());
  
      $('body').on('click', function() {
        $headerSearchMenu.removeClass('active');
      });
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


  var options = {

    url: "https://api.myjson.com/bins/6ra24",
  
    getValue: "name",
  
    list: {
      match: {
        enabled: true
      }
    },
  
  };
  
  $("#inputSearch").easyAutocomplete(options);

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