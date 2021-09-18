var data = [
    { name: 'x1', subject: 'javascript', score: 100 },
    { name: 'x2', subject: 'javascript', score: 90 },
    { name: 'x3', subject: 'javascript', score: 95 },
    { name: 'x4', subject: 'javascript', score: 89 }
];
var tbody = document.querySelector('tbody');
for (var i = 0; i < data.length; i++) {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (var k in data[i]) {
        var td = document.createElement('td');
        td.innerHTML = data[i][k];
        tr.appendChild(td);
    }
    var td = document.createElement('td');
    tr.appendChild(td);
    td.innerHTML = '<a herf="javascropt:void(0)">删除</a>'
}
var as = document.querySelectorAll('a');
for (var i = 0; i < as.length; i++) {
    as[i].onclick = function () { // 父亲.removeChild(儿子节点)
        tbody.removeChild(this.parentNode.parentNode);
    }
}

var btns = document.querySelectorAll('button');
btns[1].addEventListener('click', function () {
    alert('我爱你（我草泥马）！')
});
btns[1].addEventListener('click', fn); // 不需要再函数后面加上()了
function fn() {
    alert('我草泥马');
    btns[1].removeEventListener('click', fn); // 使用后禁止
}

var div = document.querySelector('div');
/*  event就是一个事件对象，写在括号里当形参
   事件对象只有有了事件才会存在，系统自动创建，不需要传递参数
   事件对象是事件的一系列相关数据的集合
   可以自己命名，常用e来代替 
   兼容性问题 ie678 window.event*/
div.onclick = function (event) {
    console.log(event);
}

div.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target); // 返回触发事件元素
    console.log(this); // 返回绑定的事件对象
    console.log(event.type); // 事件类型

    console.log(event.clientX);
    console.log(event.pageY);

    /* event.preventDefault(); // 链接a不跳转 
    event.returnValue; 
    return false; // return后面的事件不执行 */
})

var ul = document.querySelector('ul');
ul.addEventListener('click', function (e) {
    console.log(e.target); // 返回触发的元素是什么
    var lis = ul.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = '#fff';
    }
    e.target.style.backgroundColor = 'pink';
    console.log(this); // 被绑定的事件元素
    e.stopPropagation(); // 用于阻止冒泡事件 兼容性 
    e.cancelBubble = true; // 组织冒泡事件 window.event.canceBubble = true;
})

// 冒泡阻止的两种方法 stopPropagation() 用于需要点击的元素添加的属性

ul.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // 禁用右键菜单
});

document.querySelector('.text_test').addEventListener('selectstart', function (e) {
    e.preventDefault(); // 无法选中文字
});

document.addEventListener('mousemove', function (e) {
    document.querySelector('.gif_img').style.top = e.clientY + 25 + 'px';
    document.querySelector('.gif_img').style.left = e.clientX + 25 + 'px';
})

document.addEventListener('keyup', function (e) {
    // console.log('键盘弹起');
    if (e.key === 's' || e.key === 'S') {
        document.querySelector('input').focus();
    }
    if (document.querySelector('input').value != '') {
        document.querySelector('.big').style.display = 'block';
        document.querySelector('.big').innerHTML = document.querySelector('input').value;
        document.querySelector('input').style.margin = 0;
    } else {
        document.querySelector('.big').style.display = 'none';
        document.querySelector('.big').innerHTML = '';
        document.querySelector('input').style.marginTop = 70 + 'px';
    }
});

document.querySelector('input').addEventListener('blur', function (e) {
    document.querySelector('.big').style.display = 'none';
    document.querySelector('input').style.marginTop = 70 + 'px';
});

document.querySelector('input').addEventListener('focus', function (e) {
    if (document.querySelector('input').value != '') {
        document.querySelector('.big').style.display = 'block';
        document.querySelector('input').style.margin = 0;
    }
});

document.addEventListener('keydown', function (e) {
    // console.log('键盘按下');
});
document.addEventListener('keypress', function (e) {
    // console.log('键盘按下，不能识别功能键');
});


var search_num = window.location.search.indexOf('=', 0);
var search_new = window.location.search.substr(search_num + 1);
console.log(search_new); // 两个页面相互传值接收
document.querySelector('input').value = search_new;