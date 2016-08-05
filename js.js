$(function(){
        $(".home").click(function(){
        $("body").css("background","#5F5F5F");
        $("section").css("height","750px");
        $("section").css("width","1600px");
        $("article").css("display","none");
        $("#main_wrap").css("display","block");
        $("#b-img").css("width","0%");
    });
            
    $(".hangang").click(function(){
        $("body").css("background","#8DD4E4");
        $("section").css("height","750px");
        $("section").css("width","1800px");
        $("#main_wrap").css("display","none");
        $("article").css("display","inline-block");
        $("#b-img").css("width","0%");
    });
    
    $(".ss").click(function(){
        $("body").css("display","block");
        $("section").css("height","750px");
        $("section").css("width","1500px");
        $("article").css("display","none");
        $("#main_wrap").css("display","none");
        $("#b-img").css("display","block");
        $("#b-img").css("width","100%");
    });
    
    var current = 0;
    var max =0;
    var container;

    function init(){
        container = $(".slide_m ul");
        max = container.children().length;

        events();
        setInterval(next, 5000);
    }
    function events(){
        $("button.prev").on("click", prev);
        $("button.next").on("click", next);
    }
    
    function prev(e){
        current--;
        if(current < 0) current = max-1;
        animate_m();
    }
    function next(e){
        current++;
        if(current > max-1) current = 0;
        animate_m();
    }
    
    function animate_m(){
        var moveX = current * 1129;
        TweenMax.to(container, 0.5, {marginLeft : -moveX, ease:Expo.easeOut}); 
    }
    function animate_h(){
        var moveX = current * 1200;
        TweenMax.to(container, 0.5, {marginLeft : -moveX, ease:Expo.easeOut}); 
    }
    
    $(document).ready( init );
});