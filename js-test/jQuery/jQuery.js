/**
    自己写的jQuery代码要放在</body>上边，否则调用不成功
*/

$(document).ready(function() {
    $(".div").click(function() {
        $(this).hide(100, function() {
            $("#demo1").html('显示上面被隐藏的文字');
            $("#demo1").css("color", 'red');

            $("#demo1").click(function() {
                $(".div").show(2000);
            });
        });
    });

    $("#demo3").click(function(){
        $("#demo4").slideToggle(500);
    });


    $("p#demo2").click(function() {
        $("p#demo2").html('我被改变了');
        $("p#demo2").css("background-color", "red");
        $("p#demo2").css("font-size", "40px");
    });


    $("button#button1").click(function(){
        $(".div").toggle(1000);
        $("p").toggle(2000,function(){
            alert('呵呵哒');
        });
    });

    $("button#button2").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(1000);
    });


});
