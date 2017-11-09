/**
 * Created by cr on 2017/11/7.
 */
;(function () {

  //分页功能
  var currentPage = 0;
  var pages;
  render();

  //点击事件
  $('.page').on('click','.prve_btn',function () {
    if (currentPage < 1){
      return false;
    }
    currentPage--;
    render();
  });
  $('.page').on('click','.next_btn',function () {
      if (currentPage >= pages-1){
        return false;
      }
      currentPage++;
      render();
  });
  $('.page').on('change','select',function () {
    currentPage = $(this).val();
    console.log(currentPage);
    render();
  });




  function render() {
    $.ajax({
      type: "get",
      url: "http://"+tools.address()+":9090/api/getmoneyctrl",
      dataType: "json",
      data: {pageid: currentPage},

      success: function (data) {

        $('.ind_tit_list').html(template('tpl', data));
        data.currentPage = currentPage;
        pages = Math.ceil(data.totalCount / data.pagesize);
        data.pages = pages;
        $('.page').html(template('page', data));
         $('select').val(currentPage);
      }
    })
  }


})();