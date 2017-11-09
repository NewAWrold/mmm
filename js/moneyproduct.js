/**
 * Created by cr on 2017/11/7.
 */
;(function () {
  console.log(tools.getURL().productid);
  $.ajax({
    type : "get",
    url : "http://"+tools.address()+":9090/api/getmoneyctrlproduct",
    dataType : 'json',
    data : {productid:tools.getURL().productid},
    success : function (data) {
      console.log(data);
      $('.mpro_content').html( template('content',data) );
    }
  })
 })();