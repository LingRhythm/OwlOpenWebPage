let button = document.querySelector('.button')
let ball = document.querySelector('.ball')
let bottom = document.querySelector('.bottom')
let off = document.querySelector('.off')
let on = document.querySelector('.on')
let index = 0
button.addEventListener('click', () => {
    if (index == 0) {
        index = 1
        ball.style.left = 61 + '%'
        on.style.opacity = 1
        off.style.opacity = .5
        bottom.style.transform = "rotateY(180deg)"
    } 
    else {
        index = 0
        ball.style.left = 0
        on.style.opacity = .5
        off.style.opacity = 1
        bottom.style.transform = "rotateY(0deg)"
        }
})