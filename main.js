window.addEventListener('scroll',setScroll)
window.addEventListener("resize", setScroll);

function setScroll(){
    const heightInPx = document.documentElement
    const heightInPercent = heightInPx.scrollTop/heightInPx.clientHeight
    heightInPx.style.setProperty('--scroll',heightInPercent)
    console.log(Math.min(heightInPercent  ,300));   
}
setScroll()