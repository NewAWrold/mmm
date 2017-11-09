/**
 * Created by cr on 2017/11/8.
 */

;(function () {
  // console.log(tools.getURL().brandtitleid);
  $.ajax({
    type : "get",
    url : "http://"+tools.address()+":9090/api/getbrand",
    dataType : "json",
    data:{brandtitleid:tools.getURL().brandtitleid},
    success : function (data) {
      console.log(data);
      $('.top10>ul').html( template('tel',data));
      $('[data-emid]').eq(0).addClass('first');
      $('[data-emid]').eq(1).addClass('second');
      $('[data-emid]').eq(2).addClass('three');

    }
  });
  $.ajax({
    type : "get",
    url : "http://"+tools.address()+":9090/api/getbrandproductlist",
    dataType : "json",
    data:{
      brandtitleid:tools.getURL().brandtitleid,
      pagesize:4
    },
    success : function (data) {
      console.log(data);
      $('.Sales').html( template('tpl2',data));


      // for(var i = 0; i <data.result.length; i++){
      //   console.log(data.result[i].productId);
      //   var id =data.result[i].productId;
      //   $.ajax({
      //     type : 'get',
      //     url : "http://"+tools.address()+":9090/api/getproductcom",
      //     dataType : "json",
      //     data : {productid:id},
      //     success : function (data) {
      //       console.log(data);
      //     }
      //   })
      // }
      $('[data-productid]').each(function (i,e) {
        var id = $(this).data('productid');
        $.ajax({
              type : 'get',
              url : "http://"+tools.address()+":9090/api/getproductcom",
              dataType : "json",
              data : {productid:id},
              success : function (data) {
                console.log(data);
              $('.italkyoulisten').html( template('tpl3',data))
              }
            })
      })
    }
  })
 })();