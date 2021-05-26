

$(document).ready(function(){
  //click 이벤트
  $('#arroWrap').click(function() {
    $('#arrow1').toggleClass('rotater');
    $('#arrow2').toggleClass('rotatel');
    $('.customer').toggleClass('customerOpen');
  });

  //Tabmenu 이벤트
  $('.resume-content > li').click(function(){
    let index = $(this).index();
    $('.resume-content').removeClass('on');
    $('.resume-content').eq(index).addClass('on');
    $('.tabMenu').hide();
    $('.tabMenu').eq(index).show();
  });
});

