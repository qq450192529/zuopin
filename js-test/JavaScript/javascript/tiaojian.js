    function Myfunctionif() {
        var value = document.getElementById('value').value;
        var c = parseInt(value);
        if (c <= 2) {
            document.getElementById("demo").innerHTML = "你输入的数字小于等于2";
        } else if (2 < c && c <= 4) {
            document.getElementById("demo").innerHTML = "你输入的数字大于2小于等于4";
        } else {
            document.getElementById("demo").innerHTML = "你输入的数字大于4";
        }
    }

    function Myfunctionswitch() {
        var value = document.getElementById('value').value;
        var c = parseInt(value);
        switch (c) {
            case 1:
                document.getElementById("demo").innerHTML = "输入了1";
                break;
            case 2:
                document.getElementById("demo").innerHTML = "输入了2";
                break;
            case 3:
                document.getElementById("demo").innerHTML = "输入了3";
                break;
            case 4:
                document.getElementById("demo").innerHTML = "输入了4";
                break;
            case 5:
                document.getElementById("demo").innerHTML = "输入了5";
                break;
            default:
                document.getElementById("demo").innerHTML = "输个1到5，有那么难吗？";
        }
    }

    function Myfunctionfor() {
        var x = "";
        for (var a = 0; a < 5; a++) {
            x = x + "循环第" + a + "次" + "<br>";
            document.getElementById("demo").innerHTML = x;
        }
    }

    function Myfunctionfortwo() {
        var value = document.getElementById('value').value;
        var c = parseInt(value);
        var x = '';
        for (var i = 1; i <= c; i++) {
            if (i > 50) break;
            if (i > 9 && i < 21) continue;
            //此处放continue，终端语句，返回后，i会继续增加，直到21的时候，不中断，执行下面的。
            //
            x = x + i + '<br>';
            document.getElementById("demo").innerHTML = x;
        }
    }
    /*为何加了x以后可以循环所所有，而不加就一次呢。
    先分析不加的情况
    第一次  x=循环第0次<br>;
    第二次  x=循环第1次<br>;
    x始终是在直接把值给予它。最终x=循环第4次<br>;

    加了情况下
    第一次 x=循环第0次<br>
    第二次 x=循环第0次<br>循环第1次<br>
    x每次都会变成新值，它是会带着值继续参与的，最终
    x=循环第0次<br/>循环第1次<br/>循环第2次<br/>循环第3次<br/>循环第4次<br/>
    */
    function Myfunctionforin() {
        var x;
        var txt = '';
        var object = {
            a: '我的泪光<br>',
            b: '柔弱中带伤<br>',
            c: '惨白的月弯弯'
        };
        for (x in object) {
            txt = txt + object[x];
            document.getElementById("demo").innerHTML = txt;
        }

    }

    function Myfunctionwhile() {
        var value = document.getElementById('value').value;
        var value = parseInt(value);
        var x = '';
        var i = 1;
        while (i <= value) {
            if (i > 50) break;
            // if(i==10)continue;
            //此处放continue，满足等于10后，中断循环，继续判断，然后又中断，成为了死循环。
            x = x + i + '<br>';
            document.getElementById("demo").innerHTML = x;
            i++;
        }

    }

    function Myfunctiondowhile() {
        var value = document.getElementById('value').value;
        var value = parseInt(value);
        var x = '';
        var i = value;
        do {
            if (i > 50) break;
            x = x + i + '<br>';
            document.getElementById("demo").innerHTML = x;
            --i;
        }
        while (i >= 1);
    }

    array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    //
    //document.getElementById("demo").innerHTML = 'made';
    // document.getElementById("demo").innerHTML = array[1];
    // document.getElementById("demo").innerHTML = array[2];
    // document.getElementById("demo").innerHTML = array[3];
    // document.getElementById("demo").innerHTML = array[4];
    function message() {
        try {
            made = document.getEleffffffffffmentById("demo").innerHTML;
        } catch (err) {
            document.getElementById("demo").innerHTML = err.message;
        }
    }



    function jiance() {
        try {
            var x = document.getElementById('value').value;

            if (x == "") throw "值为空";
            if (isNaN(x)) throw "不是数字";
            if (x > 50) throw "大于50了";
            if (x < 10) throw "小于10了";
        } catch (err) {
            // var y=document.getElementById("demo").innerHTML;
            // y.innerHTML="错误：" + err + "。";
            document.getElementById("demo").innerHTML = err;
        }
    }

    function validate_required(field, alerttxt) {
        with (field) {
            if (value == null || value == "") {
                alert(alerttxt);
                return false
            } else {
                return true
            }
        }
    }
