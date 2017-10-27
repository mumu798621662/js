$(function(){
    // 头部鼠标移入放大效果
    $('.daohang>li>a').on('mouseover',function(){
        $(this).css({width:90,color:'pink'}).on('mouseout',function(){$(this).css({width:80,color:'#fff'})})
    })

 $('.db1>dd>a').on('mouseover',function(){$(this).css({color:'pink'})}).on('mouseout',function() {
     $(this).css({color: '#fff'})
 })





 })
