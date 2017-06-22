var offset = $(".page-title").offset();
$(window).scroll(function(event) {
  var st = $(this).scrollTop();
  $(".page-title").css("margin-right", st * 1.5 + 30);
  console.log(st);
});
