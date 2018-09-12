
$(window).scroll(function() {
    if ($(this).scrollTop() > 360) {
     $('.alo').addClass('animated fadeInUp');
   }else {
     $('.alo').removeClass('animated fadeInUp');
   }
   if ($(this).scrollTop() > 1680) {
    $('.blo').addClass('animated fadeInUp');
  }else {
    $('.blo').removeClass('animated fadeInUp');
  }
  if ($(this).scrollTop() > 3080) {
    $('.clo').addClass('animated fadeInUp');
  }else {
    $('.clo').removeClass('animated fadeInUp');
  }
  if ($(this).scrollTop() > 4360) {
    $('.dlo').addClass('animated fadeInUp');
  }else {
    $('.dlo').removeClass('animated fadeInUp');
  }
  if ($(this).scrollTop() > 5680) {
    $('.elo').addClass('animated fadeInUp');
  }else {
    $('.elo').removeClass('animated fadeInUp');
  }
   console.log($(this).scrollTop())
   if ($(this).scrollTop() > 6979) {
    $('.flo').addClass('animated fadeInUp');
  }else {
    $('.flo').removeClass('animated fadeInUp');
  }
  })
  $(window).scroll(function() {
    if ($(this).scrollTop() > 7600) {
     $('.icon').addClass('animated rotateInDownLeft');
   }else {
     $('.icon').removeClass('animated rotateInDownLeft');
   }
  //  if ($(this).scrollTop() > 1200) {
  //   $('.ngoai').addClass('animated fadeInUp');
  // }else {
  //   $('.ngoai').removeClass('animated fadeInUp');
  // }
  })
  