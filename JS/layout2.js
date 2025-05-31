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

    // Header탭 내려오는 애니메이션. 나머지는 꼬리만 보이게.
    setTimeout(() => {
        $(".sidebar > :first-child").animate({top: '0%'}, 1100,'easeOutQuad');
        setTimeout(() => { // 2번째 탭은 0.1초 늦게
            $(".sidebar > :nth-child(2)").animate({top: '-70%'}, 1100,'easeOutQuad');
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

    // 핑크노트에 마우스를 올리면 커지는 이벤트
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
        $(".bookshelf").animate({width: '80%', height: '185%', left: '10%', top: '10%'}, long, 'easeOutQuad');
        }, 1000);

    line.addEventListener("click", () => {
        switch(count){
            case 0:
                character.src = "images/character_happy.png"
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "액자 두 개가 보이지?";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            case 1:
                character.src = "images/character_happy.png"
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "여기에 아주 소중한 사진들을 끼워 둘 거야.";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;
                
            case 2:
                character.src = "images/character.png"
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "예를 들어...";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');

                // 전체적 비율 조정
                $(".bookshelf").animate({ left: '50%' }, superlong);
                $(".block").animate({ left: '7%' }, superlong);
                $(".overlay").animate({ left: '55%', top: '70%', width: '40%', height: '25%' }, superlong);
                $("#line").animate({ top: '40%' }, long);
                $(".character-box").animate({ top: '18%', left: '80%' }, superlong); 

                count++;
                break;

            case 3:
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "이렇게 src 옆에 입력하고 엔터를 누른다면?";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                
                const stick_answer = document.getElementById("stick-answer");
                const example = "cute_stick.png";

                for(let i = 0; i < example.length; i++){
                    setTimeout(() => {
                        stick_answer.innerText += example.charAt(i);
                    }, i * 70);
                }

                count++;
                break;

            case 4:
                character.src = "images/character_happy.png"
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "짜잔~!";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');

                $("#cute_stick").css({display: 'block'});
                $("#cute_stick").animate({top: '0%', opacity: '100%'}, long, 'easeOutQuad');
                count++;
                break;

            case 5:
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "사진이 이렇게 들어가게 돼.";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            case 6:
                character.src = "images/character_happy.png"
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "자, 너도 해봐!";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            case 7:

                // 캐릭터 아래로 내려가는 모션
                $(".character-box").stop().animate({top: '17%'}, short, 'easeOutQuad');
                $(".character-box").animate({top: '120%'}, long, 'easeOutQuad', () => {
                    $(".main-box").hide();
                });

                // 캐릭터 말풍선 내려가는 모션
                $(".overlay").animate({top: '120%'}, long, 'easeOutQuad');

                $("#stick-answer").animate({opacity: '0%'}, long, 'easeOutQuad', function() {
                    $(this).css({display: 'none'});
                });

                $(".bookshelf").animate({ left: '40%' }, superlong);

                $("#condition").animate({opacity: '0%'}, long, 'easeOutQuad', function() {
                    
                    condition.innerHTML = '🌼 <span>&lt;img&gt;</span> 태그는 <span>&lt;img src="(사진 경로)" alt="대체텍스트"&gt;</span> <br>형태로 사용합니다. <br><br>✅ 사진 경로는 <span>" family_stick.png "</span> 입니다.';
                    answer.innerHTML = '<br><br><br><br><br>&lt;div class="container"&gt;<br><br>  &lt;img src="                                      " alt="가족 빗자루"&gt;<br><br>&lt;/div&gt;<br><br></br>';
                    
                    $("#imgtext").css({display: 'block'});
                    $("#imgtext").animate({opacity: '100%'}, long, 'easeOutQuad');
                });
                $("#answer").animate({opacity: '0%'}, long, 'easeOutQuad');

                $("#stick-answer").animate({opacity: '100%'}, long, 'easeOutQuad');
                $("#condition").animate({opacity: '100%'}, long, 'easeOutQuad');
                $("#answer").animate({opacity: '100%'}, long, 'easeOutQuad');

                count++;
                break;

            case 8:
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "생각보다 쉽지? 벌써 반이나 왔어!";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            case 9:
                character.src = "images/character.png"
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "응? 그게 무슨 소리냐고?";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            case 10:
                character.src = "images/character_happy.png"
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "에이~ 시작이 반이라잖아!";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            case 11:
                character.src = "images/character_notangry.png"
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "그보다 얼른 다음 것도 하러 가자.";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            case 12:
                character.src = "images/character_happy.png"
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerHTML = "얼른 얼른! <br> <span>(상단의 Main을 눌러 다음으로 이동할 수 있습니다.)</span>";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');

                // Header탭 내려오는 애니메이션. 나머지는 꼬리만 보이게.
                    $(".sidebar > :first-child").animate({top: '-70%'}, 1100,'easeOutQuad');
                    $(".sidebar > :nth-child(2)").animate({top: '0%'}, 1100,'easeOutQuad');

                count++;
                break;

            default:
                break;
        }
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

        $(".sidebar > :nth-child(2)").on("click", function () {
            $(".whitebox").css({ display: 'block' });
            $(".whitebox").animate({ opacity: '100%' }, long, 'easeOutQuad', function () { window.location.href = 'layout2-1.html'; });
        })
    });
});