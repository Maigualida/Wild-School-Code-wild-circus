
$('div').on('click', function() {
      $(this).toggleClass('show-description');
  });

$(document).ready(function() {
	$(this).css({'background-color': '#665C64'});
    $(this).find('.photos').hide();
  $('.element3').on('mouseenter', function() {
    $(this).css({'background-color': '#252b30', 'font-weight': 'bold', 'color':'white'});
    $(this).find('.photos').show();
  });
  $('.element3').on('mouseleave', function() {
    $(this).css({'background-color': '#665C64'});
    $(this).find('.photos').hide();
  });
});