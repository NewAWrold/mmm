/**
 * Created by cr on 2017/11/7.
 */
;(function () {
  $.ajax({
    type : "get",
    url : "http://192.168.32.47:9090/api/getinlanddiscount",
    dataType : 'json',
    success : function (data) {
      console.log(data);
     $('.content').html( template('tpl',data));
    }
  })
 })();