const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;


$(document).ready(function () {
    // 하얀색 페이드로 화면전환
    $(".whitebox").animate({ opacity: '0%' }, long, 'easeOutQuad', function () {
        $(".whitebox").css({ display: 'none' });
    });

    // 책장, 코드 입력란 등장모션
    $(".bookshelf").animate({ top: '5%' }, superlong);
    setTimeout(() => {
        $(".block").animate({ top: '8%' }, superlong);
        $(".block").animate({ top: '9%' }, short);
    }, 500);

    // 캐릭터 위로 올라오는 애니메이션
    setTimeout(() => {
        $(".character").animate({ top: '21%' }, superlong, 'easeOutQuad');
        $(".character").animate({ top: '22%' }, long, 'easeOutQuad');
    }, 300);

    // 캐릭터 말풍선 올라오는 애니메이션
    setTimeout(() => { $(".overlay").animate({ top: '55%' }, superlong, 'easeOutQuad'); }, 300);

    // 캐릭터 위 아래로 왔다갔다 하는 애니메이션
    const purse = setInterval(function () {
        $(".character").animate({ top: '23%' }, long, 'easeOutQuad');
        const timedpurse = setTimeout(() => {
            $(".character").animate({ top: '22%' }, long, 'easeOutQuad');
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

    // 핑크노트에 마우스를 올리면 커지는 이벤트
    $('.note').on("mouseover", () => {
        $(".note").stop().animate({ width: '17%', height: '16%', top: '84%', left: '60.5%' }, mid, 'easeOutQuad');
    }).on("mouseout", function () {
        $(".note").stop().animate({ width: '16%', height: '15%', top: '85%', left: '61%' }, mid, 'easeOutQuad');
    });

    // 액자에 마우스를 올리면 올라오는 이벤트
    $('.top > .frame1').on("mouseover", function () {
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

    setTimeout(() => { $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad') }, 1000);

    line.addEventListener("click", () => {
        switch (count) {
            case 0:
                character.src = "images/character_happy.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "나는 널 도와줄 빗자루라고 해. 반가워! *^^*";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;
            case 1:
                character.src = "images/character.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "아, 맞다. 우리 지금 뭐 해야 하는지 알지?";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 2:
                character.src = "images/character_scary.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "바로바로...";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 3:
                character.src = "images/character_happy.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "방 정리!";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 4:
                character.src = "images/character_notangry.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "혹시, 정리하는 법은 알고 있어?";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 5:
                character.src = "images/character_scared.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "뭐? 모른다고?";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 6:
                character.src = "images/character_scared.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "얼른 설명해줄테니까, 잘 들어!";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 7:
                character.src = "images/character.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "자, 봐!";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 8: // 코드 입력 블록 왼쪽으로 넘기기
                $(".block").animate({ left: '-38%' }, long, 'easeOutQuad');
                $(".bookshelf").animate({ width: '40%', height: '95%', left: '30%', top: '10%' }, long, 'easeOutQuad');
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "이 책장의 이름은 html이야.";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 9:
                $(".bookshelf").animate({ width: '80%', height: '185%', left: '10%', top: '10%' }, long, 'easeOutQuad');

                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "책장의 가장 윗부분은 header라고도 불려. 여기에는 중요한 것들을 놓아 둘 거야!";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 10:
                $(".bookshelf").animate({ width: '80%', height: '185%', left: '10%', top: '-50%' }, long, 'easeOutQuad');

                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "가운데 부분은 main이라고도 하고, 여러가지 요소가 들어갈 수 있는 공간이야.";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 11:
                $(".bookshelf").animate({ width: '80%', height: '185%', left: '10%', top: '-110%' }, long, 'easeOutQuad');

                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "그리고 가장 밑부분은 footer라고 불려. 여기에는 잘 쓰지 않는 것들을 모아 둘 거야.";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 12:
                $(".bookshelf").animate({ width: '40%', height: '95%', left: '30%', top: '10%' }, long, 'easeOutQuad');

                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "이건 중요하니까, 잘 알고 있어야 해. 알겠지?";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 13:
                character.src = "images/character_notangry.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "음...";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 14:
                character.src = "images/character_happy.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "아! 여기 위쪽에 버튼을 만들어둘게. 그럼 편하게 이동할 수 있겠다!";

                    // 상단 탭 세개 계단식으로 내려오는 애니메이션
                    setTimeout(() => {
                        $(".sidebar > :first-child").animate({ top: '0%' }, 1100, 'easeOutQuad');
                        setTimeout(() => { // 2번째 탭은 0.1초 늦게
                            $(".sidebar > :nth-child(2)").animate({ top: '0%' }, 1100, 'easeOutQuad');
                        }, 100);
                        setTimeout(() => { // 3번째 탭은 0.2초 늦게
                            $(".sidebar > :nth-child(3)").animate({ top: '0%' }, 1100, 'easeOutQuad');
                        }, 200);
                    }, 300);

                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            case 15:
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "먼저, 가장 위쪽 Header를 정리하러 가보자!";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                $('.sidebar> :nth-child(2)').stop().animate({ top: '-70%' }, mid, 'easeOutQuad');
                $('.sidebar> :nth-child(3)').stop().animate({ top: '-70%' }, mid, 'easeOutQuad');
                count++;
                break;

            case 16:
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "(Header탭을 눌러, 다음 페이지로 넘어갈 수 있습니다.)";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            default:
                break;
        }

    }); // 캐릭터 대사 switch문 끝

    // header 클릭시
    $(".sidebar > :first-child").on("click", function () {
        $(".whitebox").css({ display: 'block' });
        $(".whitebox").animate({ opacity: '100%' }, long, 'easeOutQuad', function () { window.location.href = 'layout2.html'; });

    })
})