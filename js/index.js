$(function (){
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
$('#dianji').focus(function(){
  $('.zhuti').hide();
  $('.ss').show();  
})
$('.back').on('click',function () {
  $('.zhuti').show();
  $('.ss').hide();  
  })



  //*************** */
  $('.shous').click(function () {
    //拿到input的值
    var neirong = $('#dianji').val();
    //清空
    console.log($('#dianji')[0]);
    console.log($('#dianji').val());
    console.log('12');
    
    
    //$('#dianji').val("");
    //为空就打断
    // if(neirong.length==0){
    //   return;
    // }
    // lisi(neirong);
    
  })


  //加载历史
  function lisi(arr) {
    if(arr.length>0){
      $('.jilu').show();
    }else{
      $('.jilu').hide();
    }
    var htmlstr = template("searchlist", {list: arr});
    $(".searchhistory").html(htmlstr);
    }
})