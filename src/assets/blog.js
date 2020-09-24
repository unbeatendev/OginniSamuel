import { gsap, ScrollTrigger } from "gsap/all";
import {TweenMax} from "gsap";
gsap.registerPlugin(ScrollTrigger, TweenMax); 


import '../sass/main.scss';

import {navTl, navIcon, allLinks, socialLinks} from './customer';

var blogTl = gsap.timeline()
blogTl.fromTo('.blog-head .content svg g', 1, { scale: 0, opacity: 0, transformOrigin: '100% 100%', stagger: .2  }, { opacity: 1, scale: 1, ease: "powert.out(1, .2)", stagger: .2   }, '-=.5');

