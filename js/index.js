window.addEventListener('load',function(){
var main=document.querySelector('.main');
var tp=document.querySelector('.tupian');
var zb=document.querySelector('.zuob');
var yb=document.querySelector('.youb');
var flag=true;
var tpWidth=tp.offsetWidth;
var flag=true;
main.addEventListener('mouseover',function(){

    zb.style.display='block';
    yb.style.display='block';
    clearInterval(timer);
    timer=null;
   

})
main.addEventListener('mouseout',function(){

    zb.style.display='none';
    yb.style.display='none';
    timer=setInterval(function(){
        yb.click();
    },2000)

})
var ul=main.querySelector('ul');
var ol=main.querySelector('.yq');
for(i=0;i<ul.children.length;i++){

    var li=document.createElement('li');
    li.setAttribute('index',i);
    ol.appendChild(li);
    ol.children[0].style.backgroundColor='#fff';
    li.addEventListener('click',function(){
        for(i=0;i<ol.children.length;i++){
            ol.children[i].style.backgroundColor='rgba(0,0,0,.507';
        }
        this.style.backgroundColor='#fff';
        var index=this.getAttribute('index');
        sum=index;
        num=index;
        dh(ul,-index*main.offsetWidth)
    })
     
}
var num=0;
var first=ul.children[0].cloneNode(true);
ul.appendChild(first);
var sum=0;
yb.addEventListener('click',function(){
   if(flag){
       flag=false;
    if(num==ul.children.length-1){
        num=0;
        ul.style.left=0;
    }
    num++;
    dh(ul,-num*main.offsetWidth,function(){
        flag=true
    })
    sum++;
    if(sum==ol.children.length){
        sum=0;
    }
    for(i=0;i<ol.children.length;i++){
        ol.children[i].style.backgroundColor='rgba(0,0,0,.507';
    }
    ol.children[sum].style.backgroundColor='#fff';
   }
})
zb.addEventListener('click',function(){
   if(flag){
       flag=false
    if(num==0){
        num=ul.children.length-1;
        ul.style.left=(ul.children.length-1)*main.offsetWidth;
    }
    num--;
    dh(ul,-num*main.offsetWidth,function(){
        flag=true
    })
    sum--;
    if(sum<0){
        sum=ol.children.length-1;
    }
    for(i=0;i<ol.children.length;i++){
        ol.children[i].style.backgroundColor='rgba(0,0,0,.507';
    }
    ol.children[sum].style.backgroundColor='#fff';
   }
})
var timer=setInterval(function(){
    yb.click();
},2000)

})