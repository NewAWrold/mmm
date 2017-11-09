/**
 * Created by cr on 2017/11/6.
 */
;(function () {
  $.ajax({
    type : "get",
    url : "http://"+tools.address()+":9090/api/getcategorytitle",
    success : function (data) {
      console.log(data);
      $('.cate_all').html( template('tit',data) );

     $('[data-id]').each(function (i,e) {
       // console.log(v)
       var id = $(e).data('id');
       var that =$(e);
       console.log(id);
       $.ajax({
         type : "get",
         url : "http://"+tools.address()+":9090/api/getcategory",
         data : {titleid:id},
         success : function (data) {
           console.log(data);
           that.next('.cate_list').html( template('con',data) );
         }
       })
     })

    }
  });

  //点击事件手风琴效果
  $('.cate_all').on('click','.cate_title',function () {
    console.log('我太菜了');
    $(this).next('.cate_list').toggle();
  })

 })();
