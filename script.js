const arrow_link = document.getElementById('arrow_link');
const border_bottom = document.querySelector('.border_bottom');
const search_lang = document.querySelector('.search_lang');
const search_lang_hiden = $('.search_lang li:not(:first-child)');
const search_input = document.querySelector('.search_input');
const bt_search = document.querySelector('.bt_search');


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

search_lang.addEventListener('mouseover', () => {
    search_lang_hiden.show();

});

search_lang.addEventListener('mouseout', () => {
    search_lang_hiden.hide();

});

bt_search.addEventListener('click', () => {
    search_input.classList.toggle('show');
    search_lang.classList.toggle('hide');
    search_input.classList.add('animationSearchButton');
    search_lang.classList.add('animationSearchButton');
});