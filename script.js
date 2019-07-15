var touchstart, touchmove, flag, l = 0,
    vertical_scroll = -768,
    animation = -148,
    li = document.getElementsByTagName('li');
document.getElementById('vertical').addEventListener('touchstart', touchstart);
document.getElementById('vertical').addEventListener('touchmove', touchmove);

function touchstart(ev) {
    touchstart = ev.touches[0].clientY;
    flag = 0;
}

function touchmove(ev) {
    touchmove = ev.touches[0].clientY;
    if (flag == 0) {
        vertical();
        flag = 1;
    }
}

function vertical() {
    if ((touchstart - touchmove) > 0) {
        if (vertical_scroll > -2304) {
            document.getElementById('vertical').style.top = vertical_scroll + 'px';
            vertical_scroll = vertical_scroll - 768;
            document.getElementById('animation').style.top = animation + 'px';
            animation = animation - 115;
            if (vertical_scroll == -1536) {
                document.getElementById('scroll_down').style.zIndex = '-1';
            }
        }
        for (let i = 0; i < li.length; i++) {
            if (l < 2) {
                li[l].style.color = 'white';
                li[l + 1].style.color = 'rgb(247, 139, 31)';
            }
        }
        if (l < 2) {
            l++;
        }
    } else {
        if (vertical_scroll < -768) {
            vertical_scroll = vertical_scroll + 768;
            document.getElementById('vertical').style.top = vertical_scroll + 768 + 'px';
            animation = animation + 115;
            document.getElementById('animation').style.top = animation + 115 + 'px';
            if (vertical_scroll == -768) {
                document.getElementById('scroll_down').style.zIndex = '1';
            }
        }
        if (l > 0) {
            l--;
        }
        for (let i = 0; i < li.length; i++) {
            li[l + 1].style.color = 'white';
            li[l].style.color = 'rgb(247, 139, 31)';
        }
    }
}

function scroll_down() {
    setTimeout(function () {
        document.getElementById('vertical').style.top = '-1536px';
        vertical_scroll = vertical_scroll - 1536;
        document.getElementById('animation').style.top = '-230px';
        animation = animation - 230;
        document.getElementById('scroll_down').style.zIndex = '-1';
        for (let i = 0; i < li.length; i++) {
            li[0].style.color = 'white';
            li[2].style.color = 'rgb(247, 139, 31)';
        }
        l = 2;
    }, 200);
}

document.getElementById('break').addEventListener('touchstart', break1);
document.getElementById('break').addEventListener('touchmove', break2);
document.getElementById('range').addEventListener('touchstart', break1);
document.getElementById('range').addEventListener('touchmove', break2);

function break1(ev) {
    touchstart = ev.touches[0].clientY;
    flag = 0;
}

function break2(ev) {
    touchmove = ev.touches[0].clientY;
    if (flag == 0) {
        break3();
        flag = 1;
    }
}

function break3() {
    console.error('Не скролится на 1998 и 2009, только на 2016. Это не баг, а фича!');
}

var left = 0;
var range = document.getElementById('range');
range.oninput = function () {
    if (this.value < 10) {
        this.value = 0;
        let polosa = document.getElementById('horizontal');
        left = 0;
        polosa.style.left = left + 'px';
    } else if (this.value > 40 && this.value < 60) {
        this.value = 50;
        let polosa = document.getElementById('horizontal');
        left = -1024;
        polosa.style.left = left + 'px';
    } else if (this.value > 90) {
        this.value = 100;
        let polosa = document.getElementById('horizontal');
        left = -2048;
        polosa.style.left = left + 'px';
    }
}