const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail');
const menuHamburguer= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed= aside.classList.add('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed= aside.classList.add('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    const isDesktopMenuclosed= desktopMenu.classList.contains('inactive');

      if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');
        } else if(!isDesktopMenuclosed){
            desktopMenu.classList.add('inactive')
        }

        aside.classList.toggle('inactive');      
}

