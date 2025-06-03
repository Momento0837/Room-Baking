// 애니메이션용 상수 선언
const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;

$(document).ready(function(){
    // 하얀색 페이드로 화면전환
    $(".whitebox").animate({opacity: '0'}, long, 'easeOutQuad', function(){
        $(".whitebox").css({display: 'none'});
    });

    $(".noteclose").off('click'); // 노트 닫힌 모습 클릭 비활성화

    $(".noteclose").animate({top: '8.5%'}, long, 'easeOutQuad');
    $(".noteclose").animate({top: '7%'}, short, 'easeOutQuad', function(){
        $(".noteclose").on('click', function(){ // 접힌 노트 클릭하면
            $(".noteopen").css({display: 'block'});
            $(".index").css({display: 'block'});

            $(".noteopen").off('click');

            // 노트가 펼쳐지는 애니메이션
            $(".noteopen").animate({width: '61%', left: '19.5%'}, long, 'easeOutQuad');
            $(".index").animate({width: '9%', left: '75.5%'}, long, 'easeOutQuad');
            $(".noteopen").animate({width: '60%', left: '20%'}, short, 'easeOutQuad');
            $(".index").animate({width: '8%', left: '75%'}, short, 'easeOutQuad', function(){
                // 노트 닫힌 모습 보이지 않도록 설정
                $(".noteclose").css({display: 'none'});

                // 애니메이션이 끝난 후 클릭 활성화
                $(".noteopen").on('click');

                const noteopen = document.getElementById("noteopen");

                noteopen.addEventListener("click", function(){

                    // 플레이어가 클릭했을 시 노트를 화면 밖으로 밀어올리도록 설정
                    $(".noteopen").animate({top: '-100%'}, 1000, 'easeOutQuad');
                    $(".index").animate({top: '-94%'}, long, 'easeOutQuad', function(){
                        // 애니메이션 플레이가 끝난 후 html-main2로 돌아가도록 설정
                        window.location.href = 'html-main2.html';
                    });
                });
            });
        });
    });
});
