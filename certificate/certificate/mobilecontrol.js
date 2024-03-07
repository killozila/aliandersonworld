let nextButton = document.getElementById('nextmobile');
let prevButton = document.getElementById('prevmobile');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

nextButton.onclick = function(){
    showSlider('nextmobile');
}
prevButton.onclick = function(){
    showSlider('prevmobile');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('nextmobile', 'prevmobile');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'nextmobile'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('nextmobile');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prevmobile');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}