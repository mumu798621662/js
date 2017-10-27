$(function(){
  let hei ={};
  let bai ={};
  let kongbai={};
  let isAI=true;
  // 画线
  for(let i=0;i<15;i++){
    $('<div>').addClass('hang').appendTo('.qipan');
    $('<span>').addClass('shu').appendTo('.qipan');
     for(let j=0;j<15;j++){
         kongbai[i+'_'+j]={x:i,y:j}
       $('<li>').addClass('qizi').attr('id',i+'_'+j).data('pos',{x:i,y:j}).appendTo('.qipan')
     }
  }

  // 落子
    let flag=true;
    $('.qipan .qizi').on('click',function() {
        if ($(this).hasClass('hei') || $(this).hasClass('bai')) {
            return;
        }
        let data = $(this).data('pos');
        if (flag) {
            $(this).addClass('hei');
            hei[data.x + '_' + data.y] = true;
            delete kongbai[data.x + '_' + data.y];
            console.log(judge(data, hei))
            if (judge(data, hei) >= 5) {
                alert('黑棋胜');
                $('.qipan .qizi').off();

            }
            if (isAI) {
                let pos = fn();
                $(`#${pos.x}_${pos.y}`).addClass('bai');
                bai[pos.x + '_' + pos.y] = true;
                delete kongbai[pos.x + '_' + pos.y];
                console.log(judge(data,bai))

                if (judge(pos, bai) >= 5) {
                    alert('白棋胜');
                    $('.qipan .qizi').off();
                }
                 return

            }
        }
        else {
                $(this).addClass('bai');
                bai[data.x + '_' + data.y] = true;
                delete kongbai[pos.x + '_' + pos.y];
                if (judge(data, bai) >= 5) {
                    alert('白棋胜');
                    $('.qipan .qizi').off();


                }
            }
            flag = !flag;
    })

 let judge = function(pos,color){
      let rows=1,cols=1,zx=1,yx=1;
      let i=pos.x;
      let j=pos.y+1;
      console.log(color)
      while(color[i+'_'+j]){
        rows++;
        j++
      }
      j=pos.y-1
      while(color[i+'_'+j]){
        rows++;
        j--;
      }

     i=pos.x+1;j=pos.y;
      while(color[i+'_'+j]){
        cols++;
        i++;
      }
     i=pos.x-1;
     while(color[i+'_'+j]){
         cols++;
         i--;
     }

     i=pos.x+1,j=pos.y+1;
     while(color[i+'_'+j]){
       zx++;
       i++;
       j++;
     }
     i=pos.x-1,j=pos.y-1;
     while(color[i+'_'+j]){
         zx++;
         i--;
         j--;
     }


     i=pos.x+1,j=pos.y-1;
     while(color[i+'_'+j]){
         yx++;
         i++;
         j--;
     }
     i=pos.x-1,j=pos.y+1;
     while(color[i+'_'+j]){
         yx++;
         i--;
         j++;
     }
     return Math.max(rows,cols,zx,yx);
 }

 let fn = function(){
   let max=-Infinity,max1=-Infinity;
   let zuobiao =null,zuobiao1=null;
   for (let i in kongbai){
       console.log(kongbai)

       let score = judge(kongbai[i],bai)
           if(score>max){
               max=score;
               zuobiao=kongbai[i]
           }
       }

     for (let i in kongbai){


         let score = judge(kongbai[i],hei)
         if(score>max1){
             max1=score;
             zuobiao1=kongbai[i]
         }

     }
     return (max>max1)?zuobiao:zuobiao1  ;


   }


 })
















