export default {
    template: `<a class="green-btn text-style-titulos-25-px" :href="link">{{text}}</a>`,
    props:{
        textProps: String,
        linkProps: String,
    },
    data(){
        return {
            text: this.textProps,
            linkProps: this.linkProps
        }
    },
}