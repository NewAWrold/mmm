/**
 * Created by cr on 2017/11/5.
 */
;(function () {
  //通过ajax请求拿到数据渲染主页nav
  $.ajax({
    type : "get",
    url : "http://"+tools.address()+":9090/api/getindexmenu",
    success : function (data) {
      // console.log(data.result[0].img);

      $('.ind-keng').html(template('tpl',data));
      $('.ind-keng').find('li:gt(7)').hide();
    }
  })
 })();


$('.ind-keng').on('click','.eight',function () {
  // console.log($('li:gt(8)'));
  $('li:gt(7)').toggle();
});


//折扣商品列表
$.ajax({
  type : "get",
  url : "http://"+tools.address()+":9090/api/getmoneyctrl",
  success : function (data) {
    console.log(data);
    $('.ind_tit_list').html( template('zk',data) );
  }
 });






