<<<<<<< HEAD
$(function () {
    $('[data-toggle="popover"]').popover()
  })

$(".btt").click(function(){
  $("html").animate({scrollTop:0},1000);
})

$(window).scroll(function() {
  if ($(this).scrollTop() > 400) {
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
=======
$(function () {
    $('[data-toggle="popover"]').popover()
  })

$(".btt").click(function(){
  $("html").animate({scrollTop:0},1000);
})

$(window).scroll(function() {
  if ($(this).scrollTop() > 400) {
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
>>>>>>> c5677f044c86162044b653bbe7fa589bc829261e
})