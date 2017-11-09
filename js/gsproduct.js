/**
 * Created by cr on 2017/11/8.
 */

;(function () {

  //省级
  $('.sel_choise .shop').on('click',function () {
    if ($(this).hasClass('yes')){
      $(this).removeClass('yes');
      $('.gs_select').children().remove();
      return false;
    }
    $.ajax({
    type : "get",
    url : "http://"+tools.address()+":9090/api/getgsshop",
    dataType : 'json',
    success : function (data) {
      // console.log(data);

      $('.sel_choise .shop').addClass('yes');
      $('.gs_select').html( template('tpl',data) );
    }
  });
  });

  //市级
  $('.sel_choise .area').on('click',function () {
    if ($(this).hasClass('yes')){
      $(this).removeClass('yes');
      $('.gs_select').children().remove();
      return false;
    }
    $.ajax({
      type: "get",
      url: "http://" + tools.address() + ":9090/api/getgsshoparea",
      dataType: 'json',
      success: function (data) {
        // console.log(data);
        $('.sel_choise .area').addClass('yes');
        $('.gs_select').html(template('tpl2', data));
      }
    })
  })

  $('.sel_choise .allPrice').on('click',function () {
    if ($(this).hasClass('yes')){
      $(this).removeClass('yes');
      $('.gs_select').children().remove();
      return false;
    }
    $('.sel_choise .allPrice').addClass('yes');
    $('.gs_select').html('<div class="rows">全部价格</div>');


  });

  var shopid = 0;
  var areaid = 0;
  render(shopid,areaid);


  $('.gs_select').on('click','[data-shopid]',function () {
     shopid = $(this).data("shopid");
    // console.log($(this).text());
    $('.sel_choise .shop').text($(this).text());

    render(shopid,areaid);
  });



  $('.gs_select').on('click','[data-areaid]',function () {
     areaid = $(this).data("areaid");
    render(shopid,areaid);
    console.log(areaid)

  });



  function render(shopid,areaid) {
    $.ajax({
      type:"get",
      url: "http://"+tools.address()+":9090/api/getgsproduct",
      dataType : "json",
      data:{
        shopid:shopid,
        areaid: areaid
      },
      success : function (data) {
        // console.log(data);
        $('.gspro_house>ul').html( template('tpl3',data));
      }

    })
  }

})();