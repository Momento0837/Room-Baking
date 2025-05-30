const long = 1300;
const short = 300;

$(document).ready(function(){
    $(".noteclose").off('click'); // 노트 닫힌 모습 클릭 비활성화

    $(".noteclose").animate({top: '8%'}, long, 'easeOutQuad');
    $(".noteclose").animate({top: '7%'}, short, 'easeOutQuad', function(){
        $(".noteclose").on('click', function(){
            $(".note").css({display: 'block'});
            $(".index").css({display: 'block'});

            $(".note").off('click');

            // 노트가 펼쳐지는 애니메이션
            $(".note").animate({width: '69%', left: '15.5%'}, long, 'easeOutQuad');
            $(".index").animate({width: '11%', left: '77%'}, long, 'easeOutQuad');
            $(".note").animate({width: '68%', left: '16%'}, short, 'easeOutQuad');
            $(".index").animate({width: '10%', left: '77.5%'}, short, 'easeOutQuad', function(){

                //애니메이션이 끝난 후 클릭 활성화
                $(".note").on('click', function(){

                    // 노트 닫힌 모습 보이지 않도록 설정
                    $(".noteclose").css({display: 'none'});

                    // 노트가 내려오고 플레이어가 클릭했을 시 노트를 화면 밖으로 밀어올리도록 설정
                    $(".note").click(function(){
                        $(".whitebox").animate({opacity: '100%'}, long, 'easeOutQuad');
                        $(".container").animate({opacity: '0%'}, long, 'easeOutQuad');
                        $(".note").animate({top: '-100%'}, long, 'easeOutQuad');
                        $(".index").animate({top: '-94%'}, long, 'easeOutQuad', function(){
                            // 애니메이션 플레이가 끝난 후 4번 레이아웃 (이전 화면) 으로 돌아가도록 설정
                            window.location.href = 'layout4.html';
                        });
                    });
                })
            });
        });
    });
});
