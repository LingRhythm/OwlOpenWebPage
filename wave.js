const randomColor = ()=> 'rgba('+(Math.random()*50+50)+','+(Math.random()*100+150)+','+(Math.random()*50+200)+','+(Math.random()*0.3+0.2).toFixed(2)+')'
const randDuration = () =>  (Math.random()*20+3).toFixed(1)
const ranPos = i => ({x:Math.random()*100-50,y:-5-i*3+Math.random()*8-4})
const container = document.getElementsById('waves-container')
const svgNS = 'http://www.w3.org/2000/svg'
Array.from({length:20},(_,i)=>{
    const{x,y} = ranPos(i)
    const wave = {
        x,y,fill:randomColor(),opacity:Math.floor(Math.random()*70+5)+'%',duration:randDuration()
    }
    const use = document.createElementNS(svgNS,"use")
    use.setAttribute('href',"#wave")
    use.setAttribute('x',wave.x)
    use.setAttribute('y',wave.y)
    use.setAttribute('fill',wave.fill)
    use.setAttribute('opacity',wave.opacity)
    const animate = document.createElementNS(svgNS,"animateMotion")
    animate.setAttribute('dur',wave.duration)
    animate.setAttribute('repeatCount','indefinite')
    const mpath = document.createElementNS(svgNS,"mpath")
    mpath.setAttribute('href',"#wave-path")
    animate.appendChild(mpate)
    use.appendChild(animate)
    container.appendChild(use)
    })