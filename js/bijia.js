/**
 * Created by cr on 2017/11/6.
 */
;(function () {

  // console.log(tools.getURL().category);


  $.ajax({
    type : "get",
    url : 'http://'+tools.address()+':9090/api/getproduct',
    dataType : "json",
    data : {productid:tools.getURL().productid},
    success : function (data) {
      // console.log(data);
      data.two_mianbaoxie =tools.getURL().category;
    $('.one').html( template('tpl',data) );

      $('.prolist_top>.info').html(substr(data.result[0].productName)[0]);
    }
  });



  $.ajax({
    type : "get",
    url : 'http://'+tools.address()+':9090/api/getproductcom',
    dataType : "json",
    data : {productid:tools.getURL().productid},
    success : function (data) {
      console.log(data);
      $('.two').html( template('discuss',data) );
    }
  })
  
  function substr(str) {
    str =str.split(" ");
    return str;
  }
})();