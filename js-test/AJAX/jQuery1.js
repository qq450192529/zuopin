$(document).ready(function() {
    $("#button1").click(function() {
        $("#div1").load("data.php");
    });

    $("#button2").click(function() {
        $("#div1").load("data.php #username")
    });

    $("#button3").click(function() {
        $("#div1").load("data.php #password", function(responseText, statusText, xhr) {
            if (statusText == "success") {
                alert("外部内容加载成功！");
            }
            if (statusText == "error") {
                alert("Error: " + xhr.status + ": " + xhr.statusText);
            }
        });
    });
    // if (responseText.text()=="root") {
    //     alert("成功匹配")
    // }else{
    //     alert("账号或密码错误")
    // }
    //alert(responseText);
    //直接取出了所有数据，需要相应的方法
    //来把数据处理掉，暂未知，后续一定会讲到


    $("#button4").click(function() {
        $.get("data.php", function(data, status) {
            $("#div1").text(data);
            alert("获取状态：" + status + "\n数据是：" + data);
        });
    });

    $("#button5").click(function() {
        // $.post("data.php",
        // {
        //     username:$("#username").text(),
        //     password:$("#password").text()
        // },
        // function(data,status){
        //     $("#div1").text(data);
        // });

        $.post("data.asp", {name: "Donald Duck",city: "Duckburg"},
            function(data, status) {
                alert("数据：" + data + "\n状态：" + status);
        });
        //好吧，敬爱的ASP写法，目测需要小旋风，先这样写。
    });


});
