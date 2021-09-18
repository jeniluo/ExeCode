var password = document.querySelector('.password');
var password_again = document.querySelector('.password_again');
var error = document.querySelector('.error');
var error_again = document.querySelector('.error_again');
var error_img_again = document.querySelector('.error_img_again');
var error_img = document.querySelector('.error_img');
var eyes = document.querySelector('#eyes');
var count_bigChar = 0, count_num = 0, count_specialChar = 0, count_litChar = 0, count_errorChar = 0;
var judge = false;

password.addEventListener('blur', function () {
    for (var i = 0; i < password.value.length; i++) {
        if (this.value[i] * 1.0 >= 0 && this.value[i] * 1.0 <= 9 && count_num == 0)
            count_num++;
        else if (this.value.charCodeAt(i) >= 65 && this.value.charCodeAt(i) <= 90 && count_bigChar == 0)
            count_bigChar++;
        else if (this.value[i] === '.' || this.value[i] === '_' || this.value[i] === '!' || this.value[i] === '?')
            count_specialChar++;
        else if (this.value.charCodeAt(i) >= 97 && this.value.charCodeAt(i) <= 122 && count_litChar == 0)
            count_litChar++;
        else if (this.value[i] === '#' || this.value[i] === '*' || this.value[i] === ' ' || this.value[i] === '/')
            count_errorChar++;
    }

    if (count_errorChar == 0) {
        if (this.value.length > 16 || this.value.length < 6) {
            error.innerHTML = '请输入6-16位密码';
            error.style.color = 'red';
            error_img.src = 'images/wrong.png';
        } else {
            if (count_num && count_bigChar && count_specialChar && count_litChar) {
                error.innerHTML = '输入密码格式正确';
                error.style.color = 'green';
                error_img.src = 'images/right.png';
                judge = !judge;
            } else if (!count_bigChar) {
                error.innerHTML = '输入密码无大写字符';
                error.style.color = 'red';
                error_img.src = 'images/wrong.png';
            } else if (!count_litChar) {
                error.innerHTML = '输入密码无小写字符';
                error.style.color = 'red';
                error_img.src = 'images/wrong.png';
            } else if (!count_num) {
                error.innerHTML = '输入密码无数字';
                error.style.color = 'red';
                error_img.src = 'images/wrong.png';
            } else if (!count_specialChar) {
                error.innerHTML = '输入密码无特殊字符';
                error.style.color = 'red';
                error_img.src = 'images/wrong.png';
            }
        }
    } else {
        error.innerHTML = '不能输入"#" "*" " " "/"';
        error.style.color = 'red';
        error_img.src = 'images/wrong.png';
    }
    count_bigChar = 0; count_num = 0; count_specialChar = 0; count_litChar = 0; count_errorChar = 0;
})
/* password.onblur = function () {
    for (var i = 0; i < password.value.length; i++) {
        if (this.value[i] * 1.0 >= 0 && this.value[i] * 1.0 <= 9 && count_num == 0)
            count_num++;
        else if (this.value.charCodeAt(i) >= 65 && this.value.charCodeAt(i) <= 90 && count_bigChar == 0)
            count_bigChar++;
        else if (this.value[i] === '.' || this.value[i] === '_' || this.value[i] === '!' || this.value[i] === '?')
            count_specialChar++;
        else if (this.value.charCodeAt(i) >= 97 && this.value.charCodeAt(i) <= 122 && count_litChar == 0)
            count_litChar++;
        else if (this.value[i] === '#' || this.value[i] === '*' || this.value[i] === ' ' || this.value[i] === '/')
            count_errorChar++;
    }

    if (count_errorChar == 0) {
        if (this.value.length > 16 || this.value.length < 6) {
            error.innerHTML = '请输入6-16位密码';
            error.style.color = 'red';
            error_img.src = 'images/wrong.png';
        } else {
            if (count_num && count_bigChar && count_specialChar && count_litChar) {
                error.innerHTML = '输入密码格式正确';
                error.style.color = 'green';
                error_img.src = 'images/right.png';
                judge = !judge;
            } else if (!count_bigChar) {
                error.innerHTML = '输入密码无大写字符';
                error.style.color = 'red';
                error_img.src = 'images/wrong.png';
            } else if (!count_litChar) {
                error.innerHTML = '输入密码无小写字符';
                error.style.color = 'red';
                error_img.src = 'images/wrong.png';
            } else if (!count_num) {
                error.innerHTML = '输入密码无数字';
                error.style.color = 'red';
                error_img.src = 'images/wrong.png';
            } else if (!count_specialChar) {
                error.innerHTML = '输入密码无特殊字符';
                error.style.color = 'red';
                error_img.src = 'images/wrong.png';
            }
        }
    } else {
        error.innerHTML = '不能输入"#" "*" " " "/"';
        error.style.color = 'red';
        error_img.src = 'images/wrong.png';
    }
    count_bigChar = 0; count_num = 0; count_specialChar = 0; count_litChar = 0; count_errorChar = 0;
} */

var flag = true;
eyes.addEventListener('click', function () {
    if (flag) {
        password.type = 'text';
        this.src = 'images/open.png';
        flag = false;
    } else {
        password.type = 'password';
        this.src = 'images/close.png';
        flag = true;
    }
})

/* eyes.onclick = function () {
    if (flag) {
        password.type = 'text';
        this.src = 'images/open.png';
        flag = false;
    } else {
        password.type = 'password';
        this.src = 'images/close.png';
        flag = true;
    }
} */

password_again.addEventListener('blur', function () {
    if (password_again.value.length != 0 && judge) {
        if (password_again.value == password.value) {
            error_again.className = error_again.className + ' ' + 'error';
            error_img_again.className = error_img_again.className + ' ' + 'error_img';
            error_again.innerHTML = '输入与上次匹配';
            error_again.style.color = 'green';
            error_img_again.src = 'images/right.png';
        } else {
            error_again.className = error_again.className + ' ' + 'error';
            error_img_again.className = error_img_again.className + ' ' + 'error_img';
            error_again.innerHTML = '输入与上次不匹配';
            error_again.style.color = 'red';
            error_img_again.src = 'images/wrong.png';
        }
    } else if (!judge) {
        error_again.className = error_again.className + ' ' + 'error';
        error_img_again.className = error_img_again.className + ' ' + 'error_img';
        error_again.innerHTML = '请正确输入第一次密码';
        error_again.style.color = 'red';
        error_img_again.src = 'images/wrong.png';
    }
})
/* password_again.onblur = function () {
    if (password_again.value.length != 0 && judge) {
        if (password_again.value == password.value) {
            error_again.className = error_again.className + ' ' + 'error';
            error_img_again.className = error_img_again.className + ' ' + 'error_img';
            error_again.innerHTML = '输入与上次匹配';
            error_again.style.color = 'green';
            error_img_again.src = 'images/right.png';
        } else {
            error_again.className = error_again.className + ' ' + 'error';
            error_img_again.className = error_img_again.className + ' ' + 'error_img';
            error_again.innerHTML = '输入与上次不匹配';
            error_again.style.color = 'red';
            error_img_again.src = 'images/wrong.png';
        }
    } else if (!judge) {
        error_again.className = error_again.className + ' ' + 'error';
        error_img_again.className = error_img_again.className + ' ' + 'error_img';
        error_again.innerHTML = '请正确输入第一次密码';
        error_again.style.color = 'red';
        error_img_again.src = 'images/wrong.png';
    }
} */