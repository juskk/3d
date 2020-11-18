$(document).ready(function() {
   $('.menu_media_button').click(function(event) {
      $('.menu_media_links').toggleClass('menu_active');
      $('body').toggleClass('lock');
   });
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
 
     var dropdowns = document.getElementsByClassName("menu_media_links");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('menu_active')) {
         openDropdown.classList.remove('menu_active');
       }
     }
   }
 }

 $(window).scroll(function(){
    if($(window).scrollTop()>200){
    $('.go_up').show();
    }
    if($(window).scrollTop()<200){
      $('.go_up').hide();
      }
    
  })

  $(function() {

    $('.go_up').click(function() {

      $("html, body").animate({
        scrollTop:0
      },1000);
    })
  })