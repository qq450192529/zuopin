$(document).ready(function() {
    $("#button1").click(function(){
        alert($("#p1").text());
    });
    $("#button2").click(function(){
        alert($("#p1").html());
    });
    $("#button3").click(function(){
        alert($("#input1").val());
    });
    $("#button4").click(function(){
        alert($("#button1").attr("id")+","
        +$("#button2").attr("id")+","
        +$("#button3").attr("id")+","
        +$("#button4").attr("id"));
    });

    // $("#button5").click(function(){
    //     $("#p1").animate({fontSize:'30px'},1000,function(){
    //         $("#p1").html("<b> Hello World </b>");
    //         $("#input1").val("快点给我输入啊！");
    //     });
    // });
    //上面为有效代码，常规思路

    $("#button5").click(function(){
        $("#p1").html("<b> Hello World </b>");
        $("#input1").val("快点给我输入啊！");
        $("#p1,#input1").animate({fontSize:'30px'},1000);
        });
    //必需的 params 参数定义形成动画的 CSS 属性。因此不能将文字变化作为动画
    //先把文字变了，然后做动画。不能一起写到一个函数中。

    $("#button6").click(function(){
		$("p").text(function(i,origText){
			return "我的下标是:"+i+"我的原文是:"+origText;
		});
	});

	$("#abutton").click(function(){
		$("a").attr("href",function(i,text){
			return "http://www.baidu.com";
		});
	});
});
