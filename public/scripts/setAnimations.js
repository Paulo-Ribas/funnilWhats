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
        element.target.classList.add(animation)
    })
    observeElement.observe(element)
}

body.onload = SetAnimation