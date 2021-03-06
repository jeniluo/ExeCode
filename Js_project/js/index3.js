var img_png = document.querySelector('.img_png');
document.addEventListener('mousemove', function (e) {
    img_png.style.display = 'block';
    img_png.style.top = e.pageY + 'px';
    img_png.style.left = e.pageX + 10 + 'px';
});

var father = document.querySelector('.father');
var son = document.querySelector('.son');
console.log(son.offsetTop);
console.log(son.offsetLeft); // 距离有定位的父亲的距离，没有右和下
console.log(son.offsetWidth);
console.log(son.offsetHeight); // 包含 padding + border + width
console.log(son.offsetParent); // 返回具有定位的父亲，不然就是body，不同于element.parentNode不需要定位

document.addEventListener('mousemove', function (e) {
    var left_num = e.pageX - father.offsetLeft;
    var top_num = e.pageY - father.offsetTop;
    son.innerHTML = left_num + ',' + top_num;
})

var show_login = document.querySelector('.login_jump_box');
var click_login = document.querySelector('.click_login');
var body = document.body;
var login = document.querySelector('.login');
var close_btn = document.querySelector('.close_btn');
login.addEventListener('click', function (e) {
    show_login.style.display = 'block';
    body.style.backgroundColor = 'rgba(0, 0, 0, .2)';
});

close_btn.addEventListener('click', function (e) {
    show_login.style.display = 'none';
    body.style.backgroundColor = '#fff';
});
// 移动登录框
document.querySelector('.top').addEventListener('mousedown', function (e) {
    var move_left = e.pageX - show_login.offsetLeft;
    var move_top = e.pageY - show_login.offsetTop;
    document.addEventListener('mousemove', move);
    function move(e) {
        show_login.style.top = e.pageY - move_top + 'px';
        show_login.style.left = e.pageX - move_left + 'px';
    };
    document.addEventListener('mouseup', function (e) {
        document.removeEventListener('mousemove', move);
    });
});
// 查看放大图片
var img_show = document.querySelector('.img_show');
var mask = document.querySelector('.mask');
var big_img_box = document.querySelector('.big_img_box');
img_show.addEventListener('mouseover', function (e) {
    mask.style.display = 'block';
    big_img_box.style.display = 'block';
});
img_show.addEventListener('mouseout', function (e) {
    mask.style.display = 'none';
    big_img_box.style.display = 'none';
});
img_show.addEventListener('mousemove', function (e) {
    var X = e.pageX - this.offsetLeft;
    // console.log(X);
    var Y = e.pageY - this.offsetTop; // 鼠标在盒子里的位置
    var max_Y = Y - mask.offsetHeight / 2;
    var max_X = X - mask.offsetWidth / 2; // 遮罩层中心跟随鼠标
    if (max_X <= 0) {
        max_X = 0;
    } else if (max_X >= img_show.offsetWidth - mask.offsetWidth) {
        max_X = img_show.offsetWidth - mask.offsetWidth;
    };
    if (max_Y <= 0) {
        max_Y = 0;
    } else if (max_Y >= img_show.offsetHeight - mask.offsetHeight) {
        max_Y = img_show.offsetHeight - mask.offsetHeight;
    }; // 给定遮罩层最大的移动位置
    mask.style.top = max_Y + 'px';
    mask.style.left = max_X + 'px'; // 利用定位进行遮罩层的移动

    var img_big = document.querySelector('.img_big');
    var img_big_Xmax = img_big.offsetWidth - big_img_box.offsetWidth;
    var bigX = max_X * img_big_Xmax / (img_show.offsetWidth - mask.offsetWidth);
    var bigY = max_Y * img_big_Xmax / (img_show.offsetHeight - mask.offsetHeight);
    img_big.style.left = -bigX + 'px';
    img_big.style.top = -bigY + 'px'; // 大小框以及大小图片成比例，小框移动距离和框的比例也是大框中图片移动的比例
}); // 小的可移动距离总共25，大的可移动距离总共50，小的移动1，大的移动2

(function (a) {
    console.log(a);
})(1);
// 上滑定位
var sliderBar = document.querySelector('.slider_bar');
var banner = document.querySelector('.banner');
var bannerTop = banner.offsetTop;
sliderBar.style.top = bannerTop + 50 + 'px';
document.addEventListener('scroll', function () {
    if (window.pageYOffset >= bannerTop) {
        sliderBar.style.position = 'fixed';
        sliderBar.style.top = 50 + 'px';
        document.querySelector('.slider_bar_a').style.display = 'block';
    } else {
        var bannerTop_change = banner.offsetTop;
        sliderBar.style.position = 'absolute';
        sliderBar.style.top = bannerTop_change + 50 + 'px';
        document.querySelector('.slider_bar_a').style.display = 'none';
    }
});
// 返回顶部
document.querySelector('.slider_bar_a').addEventListener('click', function () {
    window.pageYOffset = 0;
});

var sport = document.querySelector('.sport');
var stop_sport = document.querySelector('.stop_sport');
/* var sport_timeer = setInterval(function () {
    var top = Math.floor(Math.random() * (500 - 0 + 1)) + 0;
    var left = Math.floor(Math.random() * (500 - 0 + 1)) + 0;
    sport.style.top = top + 'px';
    sport.style.left = left + 'px';
}, 100); */


// 动画函数封装
function annimation(obj, max, min, fun_do) {
    obj.timer = setInterval(function () {
        var top = Math.floor(Math.random() * (max - min + 1)) + min;
        var left = Math.floor(Math.random() * (max - min + 1)) + min;
        obj.style.top = top + 'px';
        obj.style.left = left + 'px';
        if (top == 250 && fun_do) {
            obj.style.backgroundColor = 'red';
            fun_do();
        }
    }, 100);
}
annimation(sport, 500, 0, function () {
    console.log('111');
});
var i = 0;
stop_sport.addEventListener('click', function () {
    if (i == 0) {
        clearInterval(sport.timer);
        i++;
    } else {
        annimation(sport, 500, 0);
        i--;
    }
});

var go = document.querySelector('.go');
var go_show = document.querySelector('.go_show');
go.addEventListener('mouseenter', function () {
    animate(go_show, 0, function () {
        go.innerHTML = '⬅';
    })
});
go.addEventListener('mouseout', function () {
    animate(go_show, -150, function () {
        go.innerHTML = '➡';
    })
});