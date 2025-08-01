let nav = document.querySelectorAll(".nav li");
function activeLink(){
    nav.forEach((item)=>item.classList.remove("active"));
    this.classList.add("active");
}
nav.forEach((item)=>item.addEventListener("click",activeLink));
function createClickEffect(x,y){
    var effect = document.createElement('div')
    effect.className = 'clickEffect'
    document.body.appendChild(effect)
    effect.style.left = (x-20)+'px'
    effect.style.top = (y-20)+'px'
    var randomColor = 'hsl('+Math.random()*360+',90%,50%)'
    effect.style.borderColor =randomColor;
    effect.addEventListener('animationend',function(){
        document.body.removeChild(effect)
    })
}
document.addEventListener('click',function(event){
    createClickEffect(event.pageX,event.pageY)
})
document.addEventListener('wheel', function (event) {
    let scrollPosition = document.documentElement.scrollTop;
    if(scrollPosition<800){
        nav.forEach((item)=>item.classList.remove("active"));
        nav[1].classList.add("active");
    }
    if(scrollPosition>=800){
        nav.forEach((item)=>item.classList.remove("active"));
        nav[2].classList.add("active");
    }
    if(scrollPosition>=1300){
        nav.forEach((item)=>item.classList.remove("active"));
        nav[3].classList.add("active");
    }
});
nav.forEach((item)=>item.addEventListener("click",activeLink));