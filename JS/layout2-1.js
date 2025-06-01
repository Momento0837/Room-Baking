const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;

$(document).ready(function(){
    
    const condition = document.getElementById("condition");
    const answer = document.getElementById("answer");

    // 하얀색 페이드로 화면전환
    $(".whitebox").animate({opacity: '0%'}, long, 'easeOutQuad', function(){
        $(".whitebox").css({display: 'none'});
    });

    // $(".block").animate({left: '-38%'}, long, 'easeOutQuad');
    $(".bookshelf").animate({width: '40%', height: '95%', left: '30%', top: '10%'}, long, 'easeOutQuad');

    // Main탭 내려오는 애니메이션. 나머지는 꼬리만 보이게.
    setTimeout(() => {
        $(".sidebar > :first-child").animate({top: '-70%'}, 1100,'easeOutQuad');
        setTimeout(() => { // 2번째 탭은 0.1초 늦게
            $(".sidebar > :nth-child(2)").animate({top: '0%'}, 1100,'easeOutQuad');
        }, 100);
        setTimeout(() => { // 3번째 탭은 0.2초 늦게
            $(".sidebar > :nth-child(3)").animate({top: '-70%'}, 1100,'easeOutQuad');
        }, 200);
    }, 300);
    
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

    // 캐릭터 대사
    const character = document.getElementById("character");
    const line = document.getElementById("line");
    const chat = document.getElementById("chat");
    let count = 0;
    let origintext = line.innerText;

    setTimeout(() => {
        $(".bookshelf").animate({width: '80%', height: '185%', left: '10%', top: '-60%'}, long, 'easeOutQuad');
        }, 1000); // 책장 확대

    line.addEventListener("click", () => {
        switch(count){
            case 0:
                character.src = "images/character_notangry.png";
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "어라? 이거 봐!";
                    // 노트 보잉보잉
                    $(".note").stop().animate({ width: '17%', height: '16%', top: '84%', left: '60.5%' }, mid, 'easeOutQuad', () =>{
                        $(".note").stop().animate({ width: '16%', height: '15%', top: '85%', left: '61%' }, mid, 'easeOutQuad', () =>{
                            $(".note").stop().animate({ width: '17%', height: '16%', top: '84%', left: '60.5%' }, mid, 'easeOutQuad', () => {
                                $(".note").stop().animate({ width: '16%', height: '15%', top: '85%', left: '61%' }, mid, 'easeOutQuad');
                            });
                        });
                    });
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            case 1:
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "엄청 중요한 정보가 담긴 책인가봐!";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            case 2:
                character.src = "images/character.png";
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "어차피 이 책도 정리해야 하니까, 얼른 열어보자.";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            case 3:
                character.src = "images/character_happy.png";
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerHTML = "중요한 책이면 여기 다시 놓지 뭐! *^^* <br><span>(책을 클릭하여 다음으로 넘어갈 수 있습니다.)</span>";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            case 4:
                character.src = "images/character_happy.png";
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerHTML = "중요한 책이면 여기 다시 놓지 뭐! *^^* <br><span>(책을 클릭하여 다음으로 넘어갈 수 있습니다.)</span>";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            default:
                break;
        }

        const note = document.getElementById("bookshelf");

        note.addEventListener('click', (event) => {
            // 캐릭터 아래로 내려가는 모션
            $(".character-box").stop().animate({top: '17%'}, short, 'easeOutQuad');
            $(".character-box").animate({top: '120%'}, long, 'easeOutQuad', () => {
                $(".main-box").hide();
            });

            // 캐릭터 말풍선 내려가는 모션
            $(".overlay").animate({top: '120%'}, long, 'easeOutQuad');

            $(".whitebox").css({display: 'block'});
            $(".whitebox").animate({opacity: '100%'}, long, 'easeOutQuad', function () { window.location.href = 'layout1.html'; });
        });
        
        const imganswer = "family_stick.png";

        document.addEventListener('keydown', (event) => {
            const useranswer = document.getElementById('imgtext').value;

            if(event.key === 'Enter'){
                if(useranswer === imganswer){
                    $("#family_stick").css({display: 'block'});
                    $("#family_stick").animate({top: '0%', opacity: '100%'}, long, 'easeOutQuad');

                    // 캐릭터 아래로 올라가는 모션
                    $(".main-box").show();
                    $(".character-box").stop().animate({top: '17%'}, short, 'easeOutQuad');
                    $(".character-box").animate({top: '18%'}, long, 'easeOutQuad');

                    // 캐릭터 말풍선 올라가는 모션
                    $(".overlay").animate({top: '70%'}, long, 'easeOutQuad');

                    line.innerText = "";
                    line.innerText = "와, 대단해!";
                }
            }
        });

        // $(".sidebar > :nth-child(2)").on("click", function () {
        //     $(".whitebox").css({ display: 'block' });
        //     $(".whitebox").animate({ opacity: '100%' }, long, 'easeOutQuad', function () { window.location.href = 'layout2-1.html'; });
        // })
    });
});