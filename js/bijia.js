/**
 * Created by cr on 2017/11/6.
 */
;(function () {

  console.log(tools.getURL().productid);

  $.ajax({
    type : "get",
    url : "http://192.168.32.47:9090/api/getproduct",
    dataType : "json",
    data : {productid:tools.getURL().productid},
    success : function (data) {
      // console.log(data);
    $('.one').html( template('tpl',data) );
    }
  });

  $.ajax({
    type : "get",
    url : "http://192.168.32.47:9090/api/getproductcom",
    dataType : "json",
    data : {productid:tools.getURL().productid},
    success : function (data) {
      console.log(data);
      $('.two').html( template('discuss',data) );
    }
  })
})();