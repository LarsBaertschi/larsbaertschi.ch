var offset = $(".page-title").offset();
$(window).scroll(function(event) {
  var st = $(this).scrollTop();
  var max = document.documentElement.clientHeight*0.65;
  var maxMargin = document.documentElement.clientWidth-$(".page-title").width()*1.2;
  $(".page-title").css("margin-right", st/max*maxMargin+$(".page-title").width()*0.1);
  console.log(max, st, maxMargin);
});

$(window).scroll();
