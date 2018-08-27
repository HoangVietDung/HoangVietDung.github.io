// $(function(){
//     $(window).scroll(function(){
//         var vitri = $(window).scrollTop();
// console.log(vitri)
//         if (vitri = 20) {
//             $('.carousel-caption').addClass('dilen')

//         }
//         else{
//             $('carousel-caption').removeClas('dilen')
//         }
//     })
// })
$(window).scroll(function () {
  if ($(this).scrollTop() > 1400) {
    $('.icon').addClass('animated fadeInDown');
  } else {
    $('.icon').removeClass('animated fadeInDown');
  }
  //  if ($(this).scrollTop() > 1200) {
  //   $('.ngoai').addClass('animated fadeInUp');
  // }else {
  //   $('.ngoai').removeClass('animated fadeInUp');
  // }
  console.log($(this).scrollTop())
})
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 600) {
//     $('.btt').css('opacity', '1');
//   }
//   else {
//     $('.btt').css('opacity', '0')
//   }

// })