$(function (){
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
$('#dianji').focus(function(){
  $('.zhuti').hide();
  $('.searchpage').show();  
})
$('.back').on('click',function () {
  $('.zhuti').show();
  $('.searchpage').hide();  
  })



  //*************** */
  //进来搜索页时，先要判断是否有搜索历史记录， 如果有， 就显示，如是没有
  var keysArr = getKeywords();
  render(keysArr);

  //点击搜索按钮事件
  $(".searchpage .header .search").click(function() {
      //拿到搜索框里的值
      var inputvalue = $(".searchpage .header input").val();
      //清空input
      $(".searchpage .header input").val("");

      if (inputvalue.length == 0) return;

      //拿到数组
      var keysArr = getKeywords();

      //把搜索框里的文字添加到数组
      keysArr.push(inputvalue);

      //存
      window.localStorage.setItem("keywords", JSON.stringify(keysArr));

      //重新渲染
      render(keysArr);
  });

  //清空搜索历史点击事件
  $(".searchhistory").on("click", ".clear", function() {
      //1. 删除数据
      localStorage.removeItem("keywords");

      //2. 重新刷新页面
      render([]);
  });


  //获取搜索历史记录
  function getKeywords() {
      var keysArr = [];
  
      var keywordsStr = localStorage.getItem("keywords");
      // console.log(keywordsStr);
      if (keywordsStr) {
          keysArr = JSON.parse(keywordsStr);
      }

      return keysArr;
  }

  //重新渲染页面
  function render(arr) {
      //1.显示搜索记录的dom
      if (arr.length > 0) {
          $(".searchhistory").show();
      } else {
          $(".searchhistory").hide();
      }
      var htmlstr = template("searchlist", {list: arr});
      $(".searchhistory").html(htmlstr);
  }
});