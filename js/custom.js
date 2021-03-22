//For 1
//Movement Animation to happen
let card = document.querySelector('.card1')
let container = document.querySelector('.container3d1')
//Items
let title = document.querySelector('.title1')
let sneaker = document.querySelector('.sneaker1 img')
let purchase = document.querySelector('.purchase1')
let description = document.querySelector('.info1 h3')
let sizes = document.querySelector('.sizes1')

shivaAnime(card, container, title, sneaker, purchase, description, sizes)

//For 2
//Movement Animation to happen
card = document.querySelector('.card2')
container = document.querySelector('.container3d2')
//Items
title = document.querySelector('.title2')
sneaker = document.querySelector('.sneaker2 img')
purchase = document.querySelector('.purchase2')
description = document.querySelector('.info2 h3')
sizes = document.querySelector('.sizes2')

shivaAnime(card, container, title, sneaker, purchase, description, sizes)

//For 2
//Movement Animation to happen
card = document.querySelector('.card3')
container = document.querySelector('.container3d3')
//Items
title = document.querySelector('.title3')
sneaker = document.querySelector('.sneaker3 img')
purchase = document.querySelector('.purchase3')
description = document.querySelector('.info3 h3')
sizes = document.querySelector('.sizes3')

shivaAnime(card, container, title, sneaker, purchase, description, sizes)

function shivaAnime(
  card,
  container,
  title,
  sneaker,
  purchase,
  description,
  sizes
) {
  //Moving Animation Event
  container.addEventListener('mousemove', (e) => {
    let xAxis = (card.offsetWidth / 2 - e.pageX) / 200
    let yAxis = (card.offsetHeight / 2 - e.pageY) / 200
    card.style.transform = `rotateX(${yAxis}deg) rotateZ(${xAxis}deg)`
    // card.style.transform = `rotateY(15deg) rotateX(-5deg)`;
  })
  //Animate In
  container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none'
    //Popout
    title.style.transform = 'translateZ(150px)'
    sneaker.style.transform = 'translateZ(200px) rotateY(5deg)'
    //description.style.transform = "translateZ(125px)";
    sizes.style.transform = 'translateZ(100px)'
    purchase.style.transform = 'translateZ(75px)'
  })
  //Animate Out
  container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    //Popback
    title.style.transform = 'translateZ(0px)'
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)'
    //description.style.transform = "translateZ(0px)";
    sizes.style.transform = 'translateZ(0px)'
    purchase.style.transform = 'translateZ(0px)'
  })
}

/* Adapted from 
   Light YouTube Embeds by @labnol 
   http://labnol.org/?p=27941 */

function lightEmbedInit() {
  var div,
    n,
    v = document.getElementsByClassName('light-video-embed')

  for (n = 0; n < v.length; n++) {
    v[n].onclick = function () {
      var id = this.dataset.id
      var img_src = new URL(this.children[0].attributes[0].value)
      var hostname = img_src.hostname

      var iframe = document.createElement('iframe')

      if (hostname == 'i.ytimg.com') {
        var embed = 'https://www.youtube.com/embed/ID?autoplay=1'
      } else if (hostname == 'i.vimeocdn.com') {
        var embed = '//player.vimeo.com/video/ID?autoplay=1'
      }

      iframe.setAttribute('src', embed.replace('ID', id))
      iframe.setAttribute('frameborder', '0')
      iframe.setAttribute('allowfullscreen', '1')
      this.parentNode.replaceChild(iframe, this)
    }
  }
}

// Light video JS End

jQuery(document).ready(function ($) {
  // Preloader
  $(window).on('load', function () {
    $('#preloader')
      .delay(100)
      .fadeOut('slow', function () {
        $(this).remove()
      })
  })

  // Hero rotating texts
  $('#hero .rotating').Morphext({
    animation: 'flipInX',
    separator: ',',
    speed: 3000,
  })

  // Initiate the wowjs
  new WOW().init()

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: { opacity: 'show' },
    speed: 400,
  })

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container')
      .clone()
      .prop({ id: 'mobile-nav' })
    $mobile_nav.find('> ul').attr({ class: '', id: '' })
    $('body').append($mobile_nav)
    $('body').prepend(
      '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>'
    )
    $('body').append('<div id="mobile-body-overly"></div>')
    $('#mobile-nav')
      .find('.menu-has-children')
      .prepend('<i class="fa fa-chevron-down"></i>')

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active')
      $(this).nextAll('ul').eq(0).slideToggle()
      $(this).toggleClass('fa-chevron-up fa-chevron-down')
    })

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active')
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars')
      $('#mobile-body-overly').toggle()
    })

    $(document).click(function (e) {
      var container = $('#mobile-nav, #mobile-nav-toggle')
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active')
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars')
          $('#mobile-body-overly').fadeOut()
        }
      }
    })
  } else if ($('#mobile-nav, #mobile-nav-toggle').length) {
    $('#mobile-nav, #mobile-nav-toggle').hide()
  }

  // Stick the header at top on scroll
  $('#header').sticky({ topSpacing: 0, zIndex: '50' })

  // Smoth scroll on page hash links
  $('a[href*="#"]:not([href="#"])').on('click', function () {
    if (
      location.pathname.replace(/^\//, '') ==
      this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash)
      if (target.length) {
        var top_space = 0

        if ($('#header').length) {
          top_space = $('#header').outerHeight()
        }

        $('html, body').animate(
          {
            scrollTop: target.offset().top - top_space,
          },
          1500,
          'easeInOutExpo'
        )

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active')
          $(this).closest('li').addClass('menu-active')
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active')
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars')
          $('#mobile-body-overly').fadeOut()
        }

        return false
      }
    }
  })

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow')
    } else {
      $('.back-to-top').fadeOut('slow')
    }
  })

  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo')
    return false
  })
})

//Anime Js Code

anime({
  targets: '.portfolio',
  loop: true,
  easing: 'easeInOutSine',
  duration: 8000,
  direction: 'alternate'
});

anime({
  targets: '.portfolio .anime-target',
  scale: [
    { value: .1, easing: 'easeOutSine', duration: 500 },
    { value: 1, easing: 'easeInOutQuad', duration: 1200 }
  ],
  delay: anime.stagger(200, { grid: [8, 8], from: 'center' })
});

//Anime End



