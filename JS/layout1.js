$(document).ready(function(){
    $(".noteclose").animate({top: '7%'}, 1500, 'easeOutQuad');

    $(".noteclose").click(function(){
        $(".note").css({display: 'block'});
        $(".index").css({display: 'block'});

        $(".note").animate({width: '69%', left: '15.5%'}, 1500, 'easeOutQuad');
        $(".index").animate({width: '11%', left: '77%'}, 1500, 'easeOutQuad');
        $(".note").animate({width: '68%', left: '16%'}, 1500, 'easeOutQuad');
        $(".index").animate({width: '10%', left: '77.5%'}, 1500, 'easeOutQuad');
        
        $(".noteclose").css({display: 'none'});

        $(".note").click(function(){
            $(".note").animate({top: '-100%'}, 1500, 'easeOutQuad');
            $(".index").animate({top: '-94%'}, 1500, 'easeOutQuad');
            setTimeout(function(){
                window.location.href = 'layout4.html';
            }, 1500);
        });
    });
});
