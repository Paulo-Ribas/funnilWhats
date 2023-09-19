export default {
    template: `
    <div :class="{'icon-text-container': true, 'brown-background': 'brown-background'}">
    <svg v-if="triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	    <path class="elementor-shape-fill" d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"></path>
    </svg>
        <div class="container">
            <div class="itens-container">
                <i :class="[prefix, icon]"></i>
                <div class="texts-container">
                    <h2 class="text-style-destaque-32px">{{textH1}}</h2>
                    <h2 class="text-style-destaque-32-px">{{textH2}}</h2>
                    <h3 class="text-style-titulos-25-px">{{textH3}}</h3>
                    <p class="text-style-paragrafos-16-px"> {{textP}}</p>
                </div>
                <i :class="[prefix, icon]"></i>
            </div>
        </div>
    </div>
`,
    props:{
        triangleProps: Boolean,
        prefixProps: String,
        iconProps: String,
        textH1Props: String,
        textH2Props: String,
        textH3Props: String,
        textPProps: String,

    },
    data(){
        return {
            triangle: this.triangleProps,
            prefix: this.prefixProps,
            icon: this.iconProps,
            textH1: this.textH1Props,
            textH2: this.textH2Props,
            textH3: this.textH3Props,
            textP: this.textPProps
        }
    },
    mounted(){
        console.log(this.triangle, this.prefix)
    }
}