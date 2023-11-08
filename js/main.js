gsap.registerPlugin(ScrollTrigger, ScrollSmoother, )



if(ScrollTrigger.isTouch !==1){


    const header = document.querySelector('.header')
const authorTopTitle = document.querySelector('.author__top-title')
const authorTopText = document.querySelector('.author__top-text')
const authorTopImg = document.querySelector('.author__top-img')
const buttonAuthorFirst = document.querySelector('.button-author--first')
const buttonAuthorSecond = document.querySelector('.button-author--second')
const authorMiddle = document.querySelector('.author__middle')
const cards = document.querySelectorAll('.card')
const socials = document.querySelectorAll('.contacts__socials .socials__item')

socials.forEach(function(item){
    item.classList.add('transparent')
})

const gsapItems = [
        header,
        authorTopTitle,
        authorTopText,
        authorTopImg,
        buttonAuthorFirst,
        buttonAuthorSecond,
        authorMiddle,
    ]

gsapItems.forEach(function(item){
    item.classList.add('transparent')
})
cards.forEach(function(item){
    item.classList.add('transparent')
})






        const tl = gsap.timeline()

        tl.fromTo(
            '.header',
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
        ).fromTo(
            '.author__top-title',
            {

                opacity: 0,
                y: 100
                
            },
            {
                opacity: 1,
                duration: 1,
                y: 0,
                
            },
            .4
        ).fromTo(
            '.author__top-text',
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                duration: 1,
                y: 0,
            },
            .8
        ).fromTo(
            '.author__top-img',
            {
                opacity: 0,
                x: 50
            }, {
                opacity: 1,
                duration: 1.3,
                x: 0,
            },
            1
        ).fromTo(
            '.button-author--first',
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                duration: 1,
                y: 0
            },
            1.7

        ).fromTo(
            '.button-author--second',
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                duration: 1,
                y: 0
            },
            2

        ).fromTo(
            '.author__middle',
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 3
            },
            2

        )

        //author

        gsap.to('.author__top',{
            scrollTrigger:{
                trigger: '.author__middle',
                start: 'top 200',
                scrub: true
            },
            yPercent: -100,
            opacity: 0,
            scale: 0.9
        })
        gsap.to('.author__middle img',{
            scrollTrigger:{
                trigger: '.author__middle',
                start: 'top top',
                scrub: true
            },
            opacity: 0,
        })
        gsap.fromTo('.author__bottom-skills',{

            opacity: 0,
            x: -50,
            duration: 1,
        },
        {
            scrollTrigger:{
                trigger: '.author__middle',
                start: '90% center',
          
            },
            opacity: 1,
            x: 0,
            duration: 1,
        }

        
        
        )
        gsap.fromTo('.author__bottom-links',{

            opacity: 0,
            x: 50,
            duration: 1,
        },
        {
            scrollTrigger:{
                trigger: '.author__middle',
                start: '90% center',
               
                
            },
            opacity: 1,
            x: 0,
            duration: 1,
        }

        
        
        )
        gsap.to('.author__bottom',
        {
            scrollTrigger:{
                trigger: '.portfolio',
                start: '20% center',
                end: '60% center',
                scrub: true,
                
                
            },
            yPercent: -10,
            opacity: 0,
            scale: 0.9
        }
        )

        //portfolio

        gsap.fromTo('.portfolio',{

            opacity: 0,
        },
        {
            scrollTrigger:{
                trigger: '.portfolio',
                start: '-35% top',

                
            },
            opacity: 1,
            duration: 1.2,
        }

        
        
        )
        gsap.fromTo('.portfolio__title',{
            x: -50,
            opacity: 0,
        },
        {
            scrollTrigger:{
                trigger: '.portfolio',
                start: '-35% top',
             
                
            },
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 1
        }

        
        
        )
        gsap.fromTo('.tabs-btn--first',{
            x: -50,
            opacity: 0,
        },
        {
            scrollTrigger:{
                trigger: '.portfolio',
                start: '-35% top',

                
            },
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 1.25
        }
        )
        gsap.fromTo('.tabs-btn--second',{
            x: -50,
            opacity: 0,
        },
        {
            scrollTrigger:{
                trigger: '.portfolio',
                start: '-35% top',
        
                
            },
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 1.5
        }

        
        
        )
        gsap.fromTo('.tabs-btn--third',{
            x: -50,
            opacity: 0,
        },
        {
            scrollTrigger:{
                trigger: '.portfolio',
                start: '-35% top',
                
            },
            x: 0,
            opacity: 1,
            duration: 1,
            delay: 1.75
        }  
        )
        gsap.to('.portfolio__cards',
        {
            scrollTrigger:{
                trigger: '.stages',
                start: '20% center',
                end: '60% center',
                scrub: true,
                
                
            },
            yPercent: -10,
            opacity: 0,
            scale: 0.9
        }
        )
        gsap.to('.card',
            {
                scrollTrigger: {
                    trigger: '.portfolio',
                   
                    start: '-35% top',
                },
                delay: 2,
                duration: 1,
                opacity: 1,
                stagger: 0.45,
            },

        )

        //stages


        gsap.fromTo('.stages__title',{
            y: -30,
            opacity: 0,
        },
        {
            scrollTrigger:{
                trigger: '.stages',
                start: '-10% top',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            delay: .8
        }

        
        
        )
        gsap.fromTo('.stages__wrapper',{
                
                opacity: 0,
            },
            {
                scrollTrigger:{
                    trigger: '.stages',
                    start: '-10% top',
                },
                y: 0,
                opacity: 1,
                duration: 2,
                delay: 1.2, 
            }
        )
        gsap.fromTo('.contacts',{
                    opacity: 0,
                },
                {
                    scrollTrigger:{
                        trigger: '.contacts',
                        start: '-10% center',
                        
                    },
                    opacity: 1,
                    duration: 1,
            
                }
        )
        gsap.fromTo('.contacts__title',{
                    y: -30,
                    opacity: 0,
                },
                {
                    scrollTrigger:{
                        trigger: '.contacts',
                        start: '-10% center',
                        
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: .8
                }
        )
                
        gsap.fromTo('.contacts__row-text',{
                x: -50,
                opacity: 0,
            },
            {
                scrollTrigger:{
                    trigger: '.contacts',
                    start: '-10% center',
                    
                },
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 1.2,
                easeIn: true
            }
        )

        gsap.fromTo('.contacts__row-items span',{
            y: 50,
            opacity: 0,
        },
        {
            scrollTrigger:{
                trigger: '.contacts',
                start: '-10% center',
                
            },
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 1.3
        }
        )

        gsap.fromTo('.contacts__row-items a',{
            y: 50,
            opacity: 0,
        },
        {
            scrollTrigger:{
                trigger: '.contacts',
                start: '-10% center',
                
            },
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 1.7
        }
        )

        gsap.fromTo('.contacts__row-items a',{
            y: 50,
            opacity: 0,
        },
        {
            scrollTrigger:{
                trigger: '.contacts',
                start: '-10% center',
                
            },
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 1.7
        }
        )

        gsap.fromTo('.contacts__socials a',
        {
            y: 50,
            opacity: 0,
        },

        {

            scrollTrigger:{
                trigger: '.contacts',
                start: '-10% center',
               
            },
            y: 0,
            delay: 2.2,
            duration: 1,
            opacity: 1,
            stagger: .5
        }
        )
        gsap.fromTo('.form__item button',
        {
            y: 50,
            opacity: 0,
        },

        {

            scrollTrigger:{
                trigger: '.contacts',
                start: '-10% center',
               
            },
            y: 0,
            delay: 2.5,
            duration: 1,
            opacity: 1,
        }
        )
        gsap.fromTo('.footer',
        {
            
            opacity: 0,
        },

        {

            scrollTrigger:{
                trigger: '.contacts',
                start: '-30% center',
               
            },
            
            delay: 1,
            duration: 3,
            opacity: 1,
        }
        )
        gsap.fromTo('.contacts__form',
        {
            y: 50,
            opacity: 0,
        },

        {

            scrollTrigger:{
                trigger: '.contacts',
                start: '-10% center',

               
            },
            y: 0,
            delay: 2.2,
            duration: 1,
            opacity: 1,
        }
        )      
}
    




    const tabBtns = document.querySelectorAll('[data-tab]');
    const cardBoxes = document.querySelectorAll('[data-tab-content]')

    tabBtns.forEach(function(item){

        item.addEventListener('click', function(){
            
            cardBoxes.forEach(function(item){
                    item.classList.add('hidden');
            });

            tabBtns.forEach(function(item){
                item.classList.remove('tabs-btn--active')
            });
            const cardBtn = document.querySelector(`[data-tab='${this.dataset.tab}']`);
            const cardBox = document.querySelector(`#${this.dataset.tab}`);

            cardBox.classList.remove('hidden')
            cardBtn.classList.add('tabs-btn--active')

        })
        
    })

    const formFields = document.querySelectorAll('.form__item-field');

    formFields.forEach(function(item){
        const thisParent = item.closest('.form__item');
        const thisPlaceholder = thisParent.querySelector('.fake-placeholder');

        item.addEventListener('focus', function(){
            thisPlaceholder.classList.add('active')
        });

        item.addEventListener('blur', function(){
            if(item.value.length > 0){
                thisPlaceholder.classList.add('active')
            } else{
                thisPlaceholder.classList.remove('active')
            }
        });

    
    })

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


    window.addEventListener('scroll', function(){
       
        const stickyHeader = document.querySelector('.header-sticky')
        stickyHeader.classList.toggle('sticky--active', window.scrollY > 250)
        const stickyBurger = document.querySelector('.header__burger--sticky')
        stickyBurger.classList.toggle('header__burger--sticky--active', window.scrollY > 250)
    })


