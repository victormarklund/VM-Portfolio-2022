// Show page when loaded
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};


// Page Load Animation
let tlPageLoad = anime.timeline({
});
tlPageLoad.add({
    targets: 'nav',
    easing: 'easeOutExpo',
    translateY: [-200, 0],
    duration: 2000,
}, 0);
tlPageLoad.add({
    targets: '.logo-wrapper',
    easing: 'easeOutExpo',
    opacity: 1,
    duration: 100,
}, 0);
tlPageLoad.add({
    targets: '.text-wrapper, .imgdesc-wrapper, .print, iframe',
    easing: 'easeOutExpo',
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 1200,
}, 100);


// Close Icon Hover
let closeIcon = document.querySelector('.close');
let logoWrapper = document.querySelector('.logo-wrapper');
logoWrapper.addEventListener('mouseenter', (event) => {
    anime.remove(closeIcon);
    anime({
        easing: 'easeInOutExpo',
        targets: closeIcon,
        rotateZ: '90deg',
        duration: 300,
    });
});
logoWrapper.addEventListener('mouseleave', (event) => {
    anime.remove(closeIcon);
    anime({
        easing: 'easeInOutExpo',
        targets: closeIcon,
        rotateZ: '0deg',
        duration: 300,
    });
});
