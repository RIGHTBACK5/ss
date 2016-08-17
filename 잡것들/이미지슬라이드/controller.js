$(function(){
    var current = 0;
    var max =0;
    var container;
    function init(){
        container = $(".slide ul");
        max = container.children().length;
        
        events();
    }
    function events(){
        $("button.prev").on("click", prev);
        $("button.next").on("click", next);
        
    }
    function prev(e){
        current--;
        if(current < 0) current = max-1;
        animate();
    }
    function next(e){
        current++;
        if(current > max-1) current = 0;
        animate();
    }
    function animate(){
        var moveX = current * 1129;
        TweenMax.to(container, 0.5, {marginLeft : -moveX, ease:Expo.easeOut});
    }
    $(document).ready( init );
});