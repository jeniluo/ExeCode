var local_nav_icon = document.querySelectorAll('.local_nav_icon');
var local_nav_title = document.querySelectorAll('.local_nav_title');
var local_a = document.querySelector('.local_nav').querySelectorAll('a');
var local_nav_title_array = ['景点·玩乐', '周边游', '美食林', '一日游', '当地攻略']
for (var i = 0; i < local_nav_icon.length; i++) {
    local_nav_icon[i].style.background = 'url("images/localnav_bg.png") no-repeat 0px -' + 32 * i + 'px';
    local_nav_icon[i].style.backgroundSize = '32px auto';
    local_nav_title[i].innerHTML = local_nav_title_array[i];
    local_a[i].title = local_nav_title_array[i];
};

var subnav_icon = document.querySelectorAll('.subnav_icon');
var subnav_title = document.querySelectorAll('.subnav_title');
var subnav_a = document.querySelector('.subnav_entry').querySelectorAll('a');
var subnav_title_array = ['WiFi电话卡', '保险·签证', '外币兑换', '购物', '当地向导', '自由行', '境外玩乐', '礼品卡', '信用卡', '更多'];
for (var i = 0; i < subnav_icon.length; i++) {
    subnav_icon[i].style.background = 'url("images/subnav-bg.png") no-repeat 0px -' + i * 24 + 'px';
    subnav_icon[i].style.backgroundSize = '24px auto';
    subnav_title[i].innerHTML = subnav_title_array[i];
    subnav_a[i].title = subnav_title_array[i];
}