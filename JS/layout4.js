const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;


$(document).ready(function(){
    // 하얀색 페이드로 화면전환
    $(".whitebox").animate({opacity: '0%'}, long, 'easeOutQuad', function(){
        $(".whitebox").css({display: 'none'});
    });

    // 책장, 코드 입력란 등장모션
    $(".bookshelf").animate({top: '5%'}, superlong);
    setTimeout(() => {
        $(".block").animate({top: '9%'}, superlong);
        $(".block").animate({top: '10%'}, short);
    }, 500);
    

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

    // 상단탭 세개에 마우스를 올리면 커지는 이벤트
    $('.sidebar>.item').on("mouseover", function() {
        $(this).stop().animate({ width: '29%', height: '102%' }, mid, 'easeOutQuad');
    }).on("mouseout", function() {
        $(this).stop().animate({ width: '28%', height: '100%' }, mid, 'easeOutQuad');
    });

    $('.bottom>.item').on("mouseover", function() {
        $(".bottom").stop().animate({ gap: '1%', width: '85%', height: '30%', top: '67%', left: '7.5%' }, mid, 'easeOutQuad');
    }).on("mouseout", function() {
        $(".bottom").stop().animate({ gap: '1.7%', width: '84%', height: '29%', top: '68%', left: '8%' }, mid, 'easeOutQuad');
    });
})