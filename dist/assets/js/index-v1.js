document.onreadystatechange=function(){"complete"!==document.readyState?(document.querySelector("body").style.visibility="hidden",document.querySelector("#loader").style.visibility="visible"):(document.querySelector("#loader").style.display="none",document.querySelector("body").style.visibility="visible")};let logoV=document.querySelector(".logo__v"),logoM=document.querySelector(".logo__m"),logoWrapper=document.querySelector(".logo-wrapper");logoWrapper.addEventListener("mouseenter",e=>{anime.remove(logoV),anime.remove(logoM),anime({easing:"easeInOutExpo",targets:logoV,points:"30.9,50.5 9.5,0 0,0 26.1,61.8 35.7,61.8 61.8,0 52.3,0",duration:300}),anime({easing:"easeInOutExpo",targets:logoM,points:"90.5,0 80.9,31 71.4,0 61.8,0 61.8,61.8 71.4,61.8 71.4,31 76.1,46.6 85.7,46.6 90.5,31 90.5,61.8 100,61.8 100,0",duration:300})}),logoWrapper.addEventListener("mouseleave",e=>{anime.remove(logoV),anime.remove(logoM),anime({easing:"easeInOutExpo",targets:logoV,points:"19.4,41.2 9.9,0 0.4,0 14.6,61.8 24.1,61.8 38.4,0 28.9,0",duration:300}),anime({easing:"easeInOutExpo",targets:logoM,points:"90.5,0 69.2,38.1 47.9,0 38.4,0 38.4,61.8 47.9,61.8 47.9,17 64.5,46.6 74,46.6 90.5,17 90.5,61.8 100,61.8 100,0",duration:300})});let nav=$(".g-nav-wrapper"),tlPageLoad=anime.timeline({});tlPageLoad.add({targets:"nav",easing:"easeOutExpo",translateY:[-200,0],duration:2e3},0),tlPageLoad.add({targets:".logo-wrapper",easing:"easeOutExpo",opacity:1,duration:100},0),tlPageLoad.add({targets:".home-wrapper__intro, .home-wrapper__victor, .home-wrapper__ihelp, .home-wrapper__desc",easing:"easeOutExpo",translateY:[100,0],opacity:[0,1],duration:2e3,delay:anime.stagger(150)},100),tlPageLoad.add({targets:".flex-container",easing:"easeOutExpo",opacity:[0,1],duration:100},0),anime({targets:".home-wrapper__victor img",keyframes:[{rotateZ:0,duration:1e3,easing:"spring"},{rotateZ:-10,duration:1e3,easing:"spring"},{rotateZ:10,duration:1e3,easing:"spring"},{rotateZ:0,duration:1e3,easing:"spring"},{rotateZ:0,duration:4e3,easing:"spring"},],loop:!0}),ScrollReveal().reveal(".work-wrapper",{viewFactor:.2,distance:"100px",duration:800}),ScrollReveal().reveal(".about-me-wrapper",{viewFactor:.2,distance:"100px",duration:800}),ScrollReveal().reveal(".say-hi-wrapper",{viewFactor:.2,distance:"100px",duration:800});