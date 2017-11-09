/**
 * Created by cr on 2017/11/5.
 */

var tools={
  getURL:function () {
  var search = location.search.slice(1);
  search = search.split("&");
  var searchObj = {};
  for (var i = 0; i < search.length; i++) {
    var key = search[i].split('=')[0];
    var val = decodeURI(search[i].split('=')[1]);
    searchObj[key] = val;
  }
  return searchObj;
},
  address : function () {
    return "192.168.32.92"
  }
};