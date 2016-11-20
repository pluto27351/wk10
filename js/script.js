$(document).ready(function(){

  $(".name a").hover(function(){
    $(this).next().slideDown();
  });

  $(".name a").mouseleave(function(){
    $(this).next().slideUp();
  });

});
