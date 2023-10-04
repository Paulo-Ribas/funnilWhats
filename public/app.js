
import SlideItens from "./components/SlideItens.js";
import UpDownTriangle from "./components/UpDownTriangle.js"
import BtnWhats from "./components/BtnWhats.js";
import imgsNetflix from "./components/imgsNetflix.js";


Vue.createApp({
    data(){
        return {
            currentTranslate: 0,
            prevTranslate: 0,
            startMousePosition: 0,
            isDragging: false,
            cloneRigth: false,
            original: true,
            cloneLeft: false,
        }
    },
    components: {
        UpDownTriangle: UpDownTriangle,
        SlideItens: SlideItens,
        BtnWhats: BtnWhats,
        imgsNetflix: imgsNetflix,
        
    },
    methods: {
        startDrag(event) {
            this.isDragging = true
            this.startMousePosition = event.pageX || event.touches[0].pageX
        },
        moveSlide(event) {
            if(!this.isDragging) return
            let currentMousePosition = event.pageX || event.touches[0].pageX
            
            this.currentTranslate = this.prevTranslate + currentMousePosition - this.startMousePosition
            console.log(currentMousePosition, this.currentTranslate)
            this.setTranslate(event)

        },
        setTranslate(event) {
            const slide = document.querySelector('.slide-itens-container')
            let currentMousePosition = event.pageX || event.touches[0].pageX
            let imgsContainer = Array.from(document.querySelectorAll('.item'))
            let amout = imgsContainer.length
            if(amout <= 12) amout *= 2
            const slideContainer = document.querySelector('.slide-infinite-loop-container')
            let borda = slide.getBoundingClientRect().left
            let rigth = slide.getBoundingClientRect().right
           // console.log(borda, slide.offsetWidth)
            if(borda >= 80) {
                this.cloneLeft = true
                this.cloneRigth = false
                this.prevTranslate = this.prevTranslate - (288 * amout / 2)
                this.currentTranslate =  this.prevTranslate
            }
                
            /* if (rigth <= 100) {
                this.cloneLeft = false
                this.cloneRigth = true
                this.prevTranslate = this.prevTranslate + (288 * amout / 2)
                this.currentTranslate = this.prevTranslate
            } */
            slide.style.transform = `translateX(${this.currentTranslate}px)`
            //console.log('novo offset', slide.offsetWidth)
        },
        stopDrag() {
            if (!this.isDragging) return
            this.isDragging = false
            this.prevTranslate = this.currentTranslate

        }



    }
}).mount('#app')