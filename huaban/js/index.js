window.onload=function () {
   let canvas=document.querySelector('canvas');
   let ctx = canvas.getContext('2d')
   let line =document.querySelector('#lines');
   let dash = document.querySelector('#dashes');
   let pencil = document.querySelector('#pencil');
   let erasers = document.querySelector('.erasers');
    let eraser = document.querySelector('#eraser');
   let square=document.querySelector('#square');
   let polys=document.querySelector('#polys');
   let circle = document.querySelector('#circle');
   let polyj = document.querySelector('#polyj');
   let cancle = document.querySelector('#cancle');
   let color1= document.querySelector('#color1');
   let color2= document.querySelector('#color2');
   let strokes= document.querySelector('#strokes');
   let fills= document.querySelector('#fills');
   let texts = document.querySelector('#wenzi');
   let opc = document.querySelector('.opc');
   let tools = document.querySelectorAll('.tools');
   let inputs=document.getElementsByTagName('input')[0];
   let inputf=document.getElementsByTagName('input')[1];
   let clipobj=document.querySelector('.clipobj');
   let clips = document.querySelector('#clips');
   let saves = document.querySelector('#saves');
   let save1 = document.querySelector('#save1');
   let reverse = document.querySelector('#reverse');
   let clears = document.querySelector('#clears');
   let quse = document.querySelector('#quse');

   let draws=new Palette(canvas,ctx,opc,erasers,clipobj);

    for(let i=0;i<tools.length;i++){
        let n = 0;
        tools[i].addEventListener('click',function(){
            if(tools[i].id=='polys'||tools[i].id=='polyj'){
                n =prompt('边数',n);
            }
            draws.draw(tools[i].id,n);
        })
    }
    cancle.onclick=function(){
        draws.cancle();
    }
    eraser.onclick=function(){
        draws.eraser();
    }
    pencil.onclick=function(){
        draws.pencil()
    }
    texts.onclick=function(){
         draws.text1()
}
   inputs.onclick=function(){
        inputs.onblur=function(){
            ctx.strokeStyle=inputs.value;
        }
   }
    inputf.onclick=function(){
        inputf.onblur=function(){
            ctx.fillStyle=inputf.value;
        }
    }
    strokes.onclick=function(){
        draws.strokes()
    }
    fills.onclick=function(){
        draws.fills()
    }
    clips.onclick=function(){
        draws.clip()
    }

    save1.onclick=function () {
            let data= canvas.toDataURL('image/png');
            save1.herf=data;
            save1.download='tu.png';
        }

    reverse.onclick=function(){
        draws.reverse()
    }

    clears.onclick=function(){
        draws.clears();
    }
    quse.onclick=function(){
        draws.quse()
    }


 let lis1=document.querySelectorAll('.ul1>li');
 let lis2=document.querySelectorAll('.ul2>li');
 let lis3=document.querySelectorAll('.ul3>li');
 let lis4=document.querySelectorAll('.ul4>li');
lis1.forEach(element=>{
    element.addEventListener('click',function(){
        for(let i=0;i<lis1.length;i++){
            lis1[i].classList.remove('active');
        }
        // element.classList.remove('active');
        element.classList.add('active')
    })
})
    lis2.forEach(element=>{
        element.addEventListener('click',function(){
            for(let i=0;i<lis2.length;i++){
                lis2[i].classList.remove('active');
            }
            // element.classList.remove('active');
            element.classList.add('active')
        })
    })

    lis3.forEach(element=>{
        element.addEventListener('click',function(){
            for(let i=0;i<lis3.length;i++){
                lis3[i].classList.remove('active');
            }
            // element.classList.remove('active');
            element.classList.add('active')
        })
    })

    lis4.forEach(element=>{
        element.addEventListener('click',function(){
            for(let i=0;i<lis4.length;i++){
                lis4[i].classList.remove('active');
            }
            // element.classList.remove('active');
            element.classList.add('active')
        })
    })


    }







