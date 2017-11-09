/**
 * Created by cr on 2017/11/8.
 */
;(function () {

  $.ajax({
    type : "get",
    url : "http://"+tools.address()+":9090/api/getcoupon",
    dataType : "json",
    success : function (data) {
      console.log(data);
      $('.logo').html( template('tpl',data) );
    }
  })
 })();