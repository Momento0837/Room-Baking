// 애니메이션용 상수 선언
const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;

// 도큐먼트가 로딩됐을 때
$(document).ready(function () {

    const condition = document.getElementById("condition");
    const answer = document.getElementById("answer");

    // 하얀색 페이드로 화면전환
    $(".whitebox").animate({ opacity: '0%' }, long, 'easeOutQuad', function () {
        $(".whitebox").css({ display: 'none' });
    });

    $(".bookshelf").animate({ width: '40%', height: '95%', left: '30%', top: '10%' }, long, 'easeOutQuad');

    // Main탭 내려오는 애니메이션. 나머지는 꼬리만 보이게.
    setTimeout(() => {
        $(".sidebar > :first-child").animate({ top: '-70%' }, 1100, 'easeOutQuad');
        setTimeout(() => { // 2번째 탭은 0.1초 늦게
            $(".sidebar > :nth-child(2)").animate({ top: '0%' }, 1100, 'easeOutQuad');
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
    $('.sidebar>.item').on("mouseover", function () {
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
    let count = 0;
    let origintext = line.innerText;

    setTimeout(() => {
        $(".bookshelf").animate({ width: '80%', height: '185%', left: '10%', top: '-60%' }, long, 'easeOutQuad');
    }, 1000); // 책장 확대

    line.addEventListener("click", () => {
        switch (count) {
            case 0:
                character.src = "images/character_notangry.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "어라? 얘 좀 봐.";
                    // 노트 보잉보잉
                    $(".note").stop().animate({ width: '17%', height: '16%', top: '84%', left: '60.5%' }, mid, 'easeOutQuad', () => {
                        $(".note").stop().animate({ width: '16%', height: '15%', top: '85%', left: '61%' }, mid, 'easeOutQuad', () => {
                            $(".note").stop().animate({ width: '17%', height: '16%', top: '84%', left: '60.5%' }, mid, 'easeOutQuad', () => {
                                $(".note").stop().animate({ width: '16%', height: '15%', top: '85%', left: '61%' }, mid, 'easeOutQuad');
                            });
                        });
                    });
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 1:
                chating("어필하는 걸 보니, 엄청 중요한 정보가 담긴 책인가봐!");
                count++;
                break;

            case 2:
                character.src = "images/character.png";
                chating("어차피 이 책도 정리해야 하니까 얼른 열어보자.");
                count++;
                break;

            case 3:
                character.src = "images/character_happy.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerHTML = "중요한 책이면 여기 다시 놓지 뭐! *^^* <br><span>(책을 클릭하여 다음으로 넘어갈 수 있습니다.)</span>";
                    
                    // 노트 불러오기
                    const note = document.getElementById("note");

                    note.addEventListener('click', (event) => {
                        // 캐릭터 아래로 내려가는 모션
                        $(".character-box").animate({ top: '120%' }, long, 'easeOutQuad', () => {
                            $(".main-box").hide();
                        });

                        // 캐릭터 말풍선 내려가는 모션
                        $(".overlay").animate({ top: '120%' }, long, 'easeOutQuad');

                        // 노트 올라가기
                        $(".note").animate({ top: '-50%' }, long, 'easeOutQuad');

                        // 흰 박스 페이드인
                        $(".whitebox").css({ display: 'block' });
                        $(".whitebox").animate({ opacity: '100%' }, long, 'easeOutQuad', function () { window.location.href = 'html-note.html'; });
                    });
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
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