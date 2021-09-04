$(document).ready(function(){
  /*navbar*/
 let navTwo = $('#navTwo')
 let navOne = $('#navOne')

 navTwo.hide()
 $(window).scroll(function(){
   let count = $(this).scrollTop()
   $('').text(count)
   if(count<200){
     navTwo.fadeOut()
     navOne.fadeIn()
   }
   else{
     navTwo.fadeIn()
     navOne.fadeOut
   }

 });

    /*popup*/
    $('.popup-youtube').magnificPopup({
      type: 'iframe'

    });

    /*scroll*/
     // Scroll 
     $('#scroll_top').click(function(){
      $('html,body').animate({
          scrollTop : 0
      }),100;
  });
      $('#scroll_top').hide();
  $(window).scroll(function(){
      var count = $(this).scrollTop();

      if(count < 100){
          $('#scroll_top').fadeOut();
      }
      else{
          $('#scroll_top').fadeIn();
      }
  });
   
    
  });
