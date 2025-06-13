// 애니메이션용 상수 선언
const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;

let count = 0;

// 정답 상수 선언
const imganswer = "family_stick.png";

// 정답을 입력하고 엔터를 눌렀을 때
document.addEventListener('keydown', (event) => {
    const useranswer = document.getElementById('imgtext').value; // input에서 받은 값을 상수에 지정

    if (event.key === 'Enter' && useranswer === imganswer) { // 정답과 같다면
        
        // 액자에 사진 넣기
        $("#family_stick").css({ display: 'block' });
        $("#family_stick").animate({ top: '0%', opacity: '100%' }, long, 'easeOutQuad');

        // 캐릭터 위로 올라가는 모션
        $(".main-box").show();
        $(".character-box").stop().animate({ top: '17%' }, long, 'easeOutQuad');
        $(".character-box").animate({ top: '18%' }, long, 'easeOutQuad');

        // 캐릭터 말풍선 올라가는 모션
        $(".overlay").animate({ top: '70%' }, long, 'easeOutQuad', function(){
            count = 8;
        });

        // 캐릭터 대사
        line.innerText = "";
        line.innerText = "와, 대단해!";
    }
});

$(document).ready(function () {

    const condition = document.getElementById("condition");
    const answer = document.getElementById("answer");

    // 하얀색 페이드로 화면전환
    $(".whitebox").animate({ opacity: '0%' }, long, 'easeOutQuad', function () {
        $(".whitebox").css({ display: 'none' });
    });

    $(".bookshelf").animate({ width: '40%', height: '95%', left: '30%', top: '10%' }, long, 'easeOutQuad');

    // Header탭 내려오는 애니메이션. 나머지는 꼬리만 보이게.
    setTimeout(() => {
        $(".sidebar > :first-child").animate({ top: '0%' }, 1100, 'easeOutQuad');
        setTimeout(() => { // 2번째 탭은 0.1초 늦게
            $(".sidebar > :nth-child(2)").animate({ top: '-70%' }, 1100, 'easeOutQuad');
        }, 100);
        setTimeout(() => { // 3번째 탭은 0.2초 늦게
            $(".sidebar > :nth-child(3)").animate({ top: '-70%' }, 1100, 'easeOutQuad');
        }, 200);
    }, 300);

    // 캐릭터 위 아래로 왔다갔다 하는 애니메이션
    $("#character").animate({ top: '-1%' }, long, 'easeOutQuad');
    setTimeout(() => {
        $("#character").animate({ top: '0%' }, long, 'easeOutQuad');
    }, 1500); // 딜레이 삭제

    setInterval(function () {
        $("#character").animate({ top: '-1%' }, long, 'easeOutQuad');
        setTimeout(() => {
            $("#character").animate({ top: '0%' }, long, 'easeOutQuad');
        }, 1500);
    }, 3000);

    // 상단탭 세개에 마우스를 올리면 커지는 이벤트
    $('.item').on("mouseover", function () {
        $(this).stop().animate({ width: '29%', height: '102%' }, mid, 'easeOutQuad');
    }).on("mouseout", function () {
        $(this).stop().animate({ width: '28%', height: '100%' }, mid, 'easeOutQuad');
    });

    // 상자에 마우스를 올리면 커지는 이벤트
    $('.bottom>.item').on("mouseover", () => {
        $(".bottom").stop().animate({ gap: '1%', width: '85%', height: '30%', top: '67%', left: '7.5%' }, mid, 'easeOutQuad');
    }).on("mouseout", function () {
        $(".bottom").stop().animate({ gap: '1.7%', width: '84%', height: '29%', top: '68%', left: '8%' }, mid, 'easeOutQuad');
    });

    // 노트에 마우스를 올리면 커지는 이벤트
    $('.note').on("mouseover", () => {
        $(".note").stop().animate({ width: '17%', height: '16%', top: '84%', left: '60.5%' }, mid, 'easeOutQuad');
    }).on("mouseout", function () {
        $(".note").stop().animate({ width: '16%', height: '15%', top: '85%', left: '61%' }, mid, 'easeOutQuad');
    });

    // 액자에 마우스를 올리면 올라오는 이벤트
    $('.top > div').on("mouseover", function () {
        $(this).stop().animate({ top: '-10%' }, short, 'easeOutQuad');
    }).on("mouseout", function () {
        $(this).stop().animate({ top: '0%' }, short, 'easeOutQuad');
    });

    // 캐릭터 대사
    const character = document.getElementById("character");
    const line = document.getElementById("line");
    const chat = document.getElementById("chat");
    let origintext = line.innerText;

    setTimeout(() => {
        $(".bookshelf").animate({ width: '80%', height: '185%', left: '10%', top: '10%' }, long, 'easeOutQuad');
    }, 1000); // 책장 확대

    line.addEventListener("click", () => {
        switch (count) {
            case 0:
                character.src = "images/character_happy.png"
                chating("액자 두 개가 보이지?");
                count++;
                break;

            case 1:
                chating("여기에 아주 소중한 사진들을 끼워 둘 거야.");
                count++;
                break;

            case 2:
                character.src = "images/character.png"
                chating("예를 들어....");

                // 전체적 비율 조정
                $(".bookshelf").animate({ left: '50%' }, superlong);
                $(".block").animate({ left: '7%' }, superlong);
                $(".overlay").animate({ left: '55%', top: '70%', width: '40%', height: '25%' }, superlong);
                $("#line").animate({ top: '40%' }, long);
                $(".character-box").animate({ top: '18%', left: '80%' }, superlong);

                count++;
                break;

            case 3:
                chating("이렇게 src 옆에 입력하고 엔터를 누른다면?");

                // #stick-answer 불러오기
                const stick_answer = document.getElementById("stick-answer");
                const example = "cute_stick.png";

                // example에 있는 단어를 #stick-answer 안에 한 글자씩 출력
                for (let i = 0; i < example.length; i++) {
                    setTimeout(() => {
                        stick_answer.innerText += example.charAt(i);
                    }, i * 70);
                }

                count++;
                break;

            case 4:
                character.src = "images/character_happy.png"
                chating("짜잔~!");

                // 액자에 사진 넣기
                $("#cute_stick").css({ display: 'block' });
                $("#cute_stick").animate({ top: '0%', opacity: '100%' }, long, 'easeOutQuad');
                count++;
                break;

            case 5:
                chating("사진이 이렇게 들어가게 돼.");
                count++;
                break;

            case 6:
                character.src = "images/character_happy.png"
                chating("자, 너도 해봐!");
                count++;
                break;

            case 7:
                
                count = 30;
                // 캐릭터 아래로 내려가는 모션
                $(".character-box").animate({ top: '120%' }, long, 'easeOutQuad', () => {
                    $(".main-box").hide();
                });

                // 캐릭터 말풍선 내려가는 모션
                $(".overlay").animate({ top: '120%' }, long, 'easeOutQuad');

                $("#stick-answer").animate({ opacity: '0%' }, long, 'easeOutQuad', function () {
                    $(this).css({ display: 'none' });
                });

                // 책장을 왼쪽으로 넘기기
                $(".bookshelf").animate({ left: '40%' }, superlong);

                // 문제 변경
                $("#condition").animate({ opacity: '0%' }, long, 'easeOutQuad', function () {

                    condition.innerHTML = '🌼 <span>&lt;img&gt;</span> 태그는 <span>&lt;img src="(사진 경로)" alt="대체텍스트"&gt;</span> <br>형태로 사용합니다. <br><br>✅ 사진 경로는 <span>" family_stick.png "</span> 입니다.';
                    answer.innerHTML = '<br><br><br><br><br>&lt;div class="container"&gt;<br><br>  &lt;img src="                                      " alt="가족 빗자루"&gt;<br><br>&lt;/div&gt;<br><br></br>';

                    $("#imgtext").css({ display: 'block' });
                    $("#imgtext").animate({ opacity: '100%' }, long, 'easeOutQuad');
                });
                $("#answer").animate({ opacity: '0%' }, long, 'easeOutQuad');

                $("#stick-answer").animate({ opacity: '100%' }, long, 'easeOutQuad');
                $("#condition").animate({ opacity: '100%' }, long, 'easeOutQuad');
                $("#answer").animate({ opacity: '100%' }, long, 'easeOutQuad');

                break;

            case 8: // 정답 입력 후
                chating("생각보다 쉽지? 벌써 반이나 왔어!");
                count++;
                break;

            case 9:
                character.src = "images/character.png"
                chating("응? 그게 무슨 소리냐고?");
                count++;
                break;

            case 10:
                character.src = "images/character_happy.png"
                chating("에이~ 시작이 반이라잖아!");
                count++;
                break;

            case 11:
                character.src = "images/character_notangry.png"
                chating("그보다 얼른 다음 것도 하러 가자.");
                count++;
                break;

            case 12:
                character.src = "images/character_happy.png"
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerHTML = "얼른 얼른! <br> <span>(상단의 Main을 눌러 다음으로 이동할 수 있습니다.)</span>";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');

                // Header탭 내려오는 애니메이션. 나머지는 꼬리만 보이게.
                $(".sidebar > :first-child").animate({ top: '-70%' }, 1100, 'easeOutQuad');
                $(".sidebar > :nth-child(2)").animate({ top: '0%' }, 1100, 'easeOutQuad');

                count++;
                break;

            default:
                break;
        }
        
        // 카운트가 13 이상일 때 메인 탭을 클릭하면 다음 화면으로
        if(count > 12 && count < 30){
            $(".sidebar > :nth-child(2)").on("click", function () {
                $(".whitebox").css({ display: 'block' });
                $(".whitebox").animate({ opacity: '100%' }, long, 'easeOutQuad', function () { window.location.href = 'html-main1.html'; });
            })
        }
        
    });

    // 말풍선 함수
    function chating(text) {
        $("#line").animate({ opacity: 0 }, short, 'easeOutQuad', () => {
            line.innerText = "";
            line.innerText = text;
        });
        $("#line").animate({ opacity: 1 }, short, 'easeOutQuad');
    }
});