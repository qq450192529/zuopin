/*
以下代码实现微信效果
*/

/*
以下代码用来实现轮播图效果
*/
var img = 0;
var value = 1;
var number = 3;
function setImgSrc(index) {
    document.getElementById("bg").src = "./images/lunbo" + index + ".png";
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
}, 2000);

function up() {
    if (value >= 2 && value <= number) {
        value -= 1
    } else if (value == 1) {
        value = number;
    }
    setImgSrc(value);
}
function down() {
    if (1 <= value && value <= (number - 1)) {
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
        document.getElementById("upimg").src = "./images/up.png";
    }
    upImg.onmouseout = function() {
        document.getElementById("upimg").src = "./images/upup.png";
    }

    
    var downImg = document.getElementById("downimg");
    downImg.onmouseover = function() {
        document.getElementById("downimg").src = "./images/down.png";
    }
    downImg.onmouseout = function() {
        document.getElementById("downimg").src = "./images/downdown.png";
    }
    
    
    var weixin= document.getElementById("weixin");
    var logoweixin= document.getElementById("logoweixin");
    weixin.onmouseover = function() {
        logoweixin.style.zIndex = 10; 
    }
    weixin.onmouseout = function() {
        logoweixin.style.zIndex = -1;
    }
    
    
    var fangYi = document.getElementById("fangyiboimg");
    var liYan  = document.getElementById("liyanqiuimg");
    var yangFan = document.getElementById("yangfanimg");
    var heQi  = document.getElementById("heqifengimg");
    function imgmouseout(){
        fangYi.style.zIndex  = 1;
        liYan.style.zIndex   = 4;
        yangFan.style.zIndex = 3;
        heQi.style.zIndex    = 2;  
    }
    /*fangyibo的鼠标事件*/
    fangYi.onmouseover = function() {
        fangYi.style.zIndex  = 10;   
    }
    fangYi.onmouseout = function() {
        imgmouseout();    
    }
    /*liYan的鼠标事件 */
    liYan.onmouseover = function() {
        liYan.style.zIndex   = 10;
    }       
    liYan.onmouseout = function() {
        imgmouseout();     
    }    
    /*yangFan的鼠标事件*/
    yangFan.onmouseover = function() {
        yangFan.style.zIndex = 10;   
    }
    yangFan.onmouseout = function() {
        imgmouseout();    
    }
    /*heQi的鼠标事件*/
    heQi.onmouseover = function() {
        heQi.style.zIndex    = 10;    
    }
    heQi.onmouseout = function() {
        imgmouseout();   
    }
                


    // var daoHang = document.getElementById("daohang");
    // daoHang.onmouseover = function(){
    // //   document.getElementById("daohang").style="a:hover{border-bottom: 5px #FE5B56 solid}";
    //   document.getElementById("daohang").style="a:hover{color:red;}";
    // //   a=document.getElementById("daohang").style.width;
    // //   console.log(a);
    // }
    // daoHang.onmouseout = function () {
    //     console.log ('移出去了');
    // }
    // daoHang.onmouseover = setTimeout("daohang2()", 1000);
    // daoHang.onmouseout = setTimeout("daohang()", 1000);
}

/*
5秒后显示div 
*/
setTimeout(function ShowLayer() {
    document.getElementById("tankuang").style.zIndex = 100;
    document.getElementById("tankuang").style.visibility = "visible";
}, 5000);
/*
以下代码用来关闭弹框
*/
function exit() {
    document.getElementById("tankuang").style.visibility = "hidden";
}

function fang() {    
    console.log ("11");
    document.getElementById("fangyibo").style.zIndex = 100;
}

// $("daohang").hover(
//   function () {
//       console.log ('11');
//     // $(this).append($("<span> ***</span>"));
//   },
//   function () {
//       console.log ('11');
//     // $(this).find("span:last").remove();
//   }
// );
