const long = 1300;
const mid = 600;
const short = 300;

$(document).ready(function(){
    // 하얀색 페이드로 화면전환
    $(".whitebox").animate({opacity: '0%'}, long, 'easeOutQuad', function(){
        $(".whitebox").css({display: 'none'});
    });

    // html 책장에 마우스를 올리면 조금 커지고, 마우스를 떼면 다시 본래 크기로 돌아감
    $('.html').on("mouseover", function() {
        $(this).stop().animate({ width: '30.5%', height: '100.5%' }, mid, 'easeOutQuad');
    }).on("mouseout", function() {
        $(this).stop().animate({ width: '30%', height: '100%' }, mid, 'easeOutQuad');
        purseAnimation(); // html 펄스 애니메이션 재시작
    }).on("click", function(){
        window.open('layout4.html', '_blank'); // 클릭시 html 메인페이지로 이동
    });

    // css 물감통에 마우스를 올리면 조금 커지고, 마우스를 떼면 다시 본래 크기로 돌아감
    $('.css').on("mouseover", function() {
        $(this).stop().animate({ width: '20.5%', height: '25.6%', left: '29.75%', top: '45.5%' }, mid, 'easeOutQuad');
    }).on("mouseout", function() {
        $(this).stop().animate({ width: '20%', height: '25%', left: '30%', top: '46%' }, mid, 'easeOutQuad');
        purseAnimation();; // css 펄스 애니메이션 재시작
    }).on("click", function(){
        window.open('layout6.html', '_blank'); // 클릭시 css 메인페이지로 이동
    });
});