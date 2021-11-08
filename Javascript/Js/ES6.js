var that;
class Tab {
    constructor(id) {
        // 获取元素
        that = this;
        this.main = document.querySelector(id);
        this.lis = document.querySelector('.headnav').querySelectorAll('li');
        this.lis_con = document.querySelector('.content').querySelectorAll('li');
        this.close = document.querySelector('.headnav').querySelectorAll('.close');
        this.add_more = document.querySelector('.add_more');
        this.title = document.querySelectorAll('.title');
        this.con = document.querySelectorAll('.con');
        this.init();
    }
    // 获取函数
    updateNode() {
        this.lis = document.querySelector('.headnav').querySelectorAll('li');
        this.lis_con = document.querySelector('.content').querySelectorAll('li');
        this.close = document.querySelector('.headnav').querySelectorAll('.close');
        this.add_more = document.querySelector('.add_more');
        this.title = document.querySelectorAll('.title');
        this.con = document.querySelectorAll('.con');
    }
    // 初始化
    init() {
        this.updateNode();
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].addEventListener('click', this.toggleTab);
            this.close[i].addEventListener('click', this.removeTab);
            this.con[i].addEventListener('dblclick', this.editTab);
            this.title[i].addEventListener('dblclick', this.editTab);
        }
        this.add_more.addEventListener('click', this.addTab);
    }
    // 切换
    toggleTab() {
        that.remove_style();
        this.style.backgroundColor = '#ccc';
        that.lis_con[this.index].style.display = 'block';
    }
    // 添加
    addTab() {
        that.remove_style();
        // 利用insertAdjacentHTML直接添加字符串（元素）
        document.querySelector('.headnav').querySelector('ul').insertAdjacentHTML('beforeend', '<li><span class="title">傻逼</span><span class="close">X</span></li>');
        document.querySelector('.content').querySelector('ul').insertAdjacentHTML('beforeend', '<li><span class="con">我草泥马' + (Math.floor(Math.random() * (10 - 1 + 1)) + 1) + '</span></li>');
        that.init();
        that.select_one();
    }
    // 添加删除默认选中
    select_one() {
        that.remove_style();
        if (that.lis.length != 0) {
            that.lis[that.lis.length - 1].style.backgroundColor = '#ccc';
            that.lis_con[that.lis_con.length - 1].style.display = 'block';
        }
    }
    // 删除
    removeTab(e) {
        e.stopPropagation();
        var index = this.parentNode.index;
        // console.log(index);
        that.lis[index].remove();
        that.lis_con[index].remove();
        that.init();
        that.select_one();
    }
    // 修改
    editTab() {
        window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection.empty();
        var index = this.parentNode.index;
        var value_span = this.innerHTML;
        this.innerHTML = '<input type = "text" />';
        this.children[0].value = value_span;
        this.children[0].select();
        this.children[0].onblur = function () {
            this.parentNode.innerHTML = this.value;
        }
        this.children[0].onkeyup = function (e) {
            if (e.key === 'Enter') {
                this.blur();
            }
        }
    }
    // 排他
    remove_style() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].style.backgroundColor = '#fff';
            this.lis_con[i].style.display = 'none';
        }
    }
}

var tab = new Tab('#tab');

function Star(uname) {
    this.uname = uname;
}
/* Star.prototype.sing = function () {
    console.log('唱歌');
}
Star.prototype.movie = function () {
    console.log('电影');
} */
Star.prototype = {
    constructor: Star,
    sing: function () {
        console.log('changge');
    },
    movie: function () {
        console.log('dianying')
    }
}

var ldh = new Star('刘德华');
var zxy = new Star('张学友');
/* ldh.sing();
zxy.sing(); */
// console.log(ldh);
// 构造函数，指向最开始的属性和构造函数
/* console.log(Star.prototype);
console.log(ldh.__proto__);
console.log(Star.prototype.constructor);
console.log(ldh.__proto__ == Star.prototype); */

// 扩展内置对象方法定义数组函数
Array.prototype.sum = function () {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
}
/* Array.prototype = {
    constructor: Array,
    sun: function () {
        var sum = 0;
        for (var i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum;
    }
} 这是不行的，会报错*/
// 调用自定义函数
var arr = [1, 2, 3];
// console.log(arr.sum());
// 查看原型对象的内置函数
// console.log(Array.prototype);

function fn(x, y) {
    console.log('wdnmd');
    console.log(this);
    console.log(x + y);
}
function fn1() {
    console.log('woaini');
    console.log(this);
}
var o = {
    name: 'baby'
}
// 1.调用函数
// fn1.call(2, 4);
// 2.改变this指向，如下改变this为对象o
// fn.call(o, 1, 2);

// 借用父构造函数继承属性
// 1.父构造函数
function Father(uname, age) {
    this.uname = uname;
    this.age = age;
}
Father.prototype.money = function () {
    console.log(200000)
}
// 2.子构造函数
function Son(uname, age, sco) {
    // 调用父构造函数并且将this指向子构造函数对象，并且将相应的数据传入父构造函数
    Father.call(this, uname, age);
    this.sco = sco;
}
/* 会浅拷贝，因为地址相同，所以修改一个会导致另外一个的值也随着改变
Son.prototype = Father.prototype; */
// 创建了一个新的实例对象，其中就包含原构造函数的所有原型
Son.prototype = new Father;
// 使用对象构造，导致对象被覆盖，需要将原构造函数指回，就继承了父构造函数
Son.prototype.constructor = Son;
Son.prototype.exam = function () {
    console.log(100);
}
console.log(Son.prototype);
console.log(Father.prototype);
var ldh = new Son('刘德华', 38, 1000);
ldh.money();
console.log(ldh);

var arr1 = [1, 4, 348, 65, 23, 56, 1, 223, 42, 21, 11, 14, 15];
var sum = 0;
// 遍历数组和 map()相似
arr1.forEach(function (value, index, array) {
    console.log(value); // 值
    console.log(index); // 索引
    console.log(array); // 数组本身
    sum += value;
    console.log(sum);
});
// 筛选指定数组的指定元素，返回一个新的数组
var newArr = arr1.filter(function (value, index, array) {
    // return value >= 20; // 大于20的数进入新数组
    return value % 2 === 0;
});
console.log(newArr);
// 用于检测指定数组中是否存在某个值和 every()相似，存在true，不存在false，第一个符合条件便结束循环，返回Boolean值
console.log(arr1.some(function (value, index, array) {
    return value >= 20; // 是否存在大于20的值
}));

const Test = {
    data() {
        return {
            arr1: [1, 2, 3, 4]
        }
    }
};
Vue.createApp(Test).mount('#Test');

var str34 = '  andy  ';
console.log(str34.length);
console.log(str34.trim().length);

var obj = {
    price: 1999,
    s_name: 'xiaomi',
    id: 1
}
Object.defineProperty(obj, 'num', {
    value: 1000,
    writable: true, // 允许修改与否
})
Object.defineProperty(obj, 'address', {
    value: '重庆邮电大学',
    writable: true, // 允许修改与否
    enumerable: false, // 不会被遍历出来，默认为true
    configurable: false // 不允许被删除被修改，默认为true
})
delete obj.address; // 删除对象中的属性
console.log(obj);
console.log(Object.keys(obj)); // 遍历对象中的关键字（属性）