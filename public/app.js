
import SlideItens from "./components/SlideItens.js";
import UpDownTriangle from "./components/UpDownTriangle.js"
import BtnWhats from "./components/BtnWhats.js";
import imgsNetflix from "./components/imgsNetflix.js";

Vue.createApp({
    data(){
        return {
            text: 'coisas'
        }
    },
    components: {
        UpDownTriangle: UpDownTriangle,
        SlideItens: SlideItens,
        BtnWhats: BtnWhats,
        imgsNetflix: imgsNetflix,
    }
}).mount('#app')