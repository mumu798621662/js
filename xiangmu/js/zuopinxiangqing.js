$(function() {
    let lis = $('.neirong>li');
    console.log(lis)
    let imgs = $('.neirong>li>img');
    let opc = $('.opc');


    let indexs;
    $(document).mousedown(function(){
        return false;
    })
    lis.on('click', function () {
        indexs = $(this).index();
        opc.addClass('active');
        let src = $('img', this).attr('src');
        $('.opc>img').attr('src', src)
        console.log(indexs)
    })

    $('.closes').on('click', function () {
        opc.removeClass('active')
    })

    $('.slide-left').on('click', function () {

        if (indexs <= 0) {
            // noinspection JSAnnotator
            indexs = lis.length;
        }
        indexs--;
        let src = $('img', lis[indexs]).attr('src');
        $('.opc>img').attr('src', src)
    })
    $('.slide-right').on('click', function () {
        if (indexs >= 7) {
            // noinspection JSAnnotator
            indexs = -1;
        }
        indexs++;
        let src = $('img', lis[indexs]).attr('src');
        $('.opc>img').attr('src', src)
    })

     let index1;
    lis.on('mouseover',function(){
        index1=$(this).index();
      $('.opcsmall',lis[index1]).css({top:0,left:0})
    });
    lis.on('mouseout',function(){
        index1=$(this).index();
        $('.opcsmall',lis[index1]).css({top:-280,left:0})
    });



    $(function () {
        // 头部鼠标移入放大效果
        $('.daohang>li>a').on('mouseover', function () {
            $(this).css({width: 90, color: 'pink'}).on('mouseout', function () {
                $(this).css({width: 80, color: '#fff'})
            })
        })
    });



    $('.db1>dd>a').on('mouseover',function(){$(this).css({color:'pink'})}).on('mouseout',function(){$(this).css({color:'#fff'})})





















});