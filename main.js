const slides=document.querySelectorAll(".slide")

for (const slide of slides){
    slide.addEventListener('click', () =>{
    createActiveClasess ()
    
    slide.classList.add("active")   
})
}
function createActiveClasess() {
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
    
}