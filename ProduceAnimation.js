
let b = document.querySelector(".b1")
let d = document.getElementsByClassName("d1")

let b1 = document.querySelector(".b2")
let d1 = document.getElementsByClassName("d2")

let b2 = document.querySelector(".b3")
let d2 = document.getElementsByClassName("d3")

let b3 = document.querySelector(".b4")
let d3 = document.getElementsByClassName("d4")

let time
let index = 0
let index1 = 0
let index2 = 0
let index3 = 0



let a = function(){
    for(let i = 0;i < d.length; i++){
        d[i].className = "d1"
    }
    for(let i = 0;i < d1.length; i++){
        d1[i].className = "d2"
    }
    for(let i = 0;i < d2.length; i++){
        d2[i].className = "d3"
    }
    for(let i = 0;i < d3.length; i++){
        d3[i].className = "d4"
    }
}
let aa = function(){
    a()
    d[index].className = "d1 dd"
    d1[index1].className = "d2 ddd"
    d2[index2].className = "d3 dddd"
    d3[index3].className = "d4 ddddd"
}
function ts(){
    time = setInterval(function(){
        aa()
        index++
        index1++
        index2++
        index3++
        b.style.backgroundImage = "url('./Resource/Produce/Game/"+[index]+".png')"
        document.getElementById('Game').href = "#Game"+[index];
        b1.style.backgroundImage = "url('./Resource/Produce/3D/"+[index1]+".png')"
        b2.style.backgroundImage = "url('./Resource/Produce/2D/"+[index2]+".png')"
        b3.style.backgroundImage = "url('./Resource/Produce/Other/"+[index3]+".png')"
        if(index == d.length){
            index=0
        }
        if(index1 == d1.length){
            index1=0
        }
        if(index2 == d2.length){
            index2=0
        }
        if(index3 == d3.length){
            index3=0
        }
    },1500);
}
for(let i = 0;i < d.length;i++){
    d[i].onmousemove = function(){
        b.style.backgroundImage = "url('./Resource/Produce/Game/"+[i + 1]+".png')"
        document.getElementById('Game').href = "#Game"+[i + 1];
        a()
        clearInterval(time)
        index = i
        d[index].className = "d1 dd"
        ts()
    }
}
for(let i = 0;i < d1.length;i++){
    d1[i].onmousemove = function(){
        b1.style.backgroundImage = "url('./Resource/Produce/3D/"+[i + 1]+".png')"
        a()
        clearInterval(time)
        index1 = i
        d1[index1].className = "d2 ddd"
        ts()
    }
}
for(let i = 0;i < d2.length;i++){
    d2[i].onmousemove = function(){
        b2.style.backgroundImage = "url('./Resource/Produce/2D/"+[i + 1]+".png')"
        a()
        clearInterval(time)
        index2 = i
        d2[index2].className = "d3 dddd"
        ts()
    }
}
for(let i = 0;i < d3.length;i++){
    d3[i].onmousemove = function(){
        b3.style.backgroundImage = "url('./Resource/Produce/Other/"+[i + 1]+".png')"
        a()
        clearInterval(time)
        index3 = i
        d3[index3].className = "d4 ddddd"
        ts()
    }
}
ts()
