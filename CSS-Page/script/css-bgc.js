const brush = document.querySelector('.brush');

// 애니메이션용 상수 선언
const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;

// ======= 우찬씨 작업 =======

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
    { x: 8, y: 2 },
    { x: 1, y: 0 },
    { x: 7, y: 7 },
    { x: 0, y: 3 },
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

// ======= 우찬씨 작업 끝 =======


// 정답 상수 선언
const bgcanswer = "#faecb9";

// 정답을 입력하고 엔터를 눌렀을 때
document.addEventListener('keydown', (event) => {
    const useranswer = document.getElementById('bgctext').value; // input에서 받은 값을 상수에 저장

    if (event.key === 'Enter' && useranswer === bgcanswer) { // 정답과 같다면
        // ======= 우찬씨 작업 =======

        // 시작 좌표로 먼저 이동
        const { left, top } = gridToPercent(path[0].x, path[0].y);
        brush.style.left = `${left}%`;
        brush.style.top = `${top}%`;
        setTimeout(() => moveBrushByPath(path), 300); // 0.3초 후 이동 시작
        
        // ======= 우찬씨 작업 끝 =======
        
        // 배경색을 #faecb9로 변경
        setTimeout(() => { $(".main").animate({ backgroundColor: '#faecb9' }, superlong, 'easeOutQuad') }, 2000);

        // 나레이션을 빗자루로 변경
        $(".overlay > h1").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
            $("#h1").text("빗자루");
            $(".overlay > h1").animate({ opacity: 1 }, long, 'easeOutQuad');

            $(".character-box").animate({ opacity: 1 }, long, 'easeOutQuad');
        });

        // 캐릭터 대사 변경
        $("#line").animate({ opacity: 0 }, long, 'easeOutQuad', () => {
            line.innerText = "";
            line.innerText = "역시 똑똑해~";
        });
        $("#line").animate({ opacity: 1 }, long, 'easeOutQuad');

        $("#line").on('click');
    }
});

// 페이지가 로드된 후
window.addEventListener('DOMContentLoaded', () => {
    $(".whitebox").animate({ opacity: '0%' }, long, 'easeOutQuad', function () {
        $(".whitebox").css({ display: 'none' });
    });

    // 캐릭터 위로 올라오는 애니메이션
    setTimeout(() => {
        $(".character-box").animate({ top: '21%' }, superlong, 'easeOutQuad');
        $(".character-box").animate({ top: '22%' }, long, 'easeOutQuad');
    }, 300);

    // 캐릭터 말풍선 올라오는 애니메이션
    setTimeout(() => { $(".overlay").animate({ top: '55%' }, superlong, 'easeOutQuad'); }, 300);

    // 브러쉬 올라오는 애니메이션
    setTimeout(() => { $(".brush").animate({ top: '37.5%' }, superlong, 'easeOutQuad'); }, 600);

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
                character.src = "images/character.png";
                chating("책장 정리는 마치고 온 것 맞지?");
                count++;
                break;

            case 1:
                character.src = "images/character_scary.png";
                chating("설마... 안했겠어...?");
                count++;
                break;

            case 2:
                character.src = "images/character_notangry.png";
                chating("에잇, 그건 중요하지 않으니까 뭐.");
                count++;
                break;

            case 3:
                character.src = "images/character_notangry.png";
                chating("지금 정리하고 보니까 방이 좀 칙칙한 것 같아!");
                count++;
                break;

            case 4:
                character.src = "images/character.png";
                chating("그러니까 페인트 칠 좀 해야겠어.");
                count++;
                break;

            case 5:
                character.src = "images/character_notangry.png";
                chating(".... 응? 정리하기 전에 페인트칠 안했냐고?");
                count++;
                break;

            case 6:
                character.src = "images/character_scared.png";
                chating("까, 까먹었을 수도 있지. 간단한 건데~!");
                count++;
                break;

            case 7:
                character.src = "images/character_notangry.png";
                chating("얼른, 내가 시범 보여줄테니 잘 따라와!");
                count++;
                break;

            case 8:
                chating("봐,");
                
                // 전체적 비율 조정
                $(".block").animate({ top: '9%' }, long, 'easeOutQuad');
                $(".overlay").animate({ width: '46%', left: '51%' }, long, 'easeOutQuad');
                $(".block").animate({ top: '10%' }, mid, 'easeOutQuad');
                $(".overlay").animate({ width: '47%', left: '50%' }, mid, 'easeOutQuad');

                $(".character-box").animate({ top: '36%', left: '82%' }, long, 'easeOutQuad');
                $("#h1").animate({ left: '4%' }, long, 'easeOutQuad');
                $("#line").animate({ left: '4%' }, long, 'easeOutQuad');
                count++;
                break;

            case 9:
                character.src = "images/character.png";
                chating("위에 블럭이 보이지?");
                count++;
                break;

            case 10:
                chating("여기에 원하는 색상을 입력하고...");

                // #stick-answer 불러오기
                const stick_answer = document.getElementById("stick-answer");
                const example = "#ffc2c2";

                // example에 있는 단어를 #stick-answer 안에 한 글자씩 출력
                for (let i = 0; i < example.length; i++) {
                    setTimeout(() => {
                        stick_answer.innerText += example.charAt(i);
                    }, i * 150);
                }

                count++;
                break;

            case 11:
                chating("엔터를 누르면?");
                // 시작 좌표로 먼저 이동

                // ======= 우찬씨 작업 =======

                const { left, top } = gridToPercent(path[0].x, path[0].y);
                brush.style.left = `${left}%`;
                brush.style.top = `${top}%`;
                setTimeout(() => moveBrushByPath(path), 300); // 0.3초 후 이동 시작
                
                // ======= 우찬씨 작업 끝 =======
                
                // 배경색을 #ffc2c2로 변경
                setTimeout(() => { $(".main").animate({ backgroundColor: '#ffc2c2' }, superlong, 'easeOutQuad') }, 2000);
                count++;
                break;

            case 12:
                character.src = "images/character_happy.png";
                chating("짠~ 배경색이 바뀌었지?");
                count++;
                break;

            case 13:
                chating("내가 말했잖아! 쉬운 거라고.");
                count++;
                break;

            case 14:
                character.src = "images/character.png";
                chating("근데, 너무 단조로운 색 같아.");
                count++;
                break;

            case 15:
                character.src = "images/character.png";
                chating("노란색이면 적당할 것 같은데...");
                count++;
                break;

            case 16:
                // 캐릭터, 빗자루 정답, 조건, css코드, 대사, 이름 페이드아웃
                $(".character-box").animate({ opacity: 0 }, long, 'easeOutQuad');
                $("#stick-answer").animate({ opacity: 0 }, long, 'easeOutQuad');
                $(".condition").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                    // 조건 변경 후 다시 페이드인
                    $(".condition").html('✅ 배경색은 <span>" #faecb9 "</span> 입니다.');
                    $(".condition").animate({ opacity: 1 }, long, 'easeOutQuad');
                });
                $("#answer").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                    // css코드 페이드인
                    $("#answer").animate({ opacity: 1 }, long, 'easeOutQuad');

                    // 플레이어 입력란 페이드인
                    $("#bgctext").css({ display: 'block' }, long, 'easeOutQuad');
                    $("#bgctext").animate({ opacity: 1 }, long, 'easeOutQuad');
                });

                // 나레이션으로 대사 변경
                $("#line").animate({ opacity: 0 }, long, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerHTML = '<span>background-color은 해당 물체의 배경색을 지정하는 속성입니다.<br><br>RGB, HSV, HEXcode 등으로 지정 가능합니다.</span>';
                    
                    // 페이드인
                    $("#line").animate({ opacity: 1 }, long, 'easeOutQuad');
                });

                $("#h1").animate({ opacity: 0 }, long, 'easeOutQuad', function(){
                    // 나레이션으로 변경 후 페이드인
                    $("#h1").text("나레이션");
                    $("#h1").animate({ opacity: 1 }, long, 'easeOutQuad');
                });
                count++;
                break;

            case 17:
                chating("내 안목은 틀리지 않는구만!");
                count++;
                break;

            case 18:
                chating("이 방에 맞춰서 다른 것도 꾸미러 가자.");
                count++;
                break;

            case 19:
                $("#line").animate({ opacity: 0 }, short, 'easeOutQuad', () => {
                    $("#line").html('<span>(채팅창을 클릭하여 다음으로 넘어갈 수 있습니다.)</span>');
                });
                $("#line").animate({ opacity: 1 }, short, 'easeOutQuad');
                count++;
                break;

            default:
                break;
        }

        // 카운트가 20 이상이라면 채팅창을 클릭했을 때 다음 화면으로
        if (count > 19) {
            $("#line").on("click", function () {
                $(".whitebox").css({ display: 'block' });
                $(".whitebox").animate({ opacity: 1 }, long, 'easeOutQuad', function () { window.location.href = 'css-frame.html'; });
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
