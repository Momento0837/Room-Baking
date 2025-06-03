const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;

const lanswer = "30%";

document.addEventListener('keydown', (event) => {
    const useranswer = document.getElementById('ltext').value;

    if (event.key === 'Enter' && useranswer === lanswer) {
        $("#speaker1").css({ left: '30%' });

        $(".overlay > h1").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
            $("#h1").text("빗자루");
            $(".overlay > h1").animate({ opacity: 1 }, long, 'easeOutQuad');

            $(".character-box").animate({ opacity: 1 }, long, 'easeOutQuad');
        });

        $("#line").animate({ opacity: 0 }, long, 'easeOutQuad', () => {
            line.innerText = "";
            line.innerText = "와, 박수 박수!";
        });
        $("#line").animate({ opacity: 1 }, long, 'easeOutQuad');

        $("#line").on('click');
    }
});

window.addEventListener('DOMContentLoaded', () => {
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
                chating("너 방금 너무 옛날이라고 생각했지.");
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

                setTimeout(function () {
                    $(".overlay").animate({ height: '31.5%', top: '62%' }, long, 'easeOutQuad');
                    $("#line").animate({ top: '37%' }, 1200, 'easeOutQuad');
                    $(".block").animate({ height: '48%' }, long, 'easeOutQuad');
                    $(".condition").animate({ padding: '2.9% 3% 3% 3%' }, long, 'easeOutQuad', function () {
                        $("#stick-answer").animate({ opacity: 1 }, long, 'easeOutQuad');
                        $("#condition").animate({ opacity: 1 }, long, 'easeOutQuad');
                        $("#answer").animate({ opacity: 1 }, long, 'easeOutQuad');
                    });
                }, 300);
                count++;
                break;

            case 7:
                chating("여기에 원하는 여백을 입력하고...");

                const stick_answer = document.getElementById("stick-answer");
                const example = "15%";

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
                $(".condition").animate({ padding: '2.9% 3% 3% 3%' }, long, 'easeOutQuad');

                const item = document.querySelector('.item');
                if (!item) return;

                // 부모 요소 기준 계산
                const parent = item.parentElement;
                const parentWidth = parent.offsetWidth;
                const itemWidth = item.offsetWidth;

                // monitor 옆까지 이동할 left 값(%)을 지정 (예: 전체의 60% 위치가 monitor 옆이라고 가정)
                const monitorLeftPercent = 15; // 실제 monitor 옆 위치에 맞게 값 조정

                // 현재 left 값이 없으면 0으로 시작
                let leftPercent = parseFloat(getComputedStyle(item).left) || 0;

                item.style.transition = 'left 1.5s';

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

                setTimeout(moveRight, 700);
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
                character.src = "images/character.png";
                chating("어, 어쨌든 이렇게 여백을 줄 수 있어.");
                count++;
                break;

            case 11:
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

                setTimeout(function () {
                    $(".character-box").animate({ opacity: 0 }, long, 'easeOutQuad');
                    $("#stick-answer").animate({ opacity: 0 }, long, 'easeOutQuad');
                    $("#answer").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                        $("#answer").animate({ opacity: 1 }, long, 'easeOutQuad');

                        $("#ltext").css({ display: 'block' }, long, 'easeOutQuad');
                        $("#ltext").animate({ opacity: 1 }, long, 'easeOutQuad');
                    });
                    $("#line").animate({ opacity: 0 }, long, 'easeOutQuad', () => {
                        line.innerText = "";
                        line.innerHTML = '<span>bottom, top, left, right는 해당 물체의 위치를 지정하는 속성입니다.<br><br>position을 기본값과 다르게 선언해주어야 사용이 가능합니다.<br><br>또한, 값이 크면 클수록 해당 방향의 여백이 늘어납니다.</span>';

                        $("#line").animate({ opacity: 1 }, long, 'easeOutQuad');
                    });
                    $("#h1").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                        $("#h1").text("나레이션");
                        $("#h1").animate({ opacity: 1 }, long, 'easeOutQuad');
                    });
                }, 1000);
                count++;
                break;

            case 14:
                count++;
                break;

            case 15:
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

            case 18:
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

            default:
                break;
        }

        if (count > 24) {
            $(".character-box").on("click", function () {
                $(".whitebox").css({ display: 'block' });
                $(".whitebox").animate({ opacity: 1 }, long, 'easeOutQuad', function () { window.location.href = 'index.html'; });
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