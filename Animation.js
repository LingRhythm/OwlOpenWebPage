(function() {
    let item = document.getElementsByClassName('item');
    for(let i = 0;i < item.length;i++){
        item[i].style.transform = "rotateY("+360/item.length*i+"deg) translateZ(50vw)";
    }
})();
document.addEventListener('wheel', function (event) {
    let scrollPosition = document.documentElement.scrollTop;
    if(event.deltaY == 100 && scrollPosition < 600){
        window.scrollTo(0, 2000);
    }
    if(event.deltaY == -100 && scrollPosition > 800){
        window.scrollTo(0, 0);
    }
});

function bthclick(){
    const bth = document.getElementById('mybth');
    const box = document.getElementById('mybox');
    if(bth.classList.contains('active2')){
        bth.classList.remove('active2');
        box.classList.remove('open');
    }
    else{
        bth.classList.add('active2');
        box.classList.add('open');
    }
}

let chosenSlideNumber = 1;
let offset = 0;
let barOffset = 0;
let intervalID;
startSlide();
const drawerBtns = Array.from(document.querySelectorAll(".drawer-btn"));
drawerBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    clearInterval(intervalID); 
    startSlide();
  })
})
const slideSection = document.querySelector("#slide-section");
slideSection.addEventListener("mouseenter", () => {
  clearInterval(intervalID);
})
slideSection.addEventListener("mouseleave", () => {
  startSlide();
})
function slideTo(slideNumber) {
  drawerboxToggle(slideNumber);
  drawerbtnToggle(slideNumber);
  let previousSlideNumber = chosenSlideNumber;
  chosenSlideNumber = slideNumber;
  offset += (chosenSlideNumber - previousSlideNumber) * (-100);
  barOffset += (chosenSlideNumber - previousSlideNumber) * (100); 
  barSlide(barOffset);
  const slides = document.querySelectorAll(".card2");
  Array.from(slides).forEach(slide => {
    slide.style.transform = `translateY(${offset}%)`;
  })
}
function drawerboxToggle(drawerboxNumber) {
  let prevDrawerboxNumber = chosenSlideNumber;
  const drawerboxes = document.querySelectorAll(".drawerbox");
  drawerboxes[prevDrawerboxNumber - 1].classList.toggle("active1");
  drawerboxes[drawerboxNumber - 1].classList.toggle("active1");
}
function drawerbtnToggle(drawerBtnNumber) {
  let prevDrawerBtnNumber = chosenSlideNumber;
  const drawerBtns = document.querySelectorAll(".drawer-btn");
  drawerBtns[prevDrawerBtnNumber - 1].classList.toggle("active1");
  drawerBtns[drawerBtnNumber - 1].classList.toggle("active1");
}
function barSlide(barOffset) {
  const bar = document.querySelector("#bar");
  bar.style.transform = `translateY(${barOffset}%)`;
}
function startSlide() {
  intervalID = setInterval(() => {
    slideTo(chosenSlideNumber % 4 + 1);
  }, 3000);
}
