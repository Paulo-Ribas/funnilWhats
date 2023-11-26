
const slideContainer = document.querySelector('.slide-infinite-loop-container')
const slide = document.querySelector('.slide-itens-container')
let currentTranslate = 0
let prevTranslate = 0
let startMousePosition = 0
let isDragging = 0

function startDrag(event) {
    console.log('cliquei loiol')
    isDragging = true
    startMousePosition = event.pageX || event.touches[0].pageX
}
function moveSlide(event) {
    let currentMousePosition = event.pageX || event.touches[0].pageX

    currentTranslate = prevTranslate + currentMousePosition - startMousePosition
    setTranslate(currentTranslate)
    
}

function setTranslate(translate) {
    slide.style.transform = `${translate}px`
    
}
function stopSlide() {
    if(!isDragging) return 
    isDragging = false
    prevTranslate = currentTranslate
    
}

slideContainer.addEventListener('mousedown', startDrag)
slideContainer.addEventListener('mousemove', moveSlide)
slideContainer.addEventListener('mouseup', stopSlide)