const long = 1300;
const short = 300;
const superlong = 2000;

$(document).ready(function(){

    
    // 캐릭터 위로 올라오는 애니메이션
    setTimeout(() => {
        $(".character-box").animate({ top: '27%' }, superlong, 'easeOutQuad');
        $(".character-box").animate({ top: '28%' }, long, 'easeOutQuad');
    }, 300);
    
    // 캐릭터 말풍선 올라오는 애니메이션
    setTimeout(() => { $(".overlay").animate({ top: '55%' }, superlong, 'easeOutQuad'); }, 300);

    // 캐릭터 위 아래로 왔다갔다 하는 애니메이션
    $("#character").animate({top: '-1%'}, long, 'easeOutQuad');
    setTimeout(() => {
        $("#character").animate({top: '0%'}, long, 'easeOutQuad');
    }, 1500); // 딜레이 삭제
    
    setInterval(function(){
        $("#character").animate({top: '-1%'}, long, 'easeOutQuad');
        setTimeout(() => {
            $("#character").animate({top: '0%'}, long, 'easeOutQuad');
        }, 1500);
    }, 3000);

    // 상단탭 세개에 마우스를 올리면 커지는 이벤트
    $('.item').on("mouseover", function() {
        $(this).stop().animate({ width: '29%', height: '102%' }, mid, 'easeOutQuad');
    }).on("mouseout", function() {
        $(this).stop().animate({ width: '28%', height: '100%' }, mid, 'easeOutQuad');
    });

    // 상자에 마우스를 올리면 커지는 이벤트
    $('.bottom>.item').on("mouseover", () => {
        $(".bottom").stop().animate({ gap: '1%', width: '85%', height: '30%', top: '67%', left: '7.5%' }, mid, 'easeOutQuad');
    }).on("mouseout", function() {
        $(".bottom").stop().animate({ gap: '1.7%', width: '84%', height: '29%', top: '68%', left: '8%' }, mid, 'easeOutQuad');
    });

    // 노트에 마우스를 올리면 커지는 이벤트
    $('.note').on("mouseover", () => {
        $(".note").stop().animate({ width: '17%', height: '16%', top: '84%', left: '60.5%' }, mid, 'easeOutQuad');
    }).on("mouseout", function() {
        $(".note").stop().animate({ width: '16%', height: '15%', top: '85%', left: '61%' }, mid, 'easeOutQuad');
    });

    // 액자에 마우스를 올리면 올라오는 이벤트
    $('.top > div').on("mouseover", function() {
        $(this).stop().animate({ top: '-10%' }, short, 'easeOutQuad');
    }).on("mouseout", function() {
        $(this).stop().animate({ top: '0%' }, short, 'easeOutQuad');
    });
});
