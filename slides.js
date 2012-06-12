$(document).ready(function(){
  $('.slide').first().addClass("active");
});

$(document).on("keypress", function(e) {
  var slide = $('.slide.active');
  if (e.keyCode == 106) {
    var next = slide.next(".slide");
    if (next.length) {
      slide.removeClass("active")
      next.addClass("active");
    }
  }
  else if (e.keyCode == 107) {
    var prev = slide.prev(".slide");
    if (prev.length) {
      slide.removeClass("active");
      prev.addClass("active");
    }
  }
});
