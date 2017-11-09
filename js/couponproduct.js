/**
 * Created by cr on 2017/11/8.
 */
;(function () {
  // console.log(tools.getURL().couponId);
  $.ajax({
    type: "get",
    url: "http://" + tools.address() + ":9090/api/getcouponproduct",
    dataType: "json",
    data: {couponid: tools.getURL().couponId},
    success: function (data) {
      // console.log(data);
      $('.couduct_food').html(template('tpl', data));
    }
  });
  document.onselectstart=new Function("return false");
  var id;
    //点击显示图片
  $('.couduct_food').on('click', '[data-id]', function () {
    id = $(this).data('id');
    $('.tanchu').show();
    $('html,body').css({'overflow': 'hidden'});
    $(this).find('img').clone().appendTo('.img');
    $('.img').children('img').css({'width':'100%','height':'100%'});
  });
  //点击左箭头完成图片切换
  $('.arrow-left').click(function () {
    if (id<=0){
      id =$('.pro_left').find('img').length;
    }
    // console.log(id);
    $(this).siblings('.img').children('img').remove();
    $('[data-id]').eq(--id).find('img').clone().appendTo('.img');
    $('.img').children('img').css({'width':'100%','height':'100%'});
  });

  //点击右箭头完成图片切换
  $('.arrow-right').click(function () {
    if (id>=$('.pro_left').find('img').length-1){
      id =0;
    }
    // console.log(id);
    $(this).siblings('.img').children('img').remove();
    $('[data-id]').eq(++id).find('img').clone().appendTo('.img');
    $('.img').children('img').css({'width':'100%','height':'100%'});
  });

  $('.tan_del').click(function () {
    $(this).closest('.tanchu').hide();
    $('html,body').css({'overflow':'visible'});
    $(this).siblings('.img').children('img').remove();
  });

  //鼠标hover时清空自动播放效果
  $('.tan_content').mouseenter(function () {
    clearInterval(timer);
  }).mouseleave(function () {
    setInterval(timer)
  });


  var timer = setInterval(function () {
    $('.arrow-right').click();
  },1000);
})();