var top_open_app = document.querySelector('.top_open_app');
var close_top = document.querySelector('.close');
var nav = document.querySelector('.nav');
var slider = document.querySelector('.slider').querySelector('img');
close_top.addEventListener('click', function () {
    top_open_app.style.display = 'none';
    nav.style.backgroundColor = 'red';
    slider.style.top = '0px';
});