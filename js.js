$(function(){
        $(".home").click(function(){
        $("body").css("background","#5F5F5F");
        $("section").css("height","750px");
        $("section").css("width","1600px");
        $("article").css("display","none");
        $("#main_wrap").css("display","block");
        $("#b-img").css("opacity","0");
    });
            
    $(".hangang").click(function(){
        $("body").css("background","#8DD4E4");
        $("section").css("height","750px");
        $("section").css("width","1800px");
        $("#main_wrap").css("display","none");
        $("article").css("display","inline-block");
        $("#b-img").css("opacity","0");
    });
    
    $(".ss").click(function(){
        $("body").css("display","block");
        $("section").css("height","750px");
        $("section").css("width","1500px");
        $("article").css("display","none");
        $("#main_wrap").css("display","none");
        $("#b-img").css("opacity","100");
    });
    
    var current_m = 0;
    var currentX = 0;
    var currentY = 0;
    var max_m = 0;
    var maxX = 7;
    var maxY = 3;
    var container_m;
    var container_h;

    function init(){
        container_m = $(".slide_m>ul");
        container_h = $(".slide_h>ul");
        
        max_m = container_m.children().length;
        
        events();
        setInterval(next_m, 5000);
    }
    function events(){
        $(window).on("keydown",keydown);
    }
    
    function next_m(e){
        current_m++;
        if(current_m > max_m-1) current_m = 0;
        animate_m();
    } 
    
    function prev(e){
        currentX--;
        if(currentX < 0) currentX = maxX-1;
        animate_h(1);
    }
    function next(e){
        currentX++;
        if(currentX > maxX-1) currentX = 0;
        animate_h(1);
    }    
    function up(e){
        currentY--;
        if(currentY < 0) currentY = maxY-1;
        animate_h(2);
    }
    function down(e){
        currentY++;
        if(currentY > maxY-1) currentY = 0;
        animate_h(2);
    }
    
    function keydown(e){
        if(e.which == 37){
            prev();
        }
        else if(e.which == 39){
            next();
        }
        else if(e.which == 38){
            up();
        }
        else if(e.which == 40){
            down();
        }
    }
    
    function animate_m(){
        var moveX = current_m * 1129;
        TweenMax.to(container_m, 0.1, {marginLeft : -moveX, ease:Expo.easeOut}); 
    }
    function animate_h(s){
        var moveX = currentX * 1200;
        var moveY = currentY * 750;
        if(s==1){
            TweenMax.to(container_h, 0.1, {marginLeft : -moveX, ease:Expo.easeOut});
        }
        else{
            TweenMax.to(container_h, 0.1, {marginTop : -moveY, ease:Expo.easeOut});
        }
    }
    
    $(document).ready( init );
});