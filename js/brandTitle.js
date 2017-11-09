/**
 * Created by cr on 2017/11/8.
 */

;(function () {

  $.ajax({
    type : "get",
    url : "http://"+tools.address()+":9090/api/getbrandtitle",
    dataType : "json",
    success : function (data) {
      console.log(data);
      $('.brand_all_hot ul').html( template('tpl',data) );
    }
  })
  })();