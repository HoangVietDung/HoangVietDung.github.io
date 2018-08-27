$(window).scroll(function() {
    if ($(this).scrollTop() > 960) {
     $('.icon').addClass('animated rotateInDownLeft');
   }else {
     $('.icon').removeClass('animated rotateInDownLeft');
   }
  //  if ($(this).scrollTop() > 1200) {
  //   $('.ngoai').addClass('animated fadeInUp');
  // }else {
  //   $('.ngoai').removeClass('animated fadeInUp');
  // }
   console.log($(this).scrollTop())
  })