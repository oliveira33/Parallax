let layer_1 = document.getElementById('img-first-layer');
let layer_2 = document.getElementById('img-second-layer');
let layer_3 = document.getElementById('img-third-layer');
let title = document.getElementById('title');
let container_parallax = document.getElementById('container-parallax');
let header = document.getElementsByTagName('header')[0];

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    layer_1.style.bottom = value * 0.25 + 'px';
    layer_2.style.bottom = value * 0.75 + 'px';
    layer_3.style.bottom = value + 'px';
    container_parallax.style.top = value + 'px';

    if (value > '220'){
        header.style.background = '#757575D9';
    }
    else{
        header.style.background = 'transparent';
    }
})