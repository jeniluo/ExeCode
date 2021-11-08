// 跟随光标的小图片
var img_png = document.querySelector('.img_png');
img_png.style.display = 'block';
document.addEventListener('mousemove', function (e) {
    if (img_png.style.display === 'block') {
        img_png.style.top = e.pageY + 'px';
        img_png.style.left = e.pageX + 10 + 'px';
    } else {
        img_png.style.display = 'none';
    }
});
// 屏幕滚动获取
var w_s_Y = 0;
window.setInterval(function () {
    w_s_Y = window.scrollY
}, 1)
// 图片滚动跟随
document.addEventListener('scroll', function (e) {
    var temp = window.scrollY - w_s_Y;
    // console.log(temp)
    img_png.style.top = img_png.offsetTop + temp + 'px';
});
// 开启关闭跟随图片
var key_flow = document.querySelector('.key_flow');
key_flow.addEventListener('click', function () {
    if (img_png.style.display === 'block') {
        img_png.style.display = 'none';
    } else {
        img_png.style.display = 'block';
    }
});
// 锚点函数(无动画)
/* function Anchor_point(obj, distance) {
    obj.addEventListener('click', function () {
        window.scroll(0, distance);
    });
}; */
// 锚点函数(有动画)
function Anchor_point(obj, target) {
    clearInterval(obj.timer);
    obj.addEventListener('click', function () {
        obj.timer = setInterval(function () {
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (target == window.pageYOffset) {
                clearInterval(obj.timer);
            };
            window.scroll(0, window.pageYOffset + step);
        }, 30);
    });
};
// 返回顶部
var Totop = document.querySelector('.Totop');
Anchor_point(Totop, 0);
// 家用电器
var Electrical_appliances = document.querySelector('.Electrical_appliances');
Anchor_point(Electrical_appliances, 1593);
// 手机通讯
var Phone = document.querySelector('.Phone');
Anchor_point(Phone, 2100);
// 电脑办公
var Pc = document.querySelector('.Pc');
Anchor_point(Pc, 2607);

var nav_names = document.querySelector('.navitems').querySelectorAll('#nav');
var nav_box = document.querySelector('#nav_box');
var img_url = ['upload/nav1.png', 'upload/nav2.jfif', 'upload/nav3.jfif', 'upload/nav4.jfif', 'upload/nav5.png', 'upload/nav6.jfif', 'upload/nav7.png', 'upload/nav8.png'];
var ol = document.querySelector('.circle');
// 循环添加元素li
for (var i = 0; i < img_url.length; i++) {
    var li = document.createElement('li');
    ol.appendChild(li);
};
// 停留在文字上展示对应的图片和文字高亮
for (var i = 0; i < nav_names.length; i++) {
    nav_names[i].setAttribute('data-index', i);
    nav_names[i].addEventListener('mouseover', function () {
        for (var i = 0; i < nav_names.length; i++) {
            nav_names[i].style.color = 'black';
            nav_names[i].style.fontWeight = 500;
            ol.children[i].style.backgroundColor = 'transparent';
        }
        nav_box.style.display = 'block';
        nav_box.style.background = "url(" + img_url[this.getAttribute('data-index')] + ")";
        clearInterval(nav_box.timer);
        this.style.color = 'red';
        this.style.fontWeight = 800;
        ol.children[this.getAttribute('data-index')].style.backgroundColor = 'red';
    });
    nav_names[i].addEventListener('mouseout', function () {
        scroll_timer(nav_box);
    });
};
// 停留小圆点展示对应的图片和文字高亮
for (var i = 0; i < ol.children.length; i++) {
    ol.children[i].setAttribute('data-index', i);
    ol.children[i].addEventListener('mouseenter', function () {
        for (var i = 0; i < ol.children.length; i++) {
            nav_names[i].style.color = 'black';
            nav_names[i].style.fontWeight = 500;
            ol.children[i].style.backgroundColor = 'transparent';
        };
        nav_box.style.display = 'block';
        nav_box.style.background = "url(" + img_url[this.getAttribute('data-index')] + ")";
        clearInterval(nav_box.timer);
        nav_names[this.getAttribute('data-index')].style.color = 'red';
        nav_names[this.getAttribute('data-index')].style.fontWeight = 800;
        this.style.backgroundColor = 'red';
    });
    ol.children[i].addEventListener('mouseout', function () {
        scroll_timer(nav_box);
    });
};
// 图片和文字高亮自动切换，计时器
var i_scroll = 0;
function scroll_timer(obj) {
    obj.timer = setInterval(function () {
        nav_box.style.display = 'block';
        for (var i = 0; i < nav_names.length; i++) {
            nav_names[i].style.color = 'black';
            nav_names[i].style.fontWeight = 500;
            ol.children[i].style.backgroundColor = 'transparent';
        }
        nav_box.style.background = "url(" + img_url[nav_names[i_scroll].getAttribute('data-index')] + ")";
        nav_names[i_scroll].style.color = 'red';
        ol.children[i_scroll].style.backgroundColor = 'red';
        nav_names[i_scroll++].style.fontWeight = 800;
        if (i_scroll == 8) {
            i_scroll = 0;
        }
    }, 2300);
};
scroll_timer(nav_box);
// 倒计时
var inputTime = +new Date('2022-10-12 00:00:00');
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
countDown(); // 提前调用一次，避免刷新页面的空白数据
window.setInterval(countDown, 1000);

const data_gather = {
    data() {
        return {
            hotwords_list: ['优惠购首发', '亿元优惠', '9.9元团购', '每满99减30', '办公用品', '电脑', '通信'],
            dd_list: ['电脑、办公', '家居、家具、家装、厨具', '男装、女装、童装、内衣', '个户化妆、清洁用品、宠物', '鞋靴、箱包、珍宝、奢侈品', '运动户外、钟表', '汽车、汽车用品', '母婴、玩具乐器', '食品、酒类、生鲜、特产', '医药保健', '图书、音像、电子书', '彩票、旅行、充值、票务', '理财、众筹、白条、保险'],
        }
    }
};
Vue.createApp(data_gather).mount("#hotwords");