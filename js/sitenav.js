/**
 * Created by cr on 2017/11/8.
 */
;(function () {

  $.ajax({
    type : "get",
    url : "http://"+tools.address()+":9090/api/getsitenav",
    dataType : "json",
    success : function (data) {
      console.log(data);
      $('.sitenav_more').html( template('tpl',data));
    }
  })
  })();