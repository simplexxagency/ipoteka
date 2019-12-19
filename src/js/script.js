'use strict';

$(document).ready(function () {

  // Resize input
  function resizeInput() {
    $(this).attr('size', $(this).val().length);
};

$('.header__search-input').keyup(resizeInput).each(resizeInput);


  // Mobile submenu in header
  $('.hero__mobile-item a').on('click', function() {
    console.log('qq');
    $(this).closest('.hero__mobile-item').toggleClass('active');
  });

  // Form Mask
  jQuery(function ($) {
    $('#phone').mask('+9 (999) 999-9999');
    $('#phone2').mask('+9 (999) 999-9999');
    $('#q-phone').mask('+9 (999) 999-9999');
    $('#phone3').mask('+9 (999) 999-9999');
    $('#phone4').mask('+9 (999) 999-9999');
    $('#phone6').mask('+9 (999) 999-9999');
  });

  // Tooltip in Header
  let $langTip = $('.hero__lang-tooltip');
  let $langMenu = $('.hero__top-lang');
  let $langItem = $('.hero__lang');

  $langItem.on('click', function () {
    $(this).find($langTip).toggleClass('active');
  });

  $langTip.on('click', function() {
    $langItem.toggleClass('active');
  });

  // Search in section Hero
  let $heroSearch = $('.hero__main-search');
  let $heroFade = $('.hero__search-fade');
  let $heroSearchMenu = $('.hero__search');
  let $heroSearchInput = $('.hero__search-input');

  $heroSearch.on('click', function () {
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

  $heroSearchInput.on('input', function () {
    $heroSearchMenu.addClass('active');
    $('.hero__search a').html($heroSearchInput.val());

    $('body').on('click', function () {
      $heroSearchMenu.removeClass('active');
    });
  });

  // Search in section Header
  let $headerSearch = $('.header__search-button');
  let $headerFade = $('.header__search-fade');
  let $headerSearchMenu = $('.header__search');
  let $headerSearchInput = $('.header__search-input');

  $headerSearch.on('click', function () {
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

  $headerSearchInput.on('input', function () {
    $headerSearchMenu.addClass('active');
    $('.header__search a').html($headerSearchInput.val());

    $('body').on('click', function () {
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

  // $('.hero__mobile-item a').on('click', function () {
  //   $('.hero__mobile-line').removeClass('active');
  //   $('.hero__mobile-menu').removeClass('active');
  //   $('body').removeClass('active');
  // });


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

  // Form validate
  $("#validate1").validate({
    errorClass: "input_error",
    rules: {
      email1: {
        required: true,
        email: true
      },
      amount1: {
        required: true,
        minlength: 2
      },
      income1: {
        required: true,
        minlength: 3
      },
      name1: {
        required: true,
        minlength: 2
      }
    },
  });

  $("#validate2").validate({
    errorClass: "input_error",
    rules: {
      email2: {
        required: true,
        email: true
      },
      amount2: {
        required: true,
        minlength: 2
      },
      income2: {
        required: true,
        minlength: 3
      },
      name2: {
        required: true,
        minlength: 2
      }
    },
  });

  $("#validate3").validate({
    errorClass: "input_error",
    rules: {
      email3: {
        required: true,
        email: true
      },
      name3: {
        required: true,
        minlength: 2
      },
      question3: {
        required: true,
        minlength: 4
      }
    },
  });

  $("#validate4").validate({
    errorClass: "input_error",
    rules: {
      email4: {
        required: true,
        email: true
      },
      amount4: {
        required: true,
        minlength: 2
      },
      income4: {
        required: true,
        minlength: 3
      },
      name4: {
        required: true,
        minlength: 2
      }
    },
  });

  $("#validate5").validate({
    errorClass: "input_error",
    rules: {
      email5: {
        required: true,
        email: true
      },
      name5: {
        required: true,
        minlength: 2
      },
      question5: {
        required: true,
        minlength: 4
      }
    },
  });

  $("#validate6").validate({
    errorClass: "input_error",
    rules: {
      first6: {
        required: true,
        minlength: 2
      },
      last6: {
        required: true,
        minlength: 2
      },
      email6: {
        required: true,
        email: true
      },
      phone6: {
        required: true
      },
      city6: {
        required: true,
        minlength: 2
      },
      country6: {
        required: true,
        minlength: 2
      },
      time6: {
        required: true
      },
      method6: {
        required: true
      },
      subject6: {
        required: true
      },
      question6: {
        required: true,
        minlength: 2
      }
    },
    messages: {
      method6: {
        required: "Please"
      }
    },
    
  });

  
    // Pagination on page Video
    function simpleTemplating(data) {
      var html = '<ul>';
      $.each(data, function(index, item){
          html += '<li>'+ item +'</li>';
      });
      html += '</ul>';
      return html;
  };

  $('#pagination-container').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7],
    pageSize: 1,
    autoHidePrevious: true,
    autoHideNext: true,
    callback: function(data, pagination) {
        var html = simpleTemplating(data);
        // $('#data-container').html(html);
    }
});
});