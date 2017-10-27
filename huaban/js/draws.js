// 方法：画线，虚线，矩形，多边形，多角形，圆，铅笔
//       橡皮   撤销  裁切  新建  保存
//
// 属性：线宽 端点 填充  描边 边数
class Palette {
    constructor(canvas, ctx,opc,erasers,clipobj) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.lineWidth = 1;
        this.style = 'stroke';
        this.fillStyle = '#000';
        this.strokeStyle = '#000';
        this.arr = [];
        this.cw = this.canvas.width;
        this.ch = this.canvas.height;
        this.opc=opc;
        this.erasers=erasers;
        this.clipobj=clipobj;
        this.temp=null;
    }


    draw(type,n) {
        this.opc.onmousedown = function (e) {
            let cx = e.offsetX;
            let cy = e.offsetY;
            e.preventDefault();
            this.opc.onmousemove = function (e) {
                e.preventDefault();
                let ox = e.offsetX;
                let oy = e.offsetY;
                this.ctx.clearRect(0, 0, this.cw, this.ch);
                if (this.arr.length) {
                    this.ctx.putImageData(this.arr[this.arr.length - 1], 0, 0);
                }

                this.ctx.setLineDash([3, 0]);
                this[type](cx,cy,ox,oy,n);
                this.ctx[this.style]();
            }.bind(this);
            this.opc.onmouseup = function () {
                this.arr.push(this.ctx.getImageData(0, 0, this.cw, this.ch));
                this.opc.onmousemove = null;


            }.bind(this)
        }.bind(this)
    }



    lines(cx, cy, ox, oy) {
        this.ctx.beginPath();
        this.ctx.setLineDash([3, 0]);
        this.ctx.moveTo(cx, cy);
        this.ctx.lineTo(ox, oy);
    }

    dashes(cx, cy, ox, oy) {
        this.ctx.beginPath();
        this.ctx.setLineDash([3, 10]);
        this.ctx.moveTo(cx, cy);
        this.ctx.lineTo(ox, oy);
    }

    pencil(){

        this.opc.onmousedown=function(e){
            let cx = e.offsetX;
            let cy = e.offsetY;
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
            if(this.arr.length){
                this.ctx.putImageData(this.arr[this.arr.length-1],0,0);
            }
            this.ctx.beginPath();
            this.ctx.setLineDash([3,0]);
            this.ctx.moveTo(cx,cy);
            this.opc.onmousemove=function(e){
                let ox = e.offsetX;
                let oy = e.offsetY;
                this.ctx.lineTo(ox,oy);
                this.ctx.stroke();
            }.bind(this);
            this.opc.onmouseup=function(){
                this.arr.push(this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height));
                this.opc.onmousemove=null;

            }.bind(this);
        }.bind(this);
    }

    eraser(){
         this.opc.onmousedown=function(){
             this.erasers.style.display='block';
             this.opc.onmousemove=function(e){
                 let ox = e.offsetX-25;
                 let oy = e.offsetY-25;
                 this.erasers.style.left=`${ox}px`;
                 this.erasers.style.top=`${oy}px`;
                 this.ctx.clearRect(ox,oy,this.erasers.offsetWidth,this.erasers.offsetHeight);

             }.bind(this)
             this.opc.onmouseup=function(){
                 this.erasers.style.display='none';
             }.bind(this)
         }.bind(this)
     }

    polys(cx, cy, ox, oy, n) {
        let r = Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cx-oy,2));
        this.ctx.beginPath();
        this.ctx.moveTo(cx + r, cy);
        for (let i = 0; i < n; i++) {
            let x = cx + r * Math.cos(Math.PI * 2 / n * i);
            let y = cy + r * Math.sin(Math.PI * 2 / n * i);
            this.ctx.lineTo(x, y);
        }
        this.ctx.closePath();
    }

    circle(cx, cy, ox, oy) {
        let r = Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cx-oy,2));
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, r, 0, Math.PI * 2);
        this.ctx.closePath();
        // this.ctx[this.style]();
        this.ctx.stroke();
    }


    square(cx, cy, ox, oy) {
        this.ctx.beginPath();
        if(this.style ='stroke'){
            this.ctx.strokeRect(cx, cy, ox - cx,oy - cy);
        }
        else if(this.style ='fill'){
            this.ctx.fillRect(cx, cy, ox - cx,oy - cy);
        }

        this.ctx.closePath();

        // this.ctx.stroke();
    }


    polyj(cx, cy, ox, oy, n) {
        this.ctx.beginPath();
        let rad = Math.PI / n;
        let r = Math.sqrt(Math.pow(cx-ox,2)+Math.pow(cx-oy,2));
        this.ctx.moveTo(cx + r, cy);
        for (let i = 0; i < 2 * n; i++) {
            let r1 = i % 2 ? r / 2 : r;
            let x = cx + r1 * Math.cos(rad * i);
            let y = cy + r1 * Math.sin(rad * i);
            this.ctx.lineTo(x, y);
        }
        this.ctx.closePath();
        // this.ctx[this.style]();

    }

    cancle() {
        if (this.arr.length == 0) {
            return;
        }
        this.arr.pop();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (this.arr.length) {
            this.ctx.putImageData(this.arr[this.arr.length - 1], 0, 0)
        }
    }

    fills(){
        this.style='fill';
    }

    strokes(){
        this.style='stroke';
    }

    text1(){
        let that=this;
        this.opc.onmousedown=function(e){
            that.opc.onmousedown=null;
            let cx = e.offsetX;
            let cy = e.offsetY;
            let lefts=cx,tops=cy;
            let divs = document.createElement('div');
            divs.contentEditable=true;
            divs.style.cssText=`
                width: 200px;
                height:50px;
                border:1px solid #000;
                position:absolute;
                top:${cy}px;
                left:${cx}px;
                cursor:move;
             `;

            this.appendChild(divs);

            divs.onmousedown=function(e){
                let cx =e.clientX;
                let cy = e.clientY;
                let left1=divs.offsetLeft;
                let top1=divs.offsetTop;
                that.opc.onmousemove=function (e) {
                    if (that.arr.length) {
                        that.ctx.putImageData(that.arr[that.arr.length - 1], 0, 0);
                    }
                    let ox =e.clientX;
                    let oy = e.clientY;
                     lefts =left1+ox-cx;
                     tops =top1+oy-cy;
                    divs.style.left=`${lefts}px`;
                    divs.style.top=`${tops}px`;
                }
            }
            divs.onmouseup=function(){
                that.opc.onmousemove=null;
                that.arr.push(that.ctx.getImageData(0, 0, that.cw, that.ch));
            }
            divs.onblur=function(){
                let value = this.innerText;
                that.opc.removeChild(divs);
                that.ctx.font='20px sans-serif';
                that.ctx.textAlign='center';
                that.ctx.textBaseline='middle';
                that.ctx.fillText(value,lefts,tops)
            }
        }
        }

    clip(){
            let that=this;
            this.opc.onmousedown=function (e) {
                let cx=e.offsetX,cy=e.offsetY;
                that.clipobj.style.opacity='1';
                let minX,minY,w,h;
                that.opc.onmousemove=function (e) {
                    let ox=e.offsetX,oy=e.offsetY;
                    minX=cx>=ox?ox:cx;
                    minY=cy>=oy?oy:cy;
                    w=Math.abs(ox-cx);
                    h=Math.abs(oy-cy);
                    that.clipobj.style.width=`${w}px`;
                    that.clipobj.style.height=`${h}px`;
                    that.clipobj.style.left=`${minX}px`;
                    that.clipobj.style.top=`${minY}px`;
                };
            that.opc.onmouseup=function(){
                that.temp=that.ctx.getImageData(minX,minY,w,h);
                that.ctx.clearRect(minX,minY,w,h);
                that.arr.push(that.ctx.getImageData(0,0,that.cw,that.ch));
                that.ctx.putImageData(that.temp,minX,minY);
                that.opc.onmousemove=null;
                that.opc.onmouseup=null;
                that.drug(minX,minY,that.clipobj);
            }
        }
    }

    drug(x,y,obj){
        let that=this;
        this.opc.onmousedown=function(e){
            let cx=e.offsetX,cy=e.offsetY;
            e.preventDefault();
            that.opc.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                let lefts=x+ox-cx, tops=y+oy-cy;
                obj.style.left=`${lefts}px`;
                obj.style.top=`${tops}px`;
                that.ctx.clearRect(0,0,that.cw,that.ch);
                if(that.arr.length){
                    that.ctx.putImageData(that.arr[that.arr.length-1],0,0);
                }
                that.ctx.putImageData(that.temp,lefts,tops);
            };
            that.opc.onmouseup=function(){
                that.arr.push(that.ctx.getImageData(0,0,that.cw,that.ch));
                that.temp=null;
                obj.style.opacity='0';
                that.opc.onmousemove=null;
                that.opc.onmouseup=null;
            }
        }
    }

    reverse(){
       let data1 = this.ctx.getImageData(0,0,this.cw,this.ch);
       for(let i=0;i<data1.data.length;i+=4){
           data1.data[i]=255-data1.data[i];
           data1.data[i+1]=255-data1.data[i+1];
           data1.data[i+2]=255-data1.data[i+2];
       }

       this.ctx.putImageData(data1,0,0);
}

    clears(){
        this.ctx.clearRect(0,0,this.cw,this.ch);
    }

    quse(){
        let data1 = this.ctx.getImageData(0,0,this.cw,this.ch);
        for(let i=0;i<data1.data.length;i+=4){
            data1.data[i]=data1.data[i+1]=data1.data[i+2]=(data1.data[i]+data1.data[i+1]+data1.data[i+2])/3

        }
        this.ctx.putImageData(data1,0,0);
    }



}





