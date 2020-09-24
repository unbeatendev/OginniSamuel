import { gsap, ScrollTrigger } from "gsap/all";
import {TweenMax} from "gsap";
gsap.registerPlugin(ScrollTrigger, TweenMax); 
import '../node_modules/jquery';
import './sass/main.scss';


let socialLinks = document.querySelectorAll('.social-media ');
socialLinks.forEach(link => {
    link.target = '_blank';
});



//loader

document.onreadystatechange = function(){
  var loader =     document.querySelector('.loader')
  var loaderTl = gsap.timeline()
  if(document.readyState !== "complete"){
    document.body.classList.add('hide-scroll')
    loader.style.visibility = "visible";
   loaderTl.fromTo('.loader .load-img  svg ', 2.5, { transformOrigin: '60% 50%', delay: .5, scale: 12, opacity: 1 }, { opacity: 1, scale: 5, ease: "power.out", });
    loaderTl.to(loader, {duration: 1, transformOrigin: '60% 50%', delay: 1, width: "0%", ease: "bounce.out"});
  }
  else{
    document.body.classList.remove('hide-scroll')
  }
};







//colors settings

const colors = {
  blue: ["#5588a3", "#00334e", "#e8e8e8", "#2A6889"],
  orange: ["#FFB453", "#935300", "#fff0bc", "#A28D6F"],
  pink: ["#ec3667", "#3f3d56", "#cbcdda", "#80255E"],
  red: ["#e2434b", "#292725", "#fee9d7", "#BF7554"],
  yellow: ["#ffc60b", "#444444", "#feffdb", "#C49F3B"],
  green: ["#c6e377", "#36622b", "#fbfad3", "#83A22F"],
  purple: ["#A657D2", "#4C00B6", "#E9EAFE", "#24124B"],
  black: ["#2b2b28", "#c19898", "#ebebe3", "#8A8A8A"]
};

const feedback = document.querySelector('.feedback span');
const illustration = document.querySelector(".samuel");

/*function speechListener() {
  window.SpeechRecognition =  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
    
  recognition.addEventListener("end", recognition.start);

  recognition.addEventListener("result", e => {
    const res = Array.from(e.results).map(result => result[0].transcript.toLowerCase());
        
        feedback.style.color = colors[res] ? colors[res][0] : '#cacaca';
        feedback.innerHTML = res;
    update(res);
  });

  recognition.start();
} */

function radioListener() {
  const radioButtons = document.querySelector('.color-selector');
radioButtons.addEventListener("click", function(e) {
  const value = radioButtons.querySelector('input[name="colors"]:checked').id;
  update(value)
});  

}
function radioListenerNav() {
  const radioButtons = document.querySelector('.nav-color-selector');
radioButtons.addEventListener("click", function(e) {
  const value = radioButtons.querySelector('input[name="colors"]:checked').id;
  update(value)
});  

}



function setColors() {
  const colorSelector = document.querySelector(".color-selector");
  Object.keys(colors).map((key, index) => {
    colorSelector.style.setProperty(`--${key}`, colors[key][0]);
  });
}
function setNavColors() {
  const colorSelector = document.querySelector(".nav-color-selector");
  Object.keys(colors).map((key, index) => {
    colorSelector.style.setProperty(`--${key}`, colors[key][0]);
  });
}

function update(response) {
  illustration.style.setProperty("--c-accent", colors[response][0]);
  illustration.style.setProperty("--c-dark", colors[response][1]);
  illustration.style.setProperty("--c-light", colors[response][2]);
  illustration.style.setProperty("--c-skin", colors[response][3]); 
  illustration.style.setProperty("--c-body", colors[response][3]); 
  const colorTl = gsap.timeline({paused:true, reversed: true});
  colorTl.play();
}

function setupAnimation() {
	const geometry = ['svg .circle', '.header .header-content .left',]; 
    const items = ['.home .left', ...geometry];
    const colorTl = gsap.timeline();
    colorTl.set(items, { opacity: 0 });

  // background
  colorTl.fromTo('.header svg .main  ', 1.5, { transformOrigin: '50% 50%', scale: 6, opacity: 1 }, { opacity: 1, scale: 1, ease: "power.out", }, '+=4');
  colorTl.fromTo('.header svg .inner ', 2, { transformOrigin: '50% 100%', scale: 1.2, opacity: 0, translateY: 20, translateX: -18, delay: 1 }, { opacity: 1, scale: 1, ease: "power.out", translateY: 0, translateX: 0, }, '-=.5');
  colorTl.fromTo('.header .header-content .left', 2.5, { transformOrigin: '50% 50%', yPercent: 50, opacity: 1, ease: "elastic.out(1, .2)" }, { opacity: 1, yPercent: 0, ease: "elastic.out(1, .2)",  });
  colorTl.fromTo('svg .circle', 2.5, { transformOrigin: '50% 50%', scale: 0, opacity: 0, delay: -2,  }, { opacity: 1, scale: 1, ease: "elastic.out(1, .2)", delay: -2, });
  colorTl.fromTo('svg .rectangleFirst', 2.5, { transformOrigin: '50% 50%', yPercent: 50, opacity: 0, delay: -2, ease: "elastic.out(1, .2)" }, { opacity: 1, yPercent: 0, ease: "elastic.out(1, .2)", delay: -2, });
  colorTl.fromTo('svg .rectangleLast', 2.5, { transformOrigin: '50% 50%', yPercent: -50, opacity: 0, delay: -2, ease: "elastic.out(1, .2)" }, { opacity: 1, yPercent: 0, ease: "elastic.out(1, .2)", delay: -2, });
  colorTl.from('.header .header-content .menu-container .menu-icon ',  { transformOrigin: '50% 50%', yPercent: 100, opacity: 0, delay: 7, ease: "power.out" }, { opacity: 1, yPercent: 0, ease: "power.out", delay: 7, });
	

  colorTl.fromTo('.header .header-content .left', 8, { transformOrigin: '50% 50%', yPercent: 5, opacity: 1, ease: "power.out", }, { opacity: 1, yPercent: 0, ease: "power.out",  repeat: -1, });
  
};


function init() {
  /*const is_supported = window.SpeechRecognition != null || window.webkitSpeechRecognition != null;
  if(!is_supported) feedback.innerHTML = 'Speach not supported'; */
  
setColors();
setNavColors();
radioListenerNav();
  radioListener();
  setupAnimation();
  /*is_supported && speechListener();*/
}

init();




//end of color settings


//color Menu  click

const menuTl = gsap.timeline({paused:true, reversed: true});
menuTl.to(".header-content .menu-container .main-menu .trans1",  {height: '100vh', duration: .5, ease: "bounce.out", transformOrigin: 'bottom', });
menuTl.to('.header-content .menu-container .main-menu .main-menu__content', {opacity: '1', visibility: 'visible', yPercent: -5, duration: .5, transformOrigin: 'bottom', stagger: .3});
menuTl.from(' .color-container .color-selector label ', {opacity: '1', yPercent: -35, duration: .1, transformOrigin: 'bottom', stagger: .1,});
menuTl.from(' .color-container .color-selector label ', {opacity: '1', yPercent: -35, duration: .1, transformOrigin: 'bottom', stagger: .1,});
menuTl.from('.header .header-content .menu-container .main-menu__content--box .contact-text .email h5 ', {opacity: '1', yPercent: -35, duration: .5, transformOrigin: 'bottom', stagger: .3});

const menuIcon = document.querySelector('.header-content .menu-container .menu-icon');
menuIcon.onclick = function() {
    if (menuTl.reversed()) {
        this.classList.add('menu-anim')
        menuTl.play()
        document.body.classList.add('noScroll');

    } else {
        this.classList.remove('menu-anim')
        menuTl.reverse()
        document.body.classList.remove('noScroll')
    }
};

var allTect = document.querySelectorAll('.header .header-content .menu-container .main-menu__content .color-container .color-selector');

allTect.forEach(tect => {
    tect.addEventListener('click', () => {
        document.body.classList.remove('noScroll');
        menuTl.reverse()
        menuIcon.classList.remove('menu-anim')
    })
}); 

var allMenu = document.querySelectorAll('.header .header-content .menu-container .main-menu__content a');

allMenu.forEach(menuLink => {
    menuLink.addEventListener('click', () => {
        document.body.classList.remove('noScroll');
        menuTl.reverse()
        menuIcon.classList.remove('menu-anim')
    })
}); 



// end color Menu  click

//typewriter effect


consoleText(["Hola yo soy", "Hello I am 👏", "marhabaan 'ana","sannu  nake", "ndewo, m bu ",  "bonjour je suis ", 'Be Inspired ❤.'], 'text',['#000']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors['#000'])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors['#000'])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

//end of typewriter effect

//Start Scroll Animation 


var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector(".header .left", ".header .header-content .right"),
  ease: 0.05, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;


gsap.set(scroller.target, {
  rotation: 0.01,
  force3D: true,
  opacity: 0,
  
});

window.addEventListener("load", onLoad);

function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
  
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;

  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  gsap.set(scroller.target, { 
    y: -scroller.y ,

  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
};
//End Scroll Animation 


/*app.listen(1234, function () {
    console.log("Express server listening  port 5501");
});*/



(function() {

    var $$ = function(selector, context) {
      var context = context || document;
      var elements = context.querySelectorAll(selector);
      return [].slice.call(elements);
    };
  
    function _fncSliderInit($slider, options) {
      var prefix = ".fnc-";
  
      var $slider = $slider;
      var $slidesCont = $slider.querySelector(prefix + "slider__slides");
      var $slides = $$(prefix + "slide", $slider);
      var $controls = $$(prefix + "nav__control", $slider);
      var $controlsBgs = $$(prefix + "nav__bg", $slider);
      var $progressAS = $$(prefix + "nav__control-progress", $slider);
  
      var numOfSlides = $slides.length;
      var curSlide = 1;
      var sliding = false;
      var slidingAT = +parseFloat(getComputedStyle($slidesCont)["transition-duration"]) * 1000;
      var slidingDelay = +parseFloat(getComputedStyle($slidesCont)["transition-delay"]) * 1000;
  
      var autoSlidingActive = false;
      var autoSlidingTO;
      var autoSlidingDelay = 5000; // default autosliding delay value
      var autoSlidingBlocked = false;
  
      var $activeSlide;
      var $activeControlsBg;
      var $prevControl;
  
      function setIDs() {
        $slides.forEach(function($slide, index) {
          $slide.classList.add("fnc-slide-" + (index + 1));
        });
  
        $controls.forEach(function($control, index) {
          $control.setAttribute("data-slide", index + 1);
          $control.classList.add("fnc-nav__control-" + (index + 1));
        });
  
        $controlsBgs.forEach(function($bg, index) {
          $bg.classList.add("fnc-nav__bg-" + (index + 1));
        });
      };
  
      setIDs();
  
      function afterSlidingHandler() {
        $slider.querySelector(".m--previous-slide").classList.remove("m--active-slide", "m--previous-slide");
        $slider.querySelector(".m--previous-nav-bg").classList.remove("m--active-nav-bg", "m--previous-nav-bg");
  
        $activeSlide.classList.remove("m--before-sliding");
        $activeControlsBg.classList.remove("m--nav-bg-before");
        $prevControl.classList.remove("m--prev-control");
        $prevControl.classList.add("m--reset-progress");
        var triggerLayout = $prevControl.offsetTop;
        $prevControl.classList.remove("m--reset-progress");
  
        sliding = false;
        var layoutTrigger = $slider.offsetTop;
  
        if (autoSlidingActive && !autoSlidingBlocked) {
          setAutoslidingTO();
        }
      };
  
      function performSliding(slideID) {
        if (sliding) return;
        sliding = true;
        window.clearTimeout(autoSlidingTO);
        curSlide = slideID;
  
        $prevControl = $slider.querySelector(".m--active-control");
        $prevControl.classList.remove("m--active-control");
        $prevControl.classList.add("m--prev-control");
        $slider.querySelector(prefix + "nav__control-" + slideID).classList.add("m--active-control");
  
        $activeSlide = $slider.querySelector(prefix + "slide-" + slideID);
        $activeControlsBg = $slider.querySelector(prefix + "nav__bg-" + slideID);
  
        $slider.querySelector(".m--active-slide").classList.add("m--previous-slide");
        $slider.querySelector(".m--active-nav-bg").classList.add("m--previous-nav-bg");
  
        $activeSlide.classList.add("m--before-sliding");
        $activeControlsBg.classList.add("m--nav-bg-before");
  
        var layoutTrigger = $activeSlide.offsetTop;
  
        $activeSlide.classList.add("m--active-slide");
        $activeControlsBg.classList.add("m--active-nav-bg");
  
        setTimeout(afterSlidingHandler, slidingAT + slidingDelay);
      };
  
  
  
      function controlClickHandler() {
        if (sliding) return;
        if (this.classList.contains("m--active-control")) return;
        if (options.blockASafterClick) {
          autoSlidingBlocked = true;
          $slider.classList.add("m--autosliding-blocked");
        }
  
        var slideID = +this.getAttribute("data-slide");
  
        performSliding(slideID);
      };
  
      $controls.forEach(function($control) {
        $control.addEventListener("click", controlClickHandler);
      });
  
      function setAutoslidingTO() {
        window.clearTimeout(autoSlidingTO);
        var delay = +options.autoSlidingDelay || autoSlidingDelay;
        curSlide++;
        if (curSlide > numOfSlides) curSlide = 1;
  
        autoSlidingTO = setTimeout(function() {
          performSliding(curSlide);
        }, delay);
      };
  
      if (options.autoSliding || +options.autoSlidingDelay > 0) {
        if (options.autoSliding === false) return;
        
        autoSlidingActive = true;
        setAutoslidingTO();
        
        $slider.classList.add("m--with-autosliding");
        var triggerLayout = $slider.offsetTop;
        
        var delay = +options.autoSlidingDelay || autoSlidingDelay;
        delay += slidingDelay + slidingAT;
        
        $progressAS.forEach(function($progress) {
          $progress.style.transition = "transform " + (delay / 1000) + "s";
        });
      }
      
      $slider.querySelector(".fnc-nav__control:first-child").classList.add("m--active-control");
  
    };
  
    var fncSlider = function(sliderSelector, options) {
      var $sliders = $$(sliderSelector);
  
      $sliders.forEach(function($slider) {
        _fncSliderInit($slider, options);
      });
    };
  
    window.fncSlider = fncSlider;
  }());
  
  /* not part of the slider scripts */
  
  /* Slider initialization
  options:
  autoSliding - boolean
  autoSlidingDelay - delay in ms. If audoSliding is on and no value provided, default value is 5000
  blockASafterClick - boolean. If user clicked any sliding control, autosliding won't start again
  */
  fncSlider(".example-slider", {autoSlidingDelay: 15000});
  
  var $demoCont = document.querySelector(".demo-cont");
  
  [].slice.call(document.querySelectorAll(".fnc-slide__action-btn")).forEach(function($btn) {
    $btn.addEventListener("click", function() {
      $demoCont.classList.toggle("credits-active");
    });
  });
  
// Slider(all Slides in a container)
const slider = document.querySelectorAll(".samples-wrapper")


// Transform value
let value = 0
// trail index number
let trailValue = 0
// interval (Duration)
let interval = 2000

// Function to slide forward
const bluquersSlide = (condition) => {
    // CLear interval
    clearInterval(start)
    // update value and trailValue
    condition === "increase" ? initiateINC() : initiateDEC()
    // move slide
    move(value, trailValue)
    // Restart Animation
    animate()
    // start interal for slides back 
    start = setInterval(() => bluquersSlide("increase"), interval);
}

// function for increase(forward, next) configuration
const initiateINC = () => {
    // Remove active from all trails

    // increase transform value
    value === 80 ? value = 0 : value += 20
    // update trailValue based on value

}

// function for decrease(backward, previous) configuration
const initiateDEC = () => {
     // Remove active from all trails

    // decrease transform value
    value === 0 ? value = 80 : value -= 20
     // update trailValue based on value

}

// function to transform slide 
const move = (S, T) => {

  slider.forEach(link => {
    link.style.transform = `translateX(-${S}%)`
});
    // transform slider

    //add active class to the current trail

}

const tl = gsap.timeline({defaults: {duration: 2, ease: "power1.in"}})
tl.from(".portfolio .container .wrapper .card-wrapper .card .one", {x: "100%", opacity: 1, ease:" power1.in"});




// function to restart animation
const animate = () => tl.restart()

// function to update trailValue based on slide value
   

// Start interval for slides
let start = setInterval(() => bluquersSlide("increase"), interval);





// navigation
const navtl = gsap.timeline({paused:true, reversed: true});
navtl.to(".trans1", .3, {width: '350vw', ease: "elastic.out(1, .2)", delay: 0});
     
navtl.to(".trans2", .3, {width: '150vw', ease: "elastic.out(1, .2)", delay: 0});

navtl.to(".trans3", .4, {width: '400vw', ease: "elastic.out(1, .2)", delay: 0});

navtl.to('.nav-main__content', {opacity: '1', visibility: 'visible', yPercent: -5, duration: .5, transformOrigin: 'bottom', stagger: .3});


const navIcon = document.querySelector('.header .nav-icon');
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

var navColors = document.querySelectorAll('nav .container .nav-container .nav-main__content--box .nav-color-container .nav-color-selector');

navColors.forEach(navColor => {
    navColor.addEventListener('click', () => {
        document.body.classList.remove('noScroll');
        navtl.reverse()
        navIcon.classList.remove('nav-anim')
    })
}); 

const allLinks = document.querySelectorAll('.social-links--box a');

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('noScroll');
        navtl.reverse()
        navIcon.classList.remove('nav-anim')
                
    })
});



// function to slide when trail is clicked


// Add function to all trails



$(function() {

	// Get the form.
	var form = $('#emailForm');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData,
			success: function (text) {
			   // console.log(text);
                if (text == "Ok") {
                    $(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text("Message has been sent!");

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#subject').val('');
			$('#message').val('');

                } else if(text == "Error") {
                    $(formMessages).removeClass('success');
			$(formMessages).addClass('error');
$(formMessages).text("Error: AutoResponder Failed");
                    
                }
                 else if(text == "Ooops") {
                    $(formMessages).removeClass('success');
			$(formMessages).addClass('error');
$(formMessages).text("Ooops an error occurred"); 
                    
                }
                else{
                    $(formMessages).text('Submitted');
                    $(formMessages).addClass('success');

                }
            }
		}) 

	});

});


//mobile_touch.//

const mobileTouch = document.querySelectorAll('.footer .footer-container .more .upload a');
    mobileTouch.forEach(function (wrap) {
        wrap.addEventListener('touchstart', () => {
            mobileTouch.forEach((wrap) => {
                if (wrap.classList.contains('mobile-touch')) {
                    wrap.classList.remove('mobile-touch');
                }
            });
            wrap.classList.add('mobile-touch');

        })
    });