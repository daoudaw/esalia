const arrow_link = document.getElementById('arrow_link');
const border_bottom = document.querySelector('.border_bottom');



setInterval(() => {
    var positionScroll = window.pageYOffset || document.documentElement.scrollTop;
  
    if(positionScroll === 0 ) {
        arrow_link.style.visibility = "hidden";
        arrow_link.classList.add('animationFadeOut');
        arrow_link.classList.remove('animationFadeIn');
    }
    else {
        arrow_link.style.visibility = "visible";
        arrow_link.classList.add('animationFadeIn');
        arrow_link.classList.remove('animationFadeOut');
    }
    
}, 100);

let randomNumberWidth = Math.floor(Math.random() * 15) + 5;
border_bottom.style.width = `${randomNumberWidth}rem`


let randomNumberMarginLeft = Math.floor(Math.random() * 5) + -2;
border_bottom.style.marginLeft = `${randomNumberMarginLeft}rem`