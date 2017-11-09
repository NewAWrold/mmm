/**
 * Created by cr on 2017/11/7.
 */
;(function () {
  $.ajax({
    type : "get",
    url : "http://"+tools.address()+":9090/api/getinlanddiscount",
    dataType : 'json',
    success : function (data) {
      console.log(data);
     $('.content').html( template('tpl',data));
    }
  })
 })();