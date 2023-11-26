const body = document.querySelector('body')

const SetAnimation = () => {
    let img = document.querySelector('.apresentation-container img')
    ObserveDivForAnimation(img, 'down100toUp100')
}
const ObserveDivForAnimation = (element, animation) => {
    const observeElement = new IntersectionObserver(([element], observer)=>{
        if (!element.isIntersecting) {
            return
        }
        console.log('entrando no  observer', element)
        console.log('intersectou')
    })
    observeElement.observe(element)
}

body.onload = SetAnimation()