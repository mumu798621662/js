$(function(){
    $(function(){
        // 头部鼠标移入放大效果
        $('.daohang>li>a').on('mouseover',function(){
            $(this).css({width:90,color:'pink'}).on('mouseout',function(){$(this).css({width:80,color:'#fff'})})
        })

let lis=$('.zixun-box li');


for(let i=0;i<lis.length;i++){

 let t =lis[i].onmouseover=function(){
    let x1=$('.xian1',lis[i]);
    let x2=$('.xian2',lis[i]);
    let x3=$('.xian3',lis[i]);
    let x4=$('.xian4',lis[i]);
    let zhezhao=$('.zhezhao',lis[i]);
    zhezhao.animate({'opacity':0})
     x1.animate({'left':0,'top':0}).animate({'width':700,'height':2})
     x2.animate({'right':0,'bottom':0}).animate({'height':850,'width':1})
     x3.animate({'right':0,'bottom':0}).animate({'width':700,'height':1})
     x4.animate({'left':0,'top':0}).animate({'height':850,'width':1})



    lis[i].onmouseout=function(){
        zhezhao.animate({'opacity':1}).queue(function(){
         $(this).finish();
         $(this).dequeue();
        })
        x1.animate({'width':60,'height':1}).animate({'left':156,'top':168}).queue(function(){
            $(this).finish();
            $(this).dequeue();
        })
        x2.animate({'height':60,'width':1}).animate({'right':146,'bottom':188}).queue(function(){
            $(this).finish();
            $(this).dequeue();
        })
        x3.animate({'width':60,'height':1}).animate({'right':156,'bottom':178}).queue(function(){
            $(this).finish();
            $(this).dequeue();
        })
        x4.animate({'height':60,'width':1}).animate({'left':146,'top':178}).queue(function(){
            $(this).finish();
            $(this).dequeue();
        })
    }

 }
}




        $('.db1>dd>a').on('mouseover',function(){$(this).css({color:'pink'})}).on('mouseout',function(){$(this).css({color:'#fff'})})
    })










})