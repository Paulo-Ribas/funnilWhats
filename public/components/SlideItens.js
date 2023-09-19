export default {
    template: `
    <div class="slide-itens-container">
        <div class="item" v-for="(img, index) in imgs" :key="index">
            <img :src="img.src" alt="imagens ilustrativas">
        </div>
    </div>
`,
    props: {
        imgsProps: Array,
        

    },
    data() {
        return {
            imgs: this.imgsProps,
            
        }
    },
}