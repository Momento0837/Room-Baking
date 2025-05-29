const long = 1300;
const mid = 600;
const short = 300;

$(document).ready(function(){
    // 하얀색 페이드로 화면전환환
    $(".whitebox").animate({opacity: '0%'}, long, 'easeOutQuad', function(){
        $(".whitebox").css({display: 'none'});
    });

    // 상단 탭 세개 계단식으로 내려오는 애니메이션
    setTimeout(() => {
        $(".sidebar > :first-child").animate({top: '0%'}, 1100,'easeOutQuad');
        setTimeout(() => { // 2번째 탭은 0.1초 늦게
            $(".sidebar > :nth-child(2)").animate({top: '0%'}, 1100,'easeOutQuad');
        }, 100);
        setTimeout(() => { // 3번째 탭은 0.2초 늦게
            $(".sidebar > :nth-child(3)").animate({top: '0%'}, 1100,'easeOutQuad');
        }, 200);
    }, 300);
    

    // 캐릭터 위로 올라오는 애니메이션
    setTimeout(() => {
        $(".character").animate({top: '21%'}, 1550, 'easeOutQuad');
        $(".character").animate({top: '22%'}, long, 'easeOutQuad');
    }, 400);
    
    // 캐릭터 위 아래로 왔다갔다 하는 애니메이션
    setInterval(function(){
        $(".character").animate({top: '23%'}, long, 'easeOutQuad');
        setTimeout(() => {
            $(".character").animate({top: '22%'}, long, 'easeOutQuad');
        }, 1500);
    }, 3000);
    
    // 캐릭터 말풍선 올라오는 애니메이션
    setTimeout(() => {
        $(".overlay").animate({top: '55%'}, 1500, 'easeOutQuad');
    }, 300);

    // 상단탭 세개에 마우스를 올리면 커지는 이벤트
    $('.item').on("mouseover", function() {
        $(this).stop().animate({ width: '29%', height: '102%' }, mid, 'easeOutQuad');
    }).on("mouseout", function() {
        $(this).stop().animate({ width: '28%', height: '100%' }, mid, 'easeOutQuad');
    });
});