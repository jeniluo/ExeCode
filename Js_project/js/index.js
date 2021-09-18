var eyes = document.querySelector('#eyes');
var password = document.querySelector('#password');
var flag = 0;
eyes.onclick = function () {
    if (!flag) {
        password.type = 'text';
        eyes.src = 'images/open.png';
        this.style.backgroundColor = 'pink';
        flag = 1;
    } else {
        password.type = 'password';
        eyes.src = 'images/close.png';
        this.style.backgroundColor = '#fff';
        flag = 0;
    }
}

var li_lists = document.querySelector('.tab_list').querySelectorAll('li');
var items = document.querySelector('.tab_content').querySelectorAll('.item');
for (var i = 0; i < li_lists.length; i++) {
    li_lists[i].setAttribute('data-index', i);
    li_lists[i].onclick = function () {
        for (var i = 0; i < li_lists.length; i++) {
            li_lists[i].className = '';
        }
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = 'none';
        }
        this.className = 'lis';
        items[this.getAttribute('data-index')].style.display = 'block';
    }
}

var no = document.querySelector('.no');
var box1 = document.querySelector('.box1');
no.onclick = function () {
    box1.style.display = 'none';
}

var icoInfo = ['充话费', '旅行', '车险', '游戏', '彩票', '电影', '酒店', '理财', '找服务', '演出', '水电煤', '火车票',];
var jLT = document.querySelector('.jLT');
var php = jLT.querySelectorAll('p');
var li = jLT.querySelectorAll('i');
for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundPosition = '0 -' + 44 * i + 'px';
    php[i].innerHTML = icoInfo[i];
}

var search = document.querySelector('.search');
search.onfocus = function () {
    if (this.value === '手机')
        this.value = '';
    this.style.color = '#000';
}
search.onblur = function () {
    if (this.value === '' || this.value === ' ')
        this.value = '手机';
    this.style.color = '#999';
}

var btn_search = document.querySelector('.btn_search');
btn_search.onmouseover = function () {
    this.className = this.className + ' ' + 'btn_search_change';
    search.style.height = '50px';
    search.style.fontSize = '18px';
}
btn_search.onmouseout = function () {
    this.className = 'btn_search';
    search.style.height = '21px';
    search.style.fontSize = '12px';
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}
var img_url = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
var random_num = getRandomIntInclusive(0, 3);
document.body.style.background = 'url(' + img_url[random_num] + ') no-repeat top center';
var imgs = document.querySelector('.change_background').getElementsByTagName('img');
for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function () {
        document.body.style.background = 'url(' + this.src + ') no-repeat top center';
    }
}

var select = document.querySelector('#select');
var son_select = document.querySelectorAll('.son_select');
var hold_color = document.querySelectorAll('.hold_color');
var count = 0;
select.onclick = function () {
    if (this.checked) {
        this.checked = true;
        count = son_select.length;
        for (var i = 0; i < son_select.length; i++) {
            son_select[i].checked = true;
        }
    } else {
        this.checked = false;
        count = son_select.length;
        for (var i = 0; i < son_select.length; i++) {
            son_select[i].checked = false;
        }
    }
}

for (var i = 0; i < son_select.length; i++) {
    son_select[i].onclick = function () {
        if (this.checked) {
            this.checked = true;
            count++;
        } else {
            this.checked = false;
            count--;
        }
        if (count == son_select.length) {
            select.checked = true;
        } else {
            select.checked = false;
        }
    }
}

for (var i = 0; i < hold_color.length; i++) {
    // console.log(hold_color[i]);  每一个的具体值
    hold_color[i].onmouseover = function () {
        this.style.backgroundColor = 'rgb(72, 255, 255)';
        // console.log(hold_color[i]);  未定义undefined，需要使用this
    }
    hold_color[i].onmouseout = function () {
        this.style.backgroundColor = '#fff';
    }
}

var node = document.querySelectorAll('.down_list');
for (var i = 0; i < node.length; i++) {
    node[i].onmouseover = function () {
        this.children[0].style.display = 'block';
    }
    node[i].onmouseout = function () {
        this.children[0].style.display = 'none';
    }
}

var text_area = document.querySelector('#text_area');
var btn_send = document.querySelector('.btn_send');
var ul_show = document.querySelector('.ul_show');
btn_send.onclick = function () {
    var li = document.createElement('li');
    ul_show.insertBefore(li, ul_show.children[0]);
    if (text_area.value != '') {
        li.innerHTML = text_area.value + "<a herf='javascript:void(0)'>删除</a>";
        var as = document.querySelectorAll('a');
        for (var i = 0; i < as.length; i++) {
            as[i].onclick = function () {
                ul_show.removeChild(this.parentNode);
            }
        }
    } else {
        alert('你没有输入信息！');
    }
}