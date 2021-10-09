var img_png = document.querySelector('.img_png');
document.addEventListener('mousemove', function (e) {
    img_png.style.display = 'block';
    img_png.style.top = e.pageY + 'px';
    img_png.style.left = e.pageX + 10 + 'px';
});

// var set_stopTime = prompt('输入停止时间：2021-9-16 0:0:0');

/* window.addEventListener('load', function () {
    console.log('assaa');
})

document.addEventListener('DOMContentLoaded', function () {
    alert('????');
}) */

window.addEventListener('resize', function () {
    if (window.innerWidth < 800)
        document.querySelector('.win_sizeChange').style.display = 'none';
    else
        document.querySelector('.win_sizeChange').style.display = 'block';
});

window.setTimeout(function () {
    console.log('timeout!');
}, 2000); // 毫秒数，可以省略window，直接调用，直接写函数或者函数名
window.setTimeout(timeSet, 2000); // 不推荐 'timeSet()'
function timeSet() {
    console.log('sss');
}
var time1 = setTimeout(timeSet, 3000);
var time2 = setTimeout(timeSet, 4000); // 可以用不同的名字来使用相同的定时器

var time3 = setTimeout(function () {
    document.querySelector('.win_sizeChange').style.display = 'none';
}, 5000);

var btn = document.querySelector('button');
var nav_to = document.querySelector('.nav_to');
var timeDown = 10;
var timecount = null;
function click_stopHide() {
    btn.innerHTML = '停止成功！' + (timeDown--) + '秒后再次重试';
}
btn.addEventListener('click', function (e) {
    this.disabled = true;
    clearTimeout(time3);
    click_stopHide();
    timecount = window.setInterval(function () {
        if (timeDown == 0) {
            clearInterval(timecount);
            btn.disabled = false;
            btn.innerHTML = '停止隐藏盒子';
            timeDown = 10;
        } else {
            click_stopHide();
        }
    }, 1000);
});

nav_to.addEventListener('click', function (e) {
    window.location.href = 'https://www.bilibili.com'; // 自动跳转或者绑定事件跳转我网页
});

window.setInterval(function () { }, 1000); // 一次开启永不停歇，后面的事件就是再次执行的间隔时间

// var inputTime = +new Date(set_stopTime);
var inputTime = +new Date('2021-10-20 00:00:00');
var time_boxs = document.querySelectorAll('.time_box');
function countDown(time) {
    var nowTime = +new Date();
    var times = (inputTime - nowTime) / 1000;
    var h = parseInt(times / 3600 % 24);
    time_boxs[0].innerHTML = h > 9 ? h : '0' + h;
    var m = parseInt(times / 60 % 60);
    time_boxs[1].innerHTML = m > 9 ? m : '0' + m;
    var s = parseInt(times % 60);
    time_boxs[2].innerHTML = s > 9 ? s : '0' + s;
}
countDown();
window.setInterval(countDown, 1000);