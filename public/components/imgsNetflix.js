export default {
    template: `
    <div class="imgs-container">
        <div class="img" v-for="(img, index) in imgs" :key="index" >
            <a href="#">
            <img :src="img.src">
            </a>
        </div>
    </div>
    `,
    props: {
        imgSrcProps: Array,

    },
    data(){
        return {
            imgs: this.imgSrcProps
        }
    },
}