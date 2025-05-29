const long = 1300;
const mid = 500;
const short = 300;

$(document).ready(function(){
    $(".whitebox").animate({opacity: '0%'}, long, 'easeOutQuad');

    $(".sidebar > :first-child").animate({top: '0%'}, mid,'easeOutQuad', function(){
            $(".sidebar > :nth-child(2)").animate({top: '0%'}, mid,'easeOutQuad', function(){
                $(".sidebar > :nth-child(3)").animate({top: '0%'}, mid,'easeOutQuad');
            });

            $(".character").animate({top: '21%'}, 2000, 'easeOutQuad');
            $(".character").animate({top: '22%'}, long, 'easeOutQuad');

            setInterval(function(){
                $(".character").animate({top: '23%'}, long, 'easeOutQuad');
                setTimeout(() => {
                    $(".character").animate({top: '22%'}, long, 'easeOutQuad')
                }, 1500);
            }, 3000);
        });

        $(".overlay").animate({top: '55%'}, 2000, 'easeOutQuad');

    
});