// 属性：
//   蛇 arr
// 方法：
// 画线  画蛇
function Snake (){
  this.sence=document.querySelector('.sence');
  this.snake=['0_0','1_0','2_0'];
  this.direction=40;
  this.flag = {'0_0':true,'1_0':true,'2_0':true};
  this.food=[''];
}
Snake.prototype={
    start:function(){
      this.drawLine();
      this.drawSnake();
      this.move();
      this.key();
      this.dropFood();

    },
    drawLine:function(){
        for(let i=0;i<20;i++){
            for(let j=0;j<20;j++){
                this.sence.innerHTML +=`
                  <div class="box" id="${i}_${j}"></div>
               `
            }
        }
    },

    drawSnake:function(){
        this.snake.forEach(element=>{
            document.getElementById(element).classList.add('hot');
        })
    },





    move:function(){
        let that=this;
        this.t=setInterval(function(){
            let oldHead = that.snake[that.snake.length-1];
            let arr = oldHead.split('_');
            let newHead ='';
                if(that.direction==37){
                    newHead = `${arr[0]*1}_${arr[1]*1-1}`
                }else if(that.direction==38){
                    newHead = `${arr[0]*1-1}_${arr[1]*1}`
                }else if(that.direction==39){
                    newHead = `${arr[0]*1}_${arr[1]*1+1}`
                } else if(that.direction==40){
                    newHead = `${arr[0]*1+1}_${arr[1]*1}`
                }
            let newarr = newHead.split('_');
            if(newarr[1]<0 || newarr[1]>19 || newarr[0]<0 || newarr[0]>19 || that.flag[newHead]){
                clearInterval(that.t);
                   alert('game over');
            }
               if(newHead==that.food){
                   that.flag[newHead]=true;
                   that.snake.push(newHead);

                   document.getElementById(that.food).style.background = 'none';
                   that.dropFood();
               }else{
                   that.snake.push(newHead);
                   that.flag[newHead] = true;
                   let wei = that.snake.shift();
                   document.getElementById(wei).classList.remove('hot');
                   delete that.flag[wei];
                   that.drawSnake();
               }
        },300)
    },

    key:function () {
        let that = this;
        document.onkeydown=function(e){

            if(Math.abs(e.keyCode-that.direction)==2){
                return ;
            }
            that.direction = e.keyCode;
        }
    },

 dropFood:function(){
        let x,y;

     do{
          x = Math.floor(Math.random()*20);
          y = Math.floor(Math.random()*20);
      console.log(x)
     }while(this.flag[`${x}_${y}`]);
      this.food = `${x}_${y}`;
        document.getElementById(this.food).style.background =`url('img/pingguo.png') no-repeat center/cover`;

        }







}