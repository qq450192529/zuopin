var img = 0;
setInterval(function() {
    img++;

    if (img >= 1 && img <= 5) {
        document.getElementById("img").src = "../images/lunbo" + img + ".jpg";
        document.getElementById('shuzhi').value = img;
    }

    if (img == 5) {
        img = 0;
    }
}, 10000);

function setImgSrc(index) {
    index = parseFloat(index);
    //不转换为字符串也可以，但JS有弱类型的用法，需要详细了解.
    document.getElementById("img").src = "../images/lunbo" + index + ".jpg";
    //JS会自动识别，字符串加数值，会自动进行字符串的连接。
    document.getElementById('shuzhi').value = index;
    //将b的值给予input的value
}

function up() {
    var b = document.getElementById('shuzhi').value;
    var c = parseInt(b);
    //parseInt 将字符串转为数值， parseFloat将数值转为字符串

    if (c >= 2 && c <= 5) {
        c = c - 1;
    } else if (c == 1) {
        c = 5;
    }

    setImgSrc(c);

}

function down() {
    var b = document.getElementById('shuzhi').value;
    var c = parseInt(b);
    //parseInt 将字符串转为数值， parseFloat将数值转为字符串

    if (1 <= c && c <= 4) {
        c = c + 1;
    } else if (c == 5) {
        c = 1;
    }

    setImgSrc(c);
}
        var img = 0;
        setInterval(function(){
            img++;

            if (img >= 1 && img <= 5) {
                document.getElementById("img").src = "../images/lunbo" + img + ".jpg";
                document.getElementById('shuzhi').value = img;
            }

            if (img == 5) {
                img = 0;
            }
        },10000);

        function setImgSrc(index) {
            index = parseFloat(index);
            //不转换为字符串也可以，但JS有弱类型的用法，需要详细了解.
            document.getElementById("img").src = "../images/lunbo" + index + ".jpg";
            //JS会自动识别，字符串加数值，会自动进行字符串的连接。
            document.getElementById('shuzhi').value = index;
            //将b的值给予input的value
        }

        function up() {
            var b = document.getElementById('shuzhi').value;
            var c = parseInt(b);
            //parseInt 将字符串转为数值， parseFloat将数值转为字符串

            if (c >= 2 && c <= 5) {
                c = c - 1;
            } else if (c == 1) {
                c = 5;
            }

            setImgSrc(c);

        }

        function down() {
            var b = document.getElementById('shuzhi').value;
            var c = parseInt(b);
            //parseInt 将字符串转为数值， parseFloat将数值转为字符串

            if (1 <= c && c <= 4) {
                c = c + 1;
            } else if (c == 5) {
                c = 1;
            }

            setImgSrc(c);
        }
