const tabBtns = document.querySelectorAll('[data-tab]');
const cardBoxes = document.querySelectorAll('[data-tab-content]')

tabBtns.forEach(function(item){

    item.addEventListener('click', function(){
        
        cardBoxes.forEach(function(item){
                item.classList.add('none');
        });

        tabBtns.forEach(function(item){
            item.classList.remove('tabs-btn--active')
        });
        const cardBtn = document.querySelector(`[data-tab='${this.dataset.tab}']`);
        const cardBox = document.querySelector(`#${this.dataset.tab}`);

        cardBox.classList.remove('none')
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
const burgerNav = document.querySelector('.header__burger-menu');
const burgerOverlay = document.querySelector('.menu__overlay')
burgerBtn.addEventListener('click', function(){
    burgerBtn.classList.toggle('header__burger--active')
    burgerNav.classList.toggle('header__burger-menu--active')
    burgerOverlay.classList.toggle('menu__overlay--active')  
})



