/**
 * Created by cr on 2017/11/6.
 */
;(function () {
  // console.log(tools.getURL());
  $.ajax({
    type : "get",
    url : "http://"+tools.address()+":9090/api/getcategorybyid",
    data : {categoryid:tools.getURL().categoryId},
    success : function (data) {
      // console.log(data);
    $('.prolist_top .info').html(data.result[0].category)
    }
  });


  var currentPage=1;
  var page;
  render();

  //点击上一页
  $('.pages').on('click','.prev_btn',function () {
    if(currentPage<=1){
      return;
    }
    currentPage--;
    render();
  });
  $('.pages').on('click','.next_btn',function () {

    if(currentPage>=page){
     return;
    }
    currentPage++;
    render();
  });

  $('.pages').on('change','select',function () {
    currentPage=$(this).val();
    render();
  });


function render() {
  $.ajax({
    type : "get",
    url : "http://"+tools.address()+":9090/api/getproductlist",
    data:{
      categoryid:tools.getURL().categoryId,
      pageid : currentPage
    },
    dataType : "json",
    success : function (data) {
      console.log(data);
      data.category = tools.getURL().category;
      $('.prolist_content>ul').html( template('tpl',data) );
      //总页数
       page = Math.ceil(data.totalCount/data.pagesize);
      data.pages = page;
      data.currentPage = currentPage;
      $('.pages').html( template('pages',data) );
        $("select").val(currentPage);


      //传的参数有哪些：pageid
      //我点击上一页按钮的时候要发ajax请求 pageid++
      //点击下一页的时候 pageid--
      //点击select获取他的值pageid=值.select的长度必须=pages,我们遍历他.
      //发送ajax请求时tpl也需要改变
    }
  });
}
 })();