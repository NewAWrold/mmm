/**
 * Created by cr on 2017/11/7.
 */
;(function () {
  console.log(tools.getURL().productid);
  $.ajax({
    type : "get",
    url : "http://192.168.32.47:9090/api/getdiscountproduct",
    data : {productid:tools.getURL().productid},
    dataType : 'json',
    success : function (data) {
      console.log(data);
      $('.country_content').html( template('tpl',data) );
    }
  })
 })();