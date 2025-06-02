const brush = document.querySelector('.brush');
const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;

// 가로 16, 세로 9 그리드 기준 좌표를 %로 변환하는 함수
function gridToPercent(x, y) {
    // left: 0~100%, top: 0~100% 기준 (여유 공간 고려해 5~85%, 10~65%로 보정)
    const left = (x / 15) * 80 + 5; // 0~15 -> 5%~85%
    const top = (y / 8) * 55 + 10;  // 0~8  -> 10%~65%
    return { left, top };
}

// 이동할 좌표 배열 (예시: 5,4 → 7,3 → 9,6 → 11,2 → 13,1)
const path = [
    { x: 0, y: 4 },
    { x: 13, y: 1 },
    { x: 6, y: 0 },
    { x: 11, y: 6 },
    { x: 3, y: 1 },
    { x: 0, y: 4 }
];

// 브러시를 해당 좌표로 이동시키는 함수
function moveBrushByPath(path) {
    let step = 0;
    brush.style.transition = 'left 0.7s, top 0.7s';

    function moveNext() {
        if (step >= path.length) return;
        const { left, top } = gridToPercent(path[step].x, path[step].y);
        brush.style.left = `${left}%`;
        brush.style.top = `${top}%`;
        step++;
        if (step < path.length) {
            setTimeout(moveNext, 700); // 0.7초마다 다음 좌표로 이동
        }
    }
    moveNext();
}

// 페이지가 로드된 후
window.addEventListener('DOMContentLoaded', () => {
    $(".whitebox").animate({ opacity: '0%' }, long, 'easeOutQuad', function () {
        $(".whitebox").css({ display: 'none' });
    });



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

    // 캐릭터 위로 올라오는 애니메이션
    setTimeout(() => {
        $(".character-box").animate({ top: '21%' }, superlong, 'easeOutQuad');
        $(".character-box").animate({ top: '22%' }, long, 'easeOutQuad');
    }, 300);

    // 캐릭터 말풍선 올라오는 애니메이션
    setTimeout(() => { $(".overlay").animate({ top: '55%' }, superlong, 'easeOutQuad'); }, 300);

    // 시작 좌표로 먼저 이동
    const { left, top } = gridToPercent(path[0].x, path[0].y);
    brush.style.left = `${left}%`;
    brush.style.top = `${top}%`;
    setTimeout(() => moveBrushByPath(path), 300); // 0.3초 후 이동 시작

    // 캐릭터 대사
    const character = document.getElementById("character");
    const line = document.getElementById("line");
    const bubble = document.getElementById("chat");
    const stick = document.getElementById("h1");
    let count = 0;

    line.addEventListener("click", () => {
        switch (count) {
            case 0:
                character.src = "images/character.png";
                chating("방 정리는 마치고 온 것 맞지?");
                count++;
                break;

            case 1:
                character.src = "images/character_happy.png";
                chating("얼른 페인트부터 칠해보자!");
                count++;
                break;

            case 2:
                character.src = "images/character.png";
                chating(".... 응? 정리하기 전에 페인트칠 안했냐고?");
                count++;
                break;

            case 3:
                character.src = "images/character_scared.png";
                chating("에이, 그럴 수도 있지. 간단한 건데~!");
                count++;
                break;

            case 4:
                character.src = "images/character_notangry.png";
                chating("얼른, 내가 시범 보여줄테니 잘 따라와!");
                count++;
                break;

            case 5:
                chating("봐,");
                $(".block").animate({ top: '9%' }, long, 'easeOutQuad');
                $(".block").animate({ top: '10%' }, mid, 'easeOutQuad');
                $(".overlay").animate({ width: '46%', left: '51%' }, long, 'easeOutQuad');
                $(".overlay").animate({ width: '47%', left: '50%' }, mid, 'easeOutQuad');
                $(".character-box").animate({ top: '36%', left: '85%' }, long, 'easeOutQuad');
                count++;
                break;

            case 6:
                character.src = "images/character.png";
                chating("위에 블럭이 보이지?");
                count++;
                break;

            case 7:
                chating("여기에 원하는 색상을 입력하면...");

                const stick_answer = document.getElementById("stick-answer");
                const example = "cute_stick.png";

                for (let i = 0; i < example.length; i++) {
                    setTimeout(() => {
                        stick_answer.innerText += example.charAt(i);
                    }, i * 70);
                }
                
                count++;
                break;

            case 8:
                character.src = "images/character_happy.png";
                chating("짠~");
                count++;
                break;

            case 9:
                chating("내가 말했지? 쉬운 거라고~");
                count++;
                break;

            case 10:
                character.src = "images/character.png";
                chating("이건 background-color라는 속성이야!");
                count++;
                break;

            case 11:
                chating("이름 그대로 배경색이라는 거지.");
                count++;
                break;

            case 12:
                character.src = "images/character_happy.png";
                chating("어때, 너도 해볼래? *^^*");
                count++;
                break;

            case 13:
                chating("");
                $(".character-box").animate({ left: '100%' }, long, 'easeOutQuad');
                $(".overlay > h1").animate({ opacity: 0 }, mid, 'easeOutQuad', function () {
                    stick.innerText = "나레이션";
                    $(".overlay > h1").animate({ opacity: 1 }, mid, 'easeOutQuad');
                });
                setTimeout(chating("background-color은 배경색을 지정할 수 있습니다."), 1000);
                count++;
                break;

            default:
                break;
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
