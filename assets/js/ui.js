$(document).ready(function() {
  $('.Tab').on('click', function() {
    $('.Tab').removeClass('selected');
    $(this).addClass('selected');
  });
  $(function() {
    $('#passwordfield').on('keyup', function() {
      if ($(this).val()) $('.eye').show();
      else $('.eye').hide();
    });
    $('.eye').on('mousedown', function() {
      $('#passwordfield').attr('type', 'text');
    });
    $('.eye').on('mouseup', 'mouseout', function() {
      $('#passwordfield').attr('type', 'password');
    });
  });
});
