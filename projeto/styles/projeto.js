let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('section')
window.addEventListener('scroll', ( ) => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let heightSection = section.offsetHeight;
        let idSection = section.getAttribute('id')

    }) 
})
function scrollSection(event){
    event.preventDefault();
    

    const href = event.currentTarget.getAttribute('href');
     console.log(href)
    const section = document.querySelector(href);

   let topSection = section.offsetTop;

   window.scrollTo({
    top: topSection,
    behavior: 'smooth'
   })

}


links.forEach(link => {
link.addEventListener('click', scrollSection)
})

/* menu hamburguer */

const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.menu');
hamburguer.addEventListener('click', () => nav.classList.toggle('active'));