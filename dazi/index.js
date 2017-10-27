// 属性：
//    哪些字母，个数，速度，位置，生命，分数
// 方法：
//    产生字母，下落，消除，重新开始，下一关



function Game(){
   this.current=[];
   // 存页面元素
    this.number = 5;
   // 字符的个数
   this.charArr = [
       ['A','img/A.png'],
       ['B','img/B.png'],
       ['C','img/C.png'],
       ['D','img/D.png'],
       ['E','img/E.png'],
       ['F','img/F.png'],
       ['G','img/G.png'],
       ['H','img/H.png'],
       ['I','img/I.png'],
       ['J','img/J.png'],
       ['K','img/K.png'],
       ['L','img/L.png'],
       ['M','img/M.png'],
       ['N','img/N.png'],
       ['O','img/O.png'],
       ['P','img/P.png'],
       ['Q','img/Q.png'],
       ['R','img/R.png'],
       ['S','img/S.png'],
       ['T','img/T.png'],
       ['U','img/U.png'],
       ['V','img/V.png'],
       ['W','img/W.png'],
       ['X','img/X.png'],
       ['Y','img/Y.png'],
       ['Z','img/Z.png']
   ]
    // 字符
   this.speed=10;
   this.position=[];
   this.repeat=[];
   this.gk=1;
   this.score=1;
   this.tagscore=10;
   this.repeat=[];
   this.life=10;
   this.lifeobj=document.querySelector('.life>span');
   this.scoreobj=document.querySelector('.score>span');
}
Game.prototype={
    start:function(){
        this.getchars();
        this.drop();
        this.key();
        this.checkposition();
        this.checkrepeat();

    },
  getchars:function(){
        for (let i=0;i<this.number;i++){
            lefts = (innerWidth-400)*Math.random()+200;
            this.getchar();
        }
},



  getchar:function(){
      let index = Math.floor(Math.random()*this.charArr.length);
      let divs = document.createElement('div');
      // 重复
      while(this.checkrepeat(index)){
          index = Math.floor(Math.random()*this.charArr.length);
      }
        divs.classList.add('div1');
        divs.innerText=this.charArr[index][0];
        divs.style.backgroundImage=`url('${this.charArr[index][1]}')`;
        divs.style.fontSize='0'
        document.body.appendChild(divs);
        let tops=Math.random()*100;
        let lefts = (innerWidth-400)*Math.random()+200;

        // 重叠
        while(this.checkposition(lefts)){
          // this.getchars();
            lefts = (innerWidth-400)*Math.random()+200;
      }

      divs.style.top=`${tops}px`;
        divs.style.left=`${lefts}px`;
        this.current.push(divs);
        this.position.push(lefts);
        this.repeat.push(index)
        // console.log(this.current)
  },

    drop:function(){
       let that = this;
        this.t = setInterval(function(){
            for(let i=0;i<that.current.length;i++){
                let tops = that.current[i].offsetTop+that.speed;
                that.current[i].style.top=`${tops}px`;
                if(tops>=500){
                    document.body.removeChild(that.current[i]);
                    that.current.splice(i,1);
                    that.position.splice(i,1);
                    that.repeat.splice(i,1);
                    that.getchar();
                    that.life--;
                    that.lifeobj.innerText=that.life;
                    if(that.life==0){
                        let flag = confirm('确定：关闭    取消：重新开始')
                        if(flag){
                            close()
                        }else{
                            that.restart();
                        }
                    }


                }
            }
        },300)
    },

key:function() {
    let that = this;
    document.onkeydown = function (e) {
        that.current.forEach(function (element, i) {
            if (e.key.toUpperCase() == element.innerText) {
                document.body.removeChild(element);
                that.current.splice(i, 1);
                that.position.splice(i, 1);
                that.repeat.splice(i,1);
                that.getchar();
                that.score += 1;
                that.scoreobj.innerText=that.score;
                if (that.score == that.tagscore) {
                    let flag = confirm('确定：下一关    取消：重新开始')
                    if(flag){
                        that.next();
                    }else{
                        close()
                    }

                }

            }


        });
    }
},
checkposition:function(lefts){
        let flag = this.position.some(function(value){
            return Math.abs(lefts-value)<60;
        });
        return flag;
    },

next:function(){
    clearInterval(this.t)
    for(let i=0;i<this.current.length;i++){
        document.body.removeChild(this.current[i]);
    }
    this.current.length=0;
    this.position.length=0;
    this.tagscore=10;
    this.repeat.length=0;
    this.score=0;
    this.speed+=2;
    this.number+=1;
    this.start();

},

 checkrepeat:function(element){
        let flag = this.repeat.some(function(value){
            return element==value;
        });
        return flag;
    },

restart:function(){
    clearInterval(this.t)
    for(let i=0;i<this.current.length;i++){
        document.body.removeChild(this.current[i]);
    }
    this.current.length=0;
    this.position.length=0;
    this.tagscore=10;
    this.repeat.length=0;
    this.score=0;
    this.life=10;
    this.score=0;
    this.start();
    this.lifeobj.innerText=this.life;
    this.scoreobj.innerText=this.score;
}

}







