
if(ScrollTrigger.isTouch !==1){


    const headerProject = document.querySelector('.header--project')
    const projectTitle = document.querySelector('.project__title')
    const projectImg = document.querySelector('.project__img')
    const projectInfoItems = document.querySelectorAll('.project__info-item')
    const buttonsProject = document.querySelectorAll('.button--project')

    const gsapItems = [
            headerProject,
            projectTitle,
            projectImg,
        ]
    
        gsapItems.forEach(function(item){
            item.classList.add('transparent')
    })
    projectInfoItems.forEach(function(item){
        item.classList.add('transparent')
    })
    buttonsProject.forEach(function(item){
        item.classList.add('transparent')
    })

    const tl = gsap.timeline()

    tl.fromTo(
        '.header--project',
        {
            opacity: 0,
            y: -30
        },
        {
            opacity: 1,
            duration: 1.2,
            y: 0,
        },
        1.2
    ).fromTo('.project__title',
    {
        opacity: 0,
        y: 30 
    },
    {
        opacity: 1,
        duration: 1.2,
        y: 0,
    },
    .5


    ).fromTo('.project__img',
    {
        opacity: 0,
        x: 50 
    },
    {
        opacity: 1,
        duration: 1.2,
        x: 0,
    },
    1.5


    ).fromTo('.project__info-item',
    {
        x: -50,
        opacity: 0,
        
    },
    {
        x: 0,
        duration: 1,
        opacity: 1,
        stagger: 0.45,
    },
    1
    
    ).fromTo('.button--project',
    {
        y: 50,
        opacity: 0,
        
    },
    {
        y: 0,
        duration: 1,
        opacity: 1,
        stagger: 0.45,
    },
    2.5
    
    )



    gsap.fromTo('.footer',
    {
        
        opacity: 0,
    },

    {

        scrollTrigger:{
            trigger: '.footer',
            start: 'top bottom',
        },
        

        duration: 1,
        opacity: 1,
    }
    )
}

const burgerBtn = document.querySelectorAll('.header__burger');
const burgerNav = document.querySelector('.burger__menu');
const burgerOverlay = document.querySelector('.menu__overlay')
const burgerNavItems = document.querySelectorAll('.burger__nav-item')
// const body = document.querySelector(body)
burgerBtn.forEach(function(item){
    item.addEventListener('click', function(){
    item.classList.toggle('header__burger--active')
    burgerNav.classList.toggle('burger__menu--active')
    burgerOverlay.classList.toggle('menu__overlay--active')   
})
})

burgerNavItems.forEach(function(item){
    item.addEventListener('click', function(){
        burgerBtn.forEach(function(item){
            item.classList.remove('header__burger--active')
        })
        burgerNav.classList.remove('burger__menu--active')
        burgerOverlay.classList.remove('menu__overlay--active')  
    })
})