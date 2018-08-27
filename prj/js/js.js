$(document).ready(function () {
    $('.btn-open').click(function(event){
        $('.sidenav').toggleClass('show');
        $('.main-content').toggleClass('push')
    });
    // $('.btn-close').click(function(event){
    //     $('.sidenav').removeClass('show');
    //     $('.main-content').removeClass('push')
    // });
});