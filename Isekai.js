let count = 0;
function Truck(event){
    createClickEffect(event.pageX,event.pageY)
    if(count < 10){
        count++;
    }
    else{
        count = 0;
        window.location.href="./Isekai.html";
    }
}
function createClickEffect(x,y){
    var effect = document.createElement('div');
    effect.className = 'clickEffect';
    document.body.appendChild(effect);
    effect.style.left = (x-20)+'px';
    effect.style.top = (y-20)+'px';
    var randomColor = 'hsl('+Math.random()*360+',90%,50%)';
    effect.style.borderColor =randomColor;
    effect.addEventListener('animationend',function(){
        document.body.removeChild(effect);
    })
}
