<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" type="text/css"  />
    <meta charset="UTF-8">
    <script src="./js/change.js"></script>
    <title>轮播图</title>
</head>

<body>

    <input type="hidden" id='shuzhi' value=1></input>
    <!本想获取img标签下的src，从而进行判断，进行字符串判断，或者字符串连接，暂时未解决    遂通过input对象有value这个数值直接来解决
    在用input解决后，了解了字符串和数值之间的转换后，应该可以用取到第几位的方法，然后截取出来这个数值，方法就同input法了
    -->
    <div align=center>
        <img align:middle id='img' src="../images/lunbo1.jpg"></img>
        <!html神奇的目录访问写法,太好用了
        当前index.php在第二层目录，想访问根目录文件，那么就../
        第三层就.../  目前来看这个目前方便。深层引用可用include
        -->
    </div>
    <div align=center>
        <button onclick='up()'>上一张</button>
        <button onclick='down()'>下一张</button>
    </div>
</body>
</html>
