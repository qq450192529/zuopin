$(document).ready(function() {
    //慢速版
    // $(".demo").click(function(){
    //     var demo = $("#demo3");
    //     for(var i=0;i<15;i++){
    //     // demo.animate({left:'20px',opacity:'0.2'},50);
    //     demo.animate({width:'+=20px',opacity:'0.8'},150);
    //     // demo.animate({left:'-=20px',opacity:'0.2'},50);
    //     demo.animate({top:'+=20px',opacity:'0.8'},150);
    //     demo.animate({left:'+=10px',opacity:'0.8'},150);
    //     }
    //
    //     for(var i=0;i<15;i++){
    //     // demo.animate({left:'20px',opacity:'0.2'},50);
    //     demo.animate({width:'-=20px',opacity:'0.8'},150);
    //     // demo.animate({left:'-=20px',opacity:'0.2'},50);
    //     demo.animate({top:'-=20px',opacity:'0.8'},150);
    //     demo.animate({left:'-=10px',opacity:'0.8'},150);
    //     }
    //
    //
    //     var demo = $("#demo4");
    //     for(var i=0;i<15;i++){
    //     // demo.animate({left:'20px',opacity:'0.2'},50);
    //     demo.animate({height:'+=20px',opacity:'0.8'},150);
    //     // demo.animate({left:'-=20px',opacity:'0.2'},50);
    //     demo.animate({left:'+=20px',opacity:'0.8'},150);
    //     demo.animate({top:'+=10px',opacity:'0.8'},150);
    //     }
    //
    //     for(var i=0;i<15;i++){
    //     // demo.animate({left:'20px',opacity:'0.2'},50);
    //     demo.animate({height:'-=20px',opacity:'0.8'},150);
    //     // demo.animate({left:'-=20px',opacity:'0.2'},50);
    //     demo.animate({left:'-=20px',opacity:'0.8'},150);
    //     demo.animate({top:'-=10px',opacity:'0.8'},150);
    //     }
    //
    //     var demo = $("#demo5");
    //     for(var i=0;i<15;i++){
    //     // demo.animate({left:'20px',opacity:'0.2'},50);
    //     demo.animate({width:'+=40px',opacity:'0.8'},150);
    //     // demo.animate({left:'-=20px',opacity:'0.2'},50);
    //     demo.animate({top:'+=40px',opacity:'0.8'},150);
    //     demo.animate({left:'+=20px',opacity:'0.8'},150);
    //     }
    //
    //     for(var i=0;i<15;i++){
    //     // demo.animate({left:'20px',opacity:'0.2'},50);
    //     demo.animate({width:'-=40px',opacity:'0.8'},150);
    //     // demo.animate({left:'-=20px',opacity:'0.2'},50);
    //     demo.animate({top:'-=40px',opacity:'0.8'},150);
    //     demo.animate({left:'-=20px',opacity:'0.8'},150);
    //     }
    //
    //     var demo = $("#demo6");
    //     for(var i=0;i<15;i++){
    //     // demo.animate({left:'20px',opacity:'0.2'},50);
    //     demo.animate({height:'+=40px',opacity:'0.8'},150);
    //     // demo.animate({left:'-=20px',opacity:'0.2'},50);
    //     demo.animate({left:'+=40px',opacity:'0.8'},150);
    //     demo.animate({top:'+=20px',opacity:'0.8'},150);
    //     }
    //
    //     for(var i=0;i<15;i++){
    //     // demo.animate({left:'20px',opacity:'0.2'},50);
    //     demo.animate({height:'-=40px',opacity:'0.8'},150);
    //     // demo.animate({left:'-=20px',opacity:'0.2'},50);
    //     demo.animate({left:'-=40px',opacity:'0.8'},150);
    //     demo.animate({top:'-=20px',opacity:'0.8'},150);
    //     }
    // });

    $("#pause").click(function(){
        $("div").stop(true);
    });
    $("#end").click(function(){
        $("div").stop(true,true);
        $(".demo")
        .css("width","20px")
        .css("height","20px")
        .css("position","absolute")
        .css("left","0px")
        .css("top","30px");
        $("#demo3").css("background","blue");
        $("#demo4").css("background","black");
        $("#demo5").css("background","red");
        $("#demo6").css("background","yellow");

    })
    //快速版
    //"position","absolute";"width","20px";"height","20px");
    $("#start").click(function(){
        var demo = $("#demo3");
        for(var i=0;i<15;i++){
        // demo.animate({left:'20px',opacity:'0.2'},50);
        demo.animate({width:'+=20px',opacity:'0.8'},50);
        // demo.animate({left:'-=20px',opacity:'0.2'},50);
        demo.animate({top:'+=20px',opacity:'0.8'},50);
        demo.animate({left:'+=10px',opacity:'0.8'},50);
        }

        for(var i=0;i<15;i++){
        // demo.animate({left:'20px',opacity:'0.2'},50);
        demo.animate({width:'-=20px',opacity:'0.8'},50);
        // demo.animate({left:'-=20px',opacity:'0.2'},50);
        demo.animate({top:'-=20px',opacity:'0.8'},50);
        demo.animate({left:'-=10px',opacity:'0.8'},50);
        }


        var demo = $("#demo4");
        for(var i=0;i<15;i++){
        // demo.animate({left:'20px',opacity:'0.2'},50);
        demo.animate({height:'+=20px',opacity:'0.8'},50);
        // demo.animate({left:'-=20px',opacity:'0.2'},50);
        demo.animate({left:'+=20px',opacity:'0.8'},50);
        demo.animate({top:'+=10px',opacity:'0.8'},50);
        }

        for(var i=0;i<15;i++){
        // demo.animate({left:'20px',opacity:'0.2'},50);
        demo.animate({height:'-=20px',opacity:'0.8'},50);
        // demo.animate({left:'-=20px',opacity:'0.2'},50);
        demo.animate({left:'-=20px',opacity:'0.8'},50);
        demo.animate({top:'-=10px',opacity:'0.8'},50);
        }

        var demo = $("#demo5");
        for(var i=0;i<15;i++){
        // demo.animate({left:'20px',opacity:'0.2'},50);
        demo.animate({width:'+=40px',opacity:'0.8'},50);
        // demo.animate({left:'-=20px',opacity:'0.2'},50);
        demo.animate({top:'+=40px',opacity:'0.8'},50);
        demo.animate({left:'+=20px',opacity:'0.8'},50);
        }

        for(var i=0;i<15;i++){
        // demo.animate({left:'20px',opacity:'0.2'},50);
        demo.animate({width:'-=40px',opacity:'0.8'},50);
        // demo.animate({left:'-=20px',opacity:'0.2'},50);
        demo.animate({top:'-=40px',opacity:'0.8'},50);
        demo.animate({left:'-=20px',opacity:'0.8'},50);
        }

        var demo = $("#demo6");
        for(var i=0;i<15;i++){
        // demo.animate({left:'20px',opacity:'0.2'},50);
        demo.animate({height:'+=40px',opacity:'0.8'},50);
        // demo.animate({left:'-=20px',opacity:'0.2'},50);
        demo.animate({left:'+=40px',opacity:'0.8'},50);
        demo.animate({top:'+=20px',opacity:'0.8'},50);
        }

        for(var i=0;i<15;i++){
        // demo.animate({left:'20px',opacity:'0.2'},50);
        demo.animate({height:'-=40px',opacity:'0.8'},50);
        // demo.animate({left:'-=20px',opacity:'0.2'},50);
        demo.animate({left:'-=40px',opacity:'0.8'},50);
        demo.animate({top:'-=20px',opacity:'0.8'},50);
        }
    });

});
