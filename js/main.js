gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if(ScrollTrigger.isTouch !==1){
    
        gsap.fromTo('.header', {opacity: 0, y: -30}, {opacity: 1,duration: 1,y: 0,delay: 1.2})
        gsap.fromTo('.author__top-title', {opacity: 0, x: -100}, {opacity: 1, duration: 1, x: 0, delay: 1.1})
        gsap.fromTo('.author__top-text', {opacity: 0, y: 50}, {opacity: 1, duration: 1, y: 0, delay: 1.1})
        gsap.fromTo('.author__top-buttons', {opacity: 0, y: 50}, {opacity: 1, duration: 1, y: 0, delay: 1.2})
        gsap.fromTo('.author__top-img', {opacity: 0, x: 50}, {opacity: 1, duration: 1, x: 0, delay: 1.2})
        gsap.fromTo('.author__middle', {opacity: 0}, {opacity: 1, duration: 1, delay: .8})
      
        
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

    const burgerBtn = document.querySelector('.header__burger');
    const burgerNav = document.querySelector('.burger__menu');
    const burgerOverlay = document.querySelector('.menu__overlay')
    const burgerNavItems = document.querySelectorAll('.burger__nav-item')

    burgerBtn.addEventListener('click', function(){
        burgerBtn.classList.toggle('header__burger--active')
        burgerNav.classList.toggle('burger__menu--active')
        burgerOverlay.classList.toggle('menu__overlay--active')  
    })
    burgerNavItems.forEach(function(item){
        item.addEventListener('click', function(){
            burgerBtn.classList.remove('header__burger--active')
            burgerNav.classList.remove('burger__menu--active')
            burgerOverlay.classList.remove('menu__overlay--active')  
        })
    })


