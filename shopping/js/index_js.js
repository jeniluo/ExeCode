var img_png = document.querySelector('.img_png');
document.addEventListener('mousemove', function (e) {
    img_png.style.display = 'block';
    img_png.style.top = e.pageY + 'px';
    img_png.style.left = e.pageX + 10 + 'px';
})

var nav_names = document.querySelector('.navitems').querySelectorAll('#nav');
var nav_box = document.querySelector('#nav_box');
var img_url = ['upload/nav1.png', 'upload/nav2.jfif', 'upload/nav3.jfif', 'upload/nav4.jfif', 'upload/nav5.png', 'upload/nav6.jfif', 'upload/nav7.png', 'upload/nav8.png'];
for (var i = 0; i < nav_names.length; i++) {
    nav_names[i].setAttribute('data-index', i);
    nav_names[i].addEventListener('mouseover', function () {
        nav_box.style.display = 'block';
        nav_box.style.background = "url(" + img_url[this.getAttribute('data-index')] + ")";
    });
    /* nav_names[i].onmouseover = function () {
        nav_box.style.display = 'block';
        nav_box.style.background = "url(" + img_url[this.getAttribute('data-index')] + ")";
    } */
    nav_names[i].addEventListener('mouseout', function () {
        nav_box.style.display = 'none';
    })
    /* nav_names[i].onmouseout = function () {
        nav_box.style.display = 'none';
    } */
}