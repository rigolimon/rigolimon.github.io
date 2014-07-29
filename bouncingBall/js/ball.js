$(function() {
    function bounceDown(){
        $(".ball").animate({marginTop: 200}, 1000, function(){bounceUp();});
    }
    function bounceUp() {
        $(".ball").animate({marginTop: 20}, 1000);
    }
    
    function shadowUp(){
        $(".shadow").animate({marginTop: 0, width: 0, height: 0}, 1000, function(){shadowDown();});
    }
    function shadowDown() {
        $(".shadow").animate({marginTop: 200, width: 100, height: 10}, 1000);
    }
    
    $(".button").on("click", function(){
       bounceDown();
       shadowUp();
    });
});