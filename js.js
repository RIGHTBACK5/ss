$(function(){
        $(".home").click(function(){
        $("body").css("background","#5F5F5F");
        $("section").css("height","750px");
        $("section").css("width","1600px");
        $("article").css("display","none");
        $("#main_wrap").css("display","block");
        $("#b-img").css("display","none");
    });
            
    $(".hangang").click(function(){
        $("body").css("background","#8DD4E4");
        $("section").css("height","750px");
        $("section").css("width","1800px");
        $("#main_wrap").css("display","none");
        $("article").css("display","inline-block");
        $("#b-img").css("display","none");
    });
    
    $(".ss").click(function(){
        $("body").css("display","block");
        $("section").css("height","750px");
        $("section").css("width","1500px");
        $("article").css("display","none");
        $("#main_wrap").css("display","none");
        $("#b-img").css("display","block");
    });
    
    var current_m = 0;
    var current_h = 0;
    var max_m = 0;
    var max_h = 0;
    var container_m;
    var container_h;

    function init(){
        container_m = $(".slide_m ul");
        container_h = $(".slide_h ul");
        
        max_m = container_m.children().length;
        max_h = container_h.children().length;
        
        events();
        setInterval(next_m, 5000);
    }
    function events(){
        $("button.prev").on("click", prev_h);
        $("button.next").on("click", next_h);
        
        $(window).on("keydown",keydown);
    }
    
    function prev_m(e){
        current_m--;
        if(current_m < 0) current_m = max_m-1;
        animate_m();
    }    
    function prev_h(e){
        current_h--;
        if(current_h < 0) current_h = max_h-1;
        animate_h();
    }
    function next_m(e){
        current_m++;
        if(current_m > max_m-1) current_m = 0;
        animate_m();
    }    
    function next_h(e){
        current_h++;
        if(current_h > max_h-1) current_h = 0;
        animate_h();
    }
    
    function keydown(e){
        if(e.which == 39){
            next_h();
        }
        else if(e.which == 37){
            prev_h();
        }
    }
    
    function animate_m(){
        var moveX = current_m * 1129;
        TweenMax.to(container_m, 0.1, {marginLeft : -moveX, ease:Expo.easeOut}); 
    }
    function animate_h(){
        var moveX = current_h * 1200;
        TweenMax.to(container_h, 0.1, {marginLeft : -moveX, ease:Expo.easeOut}); 
    }
    
    $(document).ready( init );
});