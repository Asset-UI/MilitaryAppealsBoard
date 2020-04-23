$(document).ready(function() {
  $('.Tab, .CaseFilter').on('click', function() {
    $('.Tab, .CaseFilter').removeClass('selected');
    $(this).focus().addClass('selected');
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
  $("p.UserName").on('click', function(){
    $( 'body' ).addClass('NoScroll');
    $('.FilterContainer, .DefaultContent').removeClass('hidden');
    $('.FilterPopup').removeClass(' animated slideOutDown').addClass(' animated slideInUp');
    $( '.Content').addClass('hidden');
    $('.Content.LastContent').removeClass('hidden');
  })
  $("img.Filter").on('click', function(){
    $( 'body' ).addClass('NoScroll');
    $('.FilterContainer, .DefaultContent').removeClass('hidden');
    $('.FilterPopup').removeClass(' animated slideOutDown').addClass(' animated slideInUp').css('height', '250');
  })
  $(".Option").on('click', function(){
    if ($(this).hasClass('FirstScreen')){
      $('.FirstScreen').removeClass('Selected');
    }
    else if ($(this).hasClass('SecondScreen')){
      $('.SecondScreen').removeClass('Selected');
    }
    $(this).addClass('Selected')
  })
  $(".Option").on('click', function(){
    let MainContent = $(this).parent('.Content');
    if ($(MainContent).hasClass('DefaultContent')){
      $('.FilterPopup').css('height', '375');
      $(MainContent).addClass('hidden');
      $('.SecondaryContent').removeClass('hidden');
    }
  })
  $('.Content.SecondaryContent img.BackBtn').on('click', function(){
    $('.FilterPopup').css('height', '250');
    $('.Content').addClass('hidden');
    $('.DefaultContent').removeClass('hidden');
  })
  $('.LawyerOption.One label.switch').on('click', function(){
    $(".LawyerOption.Two label").toggleClass('toggeled');
  });
  $('#checkbox').on('click', function(){
    if ($(this).is(':checked')){
        $("#checkboxtwo").attr('type' , 'checkbox');
        $("img.SaveBtn").fadeIn();
    }
    else{
      $("#checkboxtwo").prop("checked", false);
      $("#checkboxtwo").attr('type' , '');
      $('.LawyerName').addClass('hidden');
      $(".Attachment").removeClass('Clickable');
      $("img.SaveBtn").fadeOut();
    }
  });
  $('#checkboxtwo').on('click', function(){
      if ($(this).is(':checked')){
        $( 'body' ).addClass('NoScroll');
        $('.FilterContainer, .ContentCaseDetails').removeClass('hidden');
        $('.FilterPopup').removeClass(' animated slideOutDown').addClass(' animated slideInUp');
        $(".ContentCaseDetails .FormGroup").show();
    }
    else{
      $('.LawyerName').addClass('hidden');
      $(".Attachment").removeClass('Clickable');
    }
  });
  $(".FormGroup button.btn.btn-primary.LogOut").on('click', function(){
    $( 'body' ).removeClass('NoScroll');
    $('.FilterPopup').removeClass(' animated slideInUp').addClass(' animated slideOutDown').css('height', '');
    setTimeout (function(){
      $('.FilterContainer, .LastContent').addClass('hidden');
      $('.Content').addClass('hidden');
    }, 300);
    $("#checkboxtwo").prop("checked", true);
    $('.LawyerName').removeClass('hidden');
    $(".Attachment").addClass('Clickable');
  })
  $(".Attachment").on("click", function(){
    if($(this).hasClass("Clickable")){
      $( 'body' ).addClass('NoScroll');
      $('.FilterContainer, .ContentCaseDetails').removeClass('hidden');
      $('.FilterPopup').removeClass(' animated slideOutDown').addClass(' animated slideInUp');
      $(".ContentCaseDetails .FormGroup").hide();
      $('.FilterPopup span.ExpandCollapse').addClass("Safe");
    }
  })
  $(function(){
    let input = $('textarea.form-control.mb-1');   
    input.on('keyup', function(){
        var newValue = $(this).val().length;
        $("#remainingC p:last-child").html((newValue));
    });   
   });
});
// -----------------SCROLL-TOUCH-MOVE-------------------
let start = null;

document.getElementById("ExpandCollapse").addEventListener("touchstart", function(e) {
    start = e.changedTouches[0];
});


document.getElementById("ExpandCollapse").addEventListener("touchend", function(e) {
  let end = e.changedTouches[0];

  if(end.screenY - start.screenY > 0)
  {
    $( 'body' ).removeClass('NoScroll');
    $('.FilterPopup').removeClass(' animated slideInUp').addClass(' animated slideOutDown').css('height', '');
    setTimeout (function(){
    $('.FilterContainer, .LastContent').addClass('hidden');
    $('.Content').addClass('hidden');
  }, 300);
  if ($('.ExpandCollapse').hasClass('Safe')){
    $("#checkboxtwo").prop("checked", true);
    $(".Attachment").addClass('Clickable');
    $('.ExpandCollapse').removeClass("Safe");
  }
  else{
    $("#checkboxtwo").prop("checked", false);
    $(".Attachment").removeClass('Clickable');
  }
  }
});
// -----------------SCROLL-TOUCH-MOVE-------------------