// let daohang = document.querySelector('.daohang');
//  let lis = document.querySelectorAll('.lis');
//  let ab = document.querySelectorAll('.ab');
//  for (let i=0;i<lis.length;i++){
//     lis[i].onmouseover=function(){
//           ab[i].style.fontSize='20px';
//         }
//      lis[i].onmouseout=function(){
//          ab[i].style.fontSize='18px';
//      }
//
//      }
//
// // banner
// let bannerbox = document.querySelector('.banner-box');
// let lefts = bannerbox.querySelector('.banner-left');
// let rights = bannerbox.querySelector('.banner-right');
// let mid = bannerbox.querySelector('.banner-mid');
// let mid1 = document.querySelector('.banner-mid1')
// let yuan = document.querySelectorAll('.smallyuan');
// let li = mid.querySelectorAll('li');
// console.log(li);
//
//
// let i=0;
// lefts.onclick=function(){
//     if (i==2) {
//         // mid1.style.left=0+'px';
//        return;
//     }
//     i++;
//    // mid1.style.left=-1080*i+'px';
//     animate(mid1,{left:-1080*i})
// };
// rights.onclick=function(){
//     if (i==0) {
//         // mid1.style.left=-3240+'px';
//        return;
//     }
//     i--;
//     // mid1.style.left=-1080*i+'px';
//     animate(mid1,{left:-1080*i})
// };
//
// let t = setInterval(function(){
//     if (i==2) {
//         i--;
//         animate(mid1,{left:-1080*i});
//     }else if(i!=2){
//         i++;
//         animate(mid1,{left:-1080*i})
//     }
//
// },3000)

$(function(){
  // 头部鼠标移入放大效果
  $('.daohang>li>a').on('mouseover',function(){
      $(this).css({width:90,color:'pink'}).on('mouseout',function(){$(this).css({width:80,color:'#fff'})})
  })


// banner轮播图


let lis = $('.lis1');
let btnL=$('.banner-left');
let btnR=$('.banner-right');
btnL.on('click',function(){
    let next = $('.active').next();
    if(next.length){
        move(next,'left')
    }else{
        next=lis.eq(0);
        move(next,'left')
    }

})

 btnR.on('click',function(){
        let next = $('.active').prev();
        if(next.length){
            move(next,'right')
        }else{
            next=lis.eq(2);
            move(next,'right')
        }

    })

    setInterval(function(){
        btnR.triggerHandler('click')
    },3000)


let move = function(obj,dir){
let active =$('.active');
  active.addClass(dir).delay(1000).queue(function(){
      $(this).removeClass('active').removeClass(dir);
      $(this).dequeue();
  })
    let dirs=dir=='left'? 'right':'left';
    obj.addClass(dirs);
    obj[0].offsetWidth;
    obj.removeClass(dirs).addClass('active');
}







$('.zixun1').on('mouseover',function(e){
    $('.opc1').css({'top':0})
})
$('.zixun1').on('mouseout',function(e) {
    $('.opc1').css({'top': -296})
})

    $('.zixun2').on('mouseover',function(e){
        $('.opc2').css({'top':0})
    })
    $('.zixun2').on('mouseout',function(e) {
        $('.opc2').css({'top': -296})
    })

    $('.jiqiao1').on('mouseover',function(e){
        $('.opc3').css({'top':0})
    })
    $('.jiqiao1').on('mouseout',function(e) {
        $('.opc3').css({'top': -296})
    })
    $('.jiqiao2').on('mouseover',function(e){
        $('.opc4').css({'top':0})
    })
    $('.jiqiao2').on('mouseout',function(e) {
        $('.opc4').css({'top': -296})
    })

    $('.zuopin1').on('mouseover',function(e){
        $('.opc5').css({'top':0})
    })
    $('.zuopin1').on('mouseout',function(e) {
        $('.opc5').css({'top': -401})
    })

    $('.zuopin2').on('mouseover',function(e){
        $('.opc6').css({'top':0})
    })
    $('.zuopin2').on('mouseout',function(e) {
        $('.opc6').css({'top': -401})
    })


 $('.db1>dd>a').on('mouseover',function(){$(this).css({color:'pink'})}).on('mouseout',function(){$(this).css({color:'#fff'})})
})