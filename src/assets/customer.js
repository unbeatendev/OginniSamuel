import { gsap, ScrollTrigger } from "gsap/all";
import {TweenMax} from "gsap";
gsap.registerPlugin(ScrollTrigger, TweenMax); 


import '../sass/main.scss';



const navtl = gsap.timeline({paused:true, reversed: true});

navtl.to(".nav .trans1", .3, {width: '350vw', ease: "elastic.out(1, .2)", delay: 0});
     
navtl.to(".nav .trans2", .3, {width: '150vw', ease: "elastic.out(1, .2)", delay: 0});

navtl.to(".nav .trans3", .4, {width: '400vw', ease: "elastic.out(1, .2)", delay: 0});

navtl.to('.nav .nav-main__content', {opacity: '1', visibility: 'visible', yPercent: -5, duration: .5, transformOrigin: 'bottom', stagger: .3})


const navIcon = document.querySelector('.nav .nav-icon');
navIcon.onclick = function() {
    if (navtl.reversed()) {
        this.classList.add('nav-anim')
        navtl.play()
        document.body.classList.add('noScroll');


    } else {
        this.classList.remove('nav-anim')
        navtl.reverse()
        document.body.classList.remove('noScroll')
       
    }
};

const allLinks = document.querySelectorAll('.list__item a');

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('noScroll');
        navtl.reverse()
        navIcon.classList.remove('nav-anim')
        
    })
});

let socialLinks = document.querySelectorAll('.social-media ');
socialLinks.forEach(link => {
    link.target = '_blank';
});

export {navtl, navIcon, allLinks, socialLinks};