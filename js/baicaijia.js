/**
 * Created by cr on 2017/11/7.
 */
$.ajax({
  type : "get",
  url : 'http://'+tools.address()+':9090/api/getbaicaijiatitle',
  success : function (data) {
    console.log(data);
    var lis="";
    var titleid = null;
    for(var i = 0; i < data.result.length; i++){
        // console.log(i);
        var con =data.result[i].title;
        // console.log(con)
      lis =lis+ "<li data-id="+i+"><a href='#'>"+con+"</a></li>";
      // var li=lis.replace("undefined","");
      // console.log(lis);
      $('.nav').html(lis);
         titleid = i;
      //第二次请求
    render(titleid);
    // $('.nav').append(lis);
    }
    var width = 0;
    $('[data-id]').each(function (i,e) {
      width += $(e).outerWidth(true);
    });
    $('.nav').css({'width':width});
    // console.log(width);

    $('[data-id]').on('click',function () {
      var id = $(this).data(id).id;
      // $(this).find('a').css({'border-bottom':'3px solid black'});
      $(this).find('a').addClass('border_red').parents().siblings('[data-id]').find('a').removeClass('border_red');
      // console.log(id)
      render(id);
    });


  function render(id) {
    $.ajax({
      type : "get",
      url : 'http://'+tools.address()+':9090/api/getbaicaijiaproduct',
      data : {titleid:id},
      success : function (data) {
        // console.log(data);
        $('.bcj_product>ul').html(template('tpl',data));
        flag=false;
      }
    });
  }
  }
});

