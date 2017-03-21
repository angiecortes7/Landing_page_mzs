$( document ).ready(function(){
  $(".button-collapse").sideNav();
  $('.slider').slider();
  $('.scroll').click(function(){
     $('html, body').animate({scrollTop:950}, 2000); return false;
   });
   $('.carousel').carousel();
    $('.carousel').carousel('next');
    $('.carousel').carousel('next', 3); // Move next n times.
// Previous slide
    $('.carousel').carousel('prev');
      $('.carousel').carousel('prev', 4); // Move prev n times.
// Set to nth slide
    $('.carousel').carousel('set', 4);
  		$(function(){

     $('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }

   });

});

});
