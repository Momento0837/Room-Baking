// 애니메이션용 상수 선언
const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;

// 정답 상수 선언
const lanswer = "30%";

// 정답을 입력하고 엔터를 눌렀을 때
document.addEventListener('keydown', (event) => {

    const useranswer = document.getElementById('ltext').value; // input에서 받은 값을 상수에 저장

    if (event.key === 'Enter' && useranswer === lanswer) { // 정답과 같다면
        $("#speaker1").css({ left: '30%' }); // 스피커를 모니터쪽으로 가까이 붙임

        // 페이드아웃 후 나레이션이라고 돼있는 이름을 빗자루로 다시 변경
        $(".overlay > h1").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
            $("#h1").text("빗자루");

            // 캐릭터, 이름 페이드인
            $(".overlay > h1").animate({ opacity: 1 }, long, 'easeOutQuad');
            $(".character-box").animate({ opacity: 1 }, long, 'easeOutQuad');
        });

        // 캐릭터 대사 변경 후 페이드인
        $("#line").animate({ opacity: 0 }, long, 'easeOutQuad', () => {
            line.innerText = "";
            line.innerText = "와, 박수 박수!";
        });
        $("#line").animate({ opacity: 1 }, long, 'easeOutQuad');

        $("#line").on('click');
    }
});

// 페이지가 로드된 후
window.addEventListener('DOMContentLoaded', () => {
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
    const line = document.getElementById("line");
    const bubble = document.getElementById("chat");
    const stick = document.getElementById("h1");
    let count = 0;

    line.addEventListener("click", () => {
        switch (count) {
            case 0:
                character.src = "images/character_smile.png";
                chating("나는 이런거 보면 신기하더라~");
                count++;
                break;

            case 1:
                character.src = "images/character_smile.png";
                chating("...");
                count++;
                break;

            case 2:
                character.src = "images/character_scary.png";
                chating("너 방금 나이 들었다고 생각했지.");
                count++;
                break;

            case 3:
                character.src = "images/character_notangry.png";
                chating("아니면 말고.");
                count++;
                break;

            case 4:
                character.src = "images/character.png";
                chating("그보다 정렬이 조금 이상한데,");
                count++;
                break;

            case 5:
                character.src = "images/character.png";
                chating("스피커가 오른쪽으로 좀 왔으면 좋겠는걸?");
                count++;
                break;

            case 6:
                character.src = "images/character.png";
                chating("그럴 때는~");

                // 0.3초 이후 전체적으로 비율 조정
                setTimeout(function () {
                    $(".overlay").animate({ height: '31.5%', top: '62%' }, long, 'easeOutQuad');
                    $("#line").animate({ top: '37%' }, 1200, 'easeOutQuad');
                    $(".block").animate({ height: '48%' }, long, 'easeOutQuad');
                    $(".condition").animate({ padding: '2.9% 3% 3% 3%' }, long, 'easeOutQuad', function () {
                        // 비율 조정 끝나고 글자들 페이드인
                        $("#stick-answer").animate({ opacity: 1 }, long, 'easeOutQuad');
                        $("#condition").animate({ opacity: 1 }, long, 'easeOutQuad');
                        $("#answer").animate({ opacity: 1 }, long, 'easeOutQuad');
                    });
                }, 300);
                count++;
                break;

            case 7:
                chating("여기에 원하는 여백을 입력하고...");

                // #stick-answer 불러오기
                const stick_answer = document.getElementById("stick-answer");
                const example = "15%";

                // example에 있는 단어를 #stick-answer 안에 한 글자씩 출력
                for (let i = 0; i < example.length; i++) {
                    setTimeout(() => {
                        stick_answer.innerText += example.charAt(i);
                    }, i * 150);
                }

                count++;
                break;

            case 8:
                character.src = "images/character_notangry.png";
                chating("엔터!");

                // ======= 우찬씨 작업 =======

                // 스피커 불러오기
                const item = document.querySelector('.item');
                if (!item) return;

                // 부모 요소 기준 계산
                const parent = item.parentElement;
                const parentWidth = parent.offsetWidth;
                const itemWidth = item.offsetWidth;

                // monitor 옆까지 이동할 left 값(%)을 지정 (예: 전체의 60% 위치가 monitor 옆이라고 가정)
                const monitorLeftPercent = 15; // 실제 monitor 옆 위치에 맞게 퍼센트값 지정

                // 현재 left 값이 없으면 0으로 시작
                let leftPercent = parseFloat(getComputedStyle(item).left) || 0;

                // 트랜지션값
                item.style.transition = 'left 1.5s';

                // 모니터 옆으로 이동하는 함수
                function moveRight() {
                    setTimeout(function () { character.src = "images/character_scared.png"; }, 300);

                    if (leftPercent >= monitorLeftPercent) {
                        item.style.left = `${monitorLeftPercent}%`;
                        return;
                    }
                    leftPercent += 5;
                    if (leftPercent > monitorLeftPercent) leftPercent = monitorLeftPercent;
                    item.style.left = `${leftPercent}%`;
                    setTimeout(moveRight, 900);
                }

                setTimeout(moveRight, 700); // moveRight 함수를 0.7초 이후에 실행

                // ======= 우찬씨 작업 끝 =======
                count++;
                break;

            case 9:
                $("#line").animate({ opacity: 0 }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerHTML = '으, 너무너무 무거워... <span>(엄살)</span>';
                });
                $("#line").animate({ opacity: 1 }, short, 'easeOutQuad');
                count++;
                break;

            case 10:
                chating("어, 어쨌든 이렇게 여백을 줄 수 있어.");
                count++;
                break;

            case 11:
                character.src = "images/character.png";
                chating("아직도 스피커가 너무 먼데...");
                count++;
                break;

            case 12:
                character.src = "images/character_notangry.png";
                chating("......");
                count++;
                break;

            case 13:
                character.src = "images/character_happy.png";
                chating("부탁할게! *^^*");

                // 1초 후에 코드 실행
                setTimeout(function () {
                    // 캐릭터, 빗자루 정답, css 코드, 캐릭터 대사 페이드아웃
                    $(".character-box").animate({ opacity: 0 }, long, 'easeOutQuad');
                    $("#stick-answer").animate({ opacity: 0 }, long, 'easeOutQuad');
                    $("#answer").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                        // css코드, 플레이어 입력창 페이드인
                        $("#answer").animate({ opacity: 1 }, long, 'easeOutQuad');

                        $("#ltext").css({ display: 'block' }, long, 'easeOutQuad');
                        $("#ltext").animate({ opacity: 1 }, long, 'easeOutQuad');
                    });
                    $("#line").animate({ opacity: 0 }, long, 'easeOutQuad', () => {
                        // 대사 지정 후 페이드인
                        line.innerText = "";
                        line.innerHTML = '<span>bottom, top, left, right는 해당 물체의 위치를 지정하는 속성입니다.<br><br>position을 기본값과 다르게 선언해주어야 사용이 가능합니다.<br><br>또한, 값이 크면 클수록 해당 방향의 여백이 늘어납니다.</span>';

                        $("#line").animate({ opacity: 1 }, long, 'easeOutQuad');
                    });
                    // 페이드아웃 후 나레이션으로 이름 변경
                    $("#h1").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                        $("#h1").text("나레이션");
                        // 다시 페이드인
                        $("#h1").animate({ opacity: 1 }, long, 'easeOutQuad');
                    });
                }, 1000);
                count++;
                break;

            case 14:
                // 두번 클릭하는 것 방지용
                count++;
                break;

            case 15: // 입력 후
                chating("완전 천하장사네 천하장사!");
                count++;
                break;

            case 16:
                character.src = "images/character.png";
                chating("이렇게 left는 위치를 조정하는 속성이야.");
                count++;
                break;

            case 17:
                chating("양수로도 사용할 수 있고, 음수도 가능해!");
                count++;
                break;

            // 모든 방정리 끝나고 아웃트로 멘트 진행
            case 18:
                // 가장 처음 화면 비율로 되돌림
                $(".character-box").animate({ left: '77%', top: '22%' }, long, 'easeOutQuad');
                $(".overlay").animate({ left: '4%', top: '55%', width: '92.5%', height: '38.5%' }, long, 'easeOutQuad');
                $(".block").animate({ top: '-50%' }, long, 'easeOutQuad', function () {
                    character.src = "images/character_smile.png";
                    chating("휴~ 이제 정리가 완전 끝났어.");
                });
                count++;
                break;

            case 19:
                chating("어때, 유익했던 시간인 것 같아?");
                count++;
                break;

            case 20:
                character.src = "images/character_notangry.png";
                chating("여기까지 오는 데 꽤 오래 걸렸네.");
                count++;
                break;

            case 21:
                character.src = "images/character.png";
                chating("그래도 재밌었던 것 같아.");
                count++;
                break;

            case 22:
                character.src = "images/character_notangry.png";
                chating("... 나만 그런가?");
                count++;
                break;

            case 23:
                character.src = "images/character_happy.png";
                chating("아무튼, 수고 많았어. 이제 쉬러 가자!");
                count++;
                break;

            case 24:
                $("#line").animate({ opacity: 0 }, short, 'easeOutQuad', () => {
                    $("#line").html('(캐릭터를 클릭하여 메인화면으로 이동할 수 있습니다.)');
                });
                $("#line").animate({ opacity: 1 }, short, 'easeOutQuad');
                count++;
                break;
                // 메인화면으로 돌아가며 코드 마무리

            default:
                break;
        }

        // 카운트가 25 이상이면 캐릭터를 클릭했을 때 메인화면으로 이동
        if (count > 24) {
            $(".character-box").on("click", function () {
                $(".whitebox").css({ display: 'block' });
                $(".whitebox").animate({ opacity: 1 }, long, 'easeOutQuad', function () { window.location.href = '../../index.html'; });
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