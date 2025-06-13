// 애니메이션용 상수 선언
const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;

let count = 0;

// 정답 상수 선언
const r1answer = "30%";
const r2answer = "50%";

// 정답을 입력하고 엔터를 눌렀을 때
document.addEventListener('keydown', (event) => {
    const rtext = document.getElementById('rtext');

    $("#stick-answer").css({opacity: 0});

    if (document.activeElement !== rtext) return; // input창에 커서 안 두고 있으면 진행 x

    const useranswer = rtext.value; // input에서 받은 값을 상수에 저장

    if (event.key === 'Enter' && useranswer === r1answer) { // 1번 정답과 같다면
        // border-radius를 30%로 지정
        $(".frame:nth-child(2)").animate({ borderRadius: '30%' }, long, 'easeOutQuad');

        $("#rtext").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
            $("#rtext").val(""); // 사용자 입력값 초기화
            $("#rtext").animate({ opacity: 1 }, long, 'easeOutQuad');
        });

        // 페이드아웃 후 문제 변경
        $("#condition").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
            $(".condition").html('✅ Radius는 <span>" 50% "</span> 입니다.');
            // 다시 페이드인
            $("#condition").animate({ opacity: 1 }, long, 'easeOutQuad');

            // 나머지 두 액자들을 왼쪽으로 당겨옴
            $(".frame:nth-child(2)").animate({ left: '-40.5%' }, long, 'easeOutQuad');
            $(".frame:nth-child(3)").animate({ left: '10.5%' }, long, 'easeOutQuad');
        });

        // css코드 페이드아웃 후 css코드 페이드인
        $("#answer").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
            $("#answer").animate({ opacity: 1 }, long, 'easeOutQuad');
        });
    }

    if (event.key === 'Enter' && useranswer === r2answer) { // 2번 정답과 같다면
        // border-raidus를 50%로 지정
        $(".frame:nth-child(3)").animate({ borderRadius: '50%' }, long, 'easeOutQuad');

        // 페이드아웃 후 이름을 다시 빗자루로 변경
        $(".overlay > h1").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
            $("#h1").text("빗자루");

            // 캐릭터와 말풍선 페이드인
            $(".overlay > h1").animate({ opacity: 1 }, long, 'easeOutQuad');
            $(".character-box").animate({ opacity: 1 }, long, 'easeOutQuad');
        });

        // 캐릭터 대사 변경
        $("#line").animate({ opacity: 0 }, long, 'easeOutQuad', () => {
            line.innerText = "";
            line.innerText = "둥그니까 보기 좋네~";
            count = 9;
        });
        $("#line").animate({ opacity: 1 }, long, 'easeOutQuad');
    }
});

// 도큐먼트가 로딩됐을 때
window.addEventListener('DOMContentLoaded', function () {

    // 화면전환
    $(".whitebox").animate({ opacity: '0%' }, long, 'easeOutQuad', function () {
        $(".whitebox").css({ display: 'none' });
    });

    // 캐릭터 위 아래로 왔다갔다 하는 애니메이션
    $("#character").animate({ top: '-1%' }, long, 'easeOutQuad');
    setTimeout(() => {
        $("#character").animate({ top: '1%' }, long, 'easeOutQuad');
    }, 1500); // 딜레이 삭제

    setInterval(function () {
        $("#character").animate({ top: '-1%' }, long, 'easeOutQuad');
        setTimeout(() => {
            $("#character").animate({ top: '0%' }, long, 'easeOutQuad');
        }, 1500);
    }, 3000);

    // 캐릭터 대사
    const character = document.getElementById("character");
    const bubble = document.getElementById("chat");
    const stick = document.getElementById("h1");
    let timeout;

    $("#line").on("click", () => {
        switch (count) {
            case 0:
                chating("어때? 사진 정말 이쁘지?");
                count++;
                break;

            case 1:
                character.src = "images/character.png";
                chating("그런데 액자가 너무 각진 것 같은걸...");

                // 액자가 너무 각짐! 페이드인
                $("#condition").animate({ opacity: 1 }, long, 'easeOutQuad');

                count++;
                break;

            case 2:
                character.src = "images/character_notangry.png";
                chating("음........");
                count++;
                break;

            case 3:
                character.src = "images/character_happy.png";
                chating("둥글게 만들면 좋겠다!");
                count++;
                break;

            case 4:
                character.src = "images/character.png";
                chating("그럴 때는 이 속성을 사용하면 돼!");

                // 조건과 css코드 페이드인
                $(".answer").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                    $("#stick-answer").animate({ opacity: 1 }, long, 'easeOutQuad');
                    $(".answer").html('<span>.frame </span>{<br><br>      border-radius:                        ;<br><br>}');
                    $(".answer").animate({ opacity: 1 }, long, 'easeOutQuad');
                });

                $(".condition").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                    $(".condition").html('✅ Radius는 <span>" 50% "</span> 입니다.');
                    $(".condition").animate({ opacity: 1 }, long, 'easeOutQuad');
                });

                count++;
                break;

            case 5:
                chating("border-radius라는 속성이야.");
                count++;
                break;

            case 6:
                character.src = "images/character_smile.png";
                chating("원하는만큼 물체의 모서리를...");

                // #stick-answer 불러오기
                const stick_answer = document.getElementById("stick-answer");
                let example = "30%";

                // 30%로 지정하여 example에 있는 단어를 #stick-answer 안에 한 글자씩 출력
                for (let i = 0; i < example.length; i++) {
                    setTimeout(() => {
                        stick_answer.innerText += example.charAt(i);
                    }, i * 150);
                }

                
                // border-radius 30%로 변경
                $(".frame:nth-child(1)").animate({ borderRadius: '30%' }, long, 'easeOutQuad', function () {
                    
                    // 변경 이후
                    setTimeout(function () {
                        stick_answer.innerText = "30";
                        setTimeout(function () {
                            stick_answer.innerText = "3";
                            setTimeout(function () {
                                stick_answer.innerText = ""; // 자연스러운 초기화
                            }, 60);
                        }, 60);
                    }, 60);

                    // 50%로 지정하여 example에 있는 단어를 #stick-answer 안에 한 글자씩 출력
                    setTimeout(function () {
                        example = "50%";
                        for (let i = 0; i < example.length; i++) {
                            setTimeout(() => {
                                stick_answer.innerText += example.charAt(i);
                            }, i * 50);
                        }
                        
                        // border-radius 50%로 변경
                        $(".frame:nth-child(1)").animate({ borderRadius: '50%' }, long, 'easeOutQuad');
                    }, 500);
                });

                // 1.2초 이후 캐릭터 대사 변경
                timeout = setTimeout(function () { chating("둥글게 만들 수 있어."); }, 1200);

                count++;
                break;

            case 7:
                chating("나머지 액자도 둥글게 만들자!");
                count++;
                break;

            case 8:
                count = 30;

                $(".frame:nth-child(1)").stop();
                clearTimeout(timeout);

                // 캐릭터, 빗자루 정답, 말풍선, css코드 페이드아웃
                $(".character-box").animate({ opacity: 0 }, long, 'easeOutQuad');
                $("#stick-answer").stop().animate({ opacity: 0 }, long, 'easeOutQuad');
                $(".condition").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                    // 조건 변경 후 페이드인
                    $(".condition").html('✅ Radius는 <span>" 30% "</span> 입니다.');
                    $(".condition").animate({ opacity: 1 }, long, 'easeOutQuad');
                });
                $("#answer").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                    // css코드 페이드인
                    $("#answer").animate({ opacity: 1 }, long, 'easeOutQuad');
                });
                $(".overlay > h1").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                    // 나레이션으로 이름 변경
                    $("#h1").text("나레이션");
                    $(".overlay > h1").animate({ opacity: 1 }, long, 'easeOutQuad');

                    // 플레이어 입력창 페이드인
                    $("#rtext").css({ display: 'block' }, long, 'easeOutQuad');
                    $("#rtext").animate({ opacity: 1 }, long, 'easeOutQuad');
                });

                // 액자들을 한 칸 씩 왼쪽으로 이동
                $(".frame:nth-child(1)").animate({ left: '-40.5%' }, long, 'easeOutQuad');
                $(".frame:nth-child(2)").animate({ left: '10.5%' }, long, 'easeOutQuad');
                $(".frame:nth-child(3)").animate({ left: '60.5%' }, long, 'easeOutQuad');

                // 나레이션으로 대사 변경
                $("#line").stop().animate({ opacity: 0 }, long, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerHTML = '<span>Border-radius는 물체의 모서리를 둥글게 만들 수 있는 속성입니다.<br><br>값이 클수록 둥글게 만듭니다.</span>';
                });
                $("#line").animate({ opacity: 1 }, long, 'easeOutQuad');

                count++;
                break;

            case 9:
                chating("어때, 마음에 들지?");
                count++;
                break;

            case 10:
                character.src = "images/character_notangry.png";
                chating("... 뭐? 마음에 안든다고?");
                count++;
                break;

            case 11:
                character.src = "images/character_happy.png";
                chating("내 마음에 드니까 괜찮아. *^^*");
                count++;
                break;

            case 12:
                character.src = "images/character_notangry.png";
                chating("그보다, 시간이 없어. 다음으로 가자!");
                count++;
                break;

            case 13:
                $("#line").animate({ opacity: 0 }, short, 'easeOutQuad', () => {
                    $("#line").html('<span>(채팅창을 클릭하여 다음으로 넘어갈 수 있습니다.)</span>');
                });
                $("#line").animate({ opacity: 1 }, short, 'easeOutQuad');
                count++;
                break;

            default:
                break;
        }

        // 카운트가 14 이상일 때 채팅창 클릭하면 다음화면으로 이동
        if (count > 13 && count < 30) {
            $("#line").on("click", function () {
                $(".whitebox").css({ display: 'block' });
                $(".whitebox").animate({ opacity: 1 }, long, 'easeOutQuad', function () { window.location.href = 'css-whiteboard.html'; });
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