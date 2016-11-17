$(function(){
	   // 立即领取动画：
  setInterval(function() {
    $('.divs6').toggleClass('show');
  }, 500)
 
    // 页面福利动画效果：
    $(window).on('scroll', function() {
        var obj = $(document).scrollTop();
        console.log(obj)
        if (obj >= 400) {
          $('.divs4 .hdr').addClass('active');
        } else {
          $('.divs4 .hdr').removeClass('active');
        }
        if (obj >= 850) {
          $('.divs5').addClass('active');
        } else {
          $('.divs5').removeClass('active');
        }
      }) 
})
