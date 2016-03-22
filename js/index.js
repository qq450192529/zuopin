/*
以下代码用来实现轮播图效果
*/
var img = 0;
var value = 1;
var number = 3;
function setImgSrc(index) {
    document.getElementById("bg").src="./images/lunbo" + index + ".png";
    value = index;
}

setInterval(function() {
    img++;
    if (img >= 1 && img <= number) { 
        setImgSrc(img);
     }
    if (img == number) {
        img = 0;
     }
}, 1500);

function up() {
    if (value >= 2 && value <= number) {
        value -= 1
    } else if (value == 1) {
        value = number;
    }
    setImgSrc(value);
}
function down() {
    if (1 <= value && value <= (number-1)) {
        value += 1;
    } else if (value == number) {
        value = 1;
    }
    setImgSrc(value);
}
/*
以下代码用来控制轮播图，两个按钮鼠标放上去和移出去切换不同图片
*/
window.onload = function() {
    var upImg = document.getElementById("upimg");
    upImg.onmouseover = function() {
        document.getElementById("upimg").src="./images/up.png";
    }
    upImg.onmouseout = function() {
        document.getElementById("upimg").src="./images/upup.png";
    }
    
    var downImg = document.getElementById("downimg");
    downImg.onmouseover = function() {
        document.getElementById("downimg").src="./images/down.png";
    }
    downImg.onmouseout = function() {
        document.getElementById("downimg").src="./images/downdown.png";
    }
}

