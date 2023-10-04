export default {
    template: `
        <div class="item" v-for="(img, index) in imgs" :key="index">
            <img :src="img.src" alt="imagens ilustrativas" draggable="false">
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