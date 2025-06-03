const marker = document.querySelector('.marker');
const calender = document.getElementById("calender");
const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;
var marker_color = null;

const blackanswer = "#000";
const blueanswer = "#0000ff";
const redanswer = "#ff0000";

document.addEventListener('keydown', (event) => {
    const colortext = document.getElementById('colortext');

    if (document.activeElement !== colortext) return;

    const useranswer = colortext.value;


    if (event.key === 'Enter' && useranswer === blackanswer || useranswer === blueanswer || useranswer === redanswer) {
        if (useranswer === blackanswer) {
            $("#black").animate({ top: '45%' }, long, 'easeOutQuad');
            $("#blue").animate({ top: '100%' }, long, 'easeOutQuad');
            $("#red").animate({ top: '100%' }, long, 'easeOutQuad');


            calender.src = "images/calender.png";
            marker_color = "#black";
        } else if (useranswer === blueanswer) {
            $("#blue").animate({ top: '45%' }, long, 'easeOutQuad');
            $("#black").animate({ top: '100%' }, long, 'easeOutQuad');
            $("#red").animate({ top: '100%' }, long, 'easeOutQuad');

            calender.src = "images/bluecalender.png";
            marker_color = "#blue";
        } else if (useranswer === redanswer) {
            $("#red").animate({ top: '45%' }, long, 'easeOutQuad');
            $("#blue").animate({ top: '100%' }, long, 'easeOutQuad');
            $("#black").animate({ top: '100%' }, long, 'easeOutQuad');

            calender.src = "images/redcalender.png";
            marker_color = "#red";
        }

        $(".overlay > h1").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
            $("#h1").text("빗자루");
            $(".overlay > h1").animate({ opacity: 1 }, long, 'easeOutQuad');

            $(".character-box").animate({ opacity: 1 }, long, 'easeOutQuad');
        });

        $("#line").animate({ opacity: 0 }, long, 'easeOutQuad', () => {
            line.innerText = "";
            line.innerText = "어때~ 어떤 색 골랐어?";
        });
        $("#line").animate({ opacity: 1 }, long, 'easeOutQuad');
    }
});

// 페이지가 로드된 후
window.addEventListener('DOMContentLoaded', () => {
    $(".whitebox").animate({ opacity: '0%' }, long, 'easeOutQuad', function () {
        $(".whitebox").css({ display: 'none' });
    });

    $(".overlay").animate({ left: '61%', width: '36%' }, long, 'easeOutQuad', function () {
        $(".overlay").animate({ left: '60%', width: '37%' }, long, 'easeOutQuad');
    });
    $(".block").animate({ left: '61%', width: '36%' }, long, 'easeOutQuad', function () {
        $(".block").animate({ left: '60%', width: '37%' }, long, 'easeOutQuad');
    });
    $(".whiteboard").animate({ top: '27%', width: '51%' }, long, 'easeOutQuad', function () {
        $(".whiteboard").animate({ top: '27%', width: '50%' }, long, 'easeOutQuad');
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

    // 마카에 마우스 올리면 올라가는 애니메이션
    $('.main>.marker').on("mouseover.markerHover", function () {
        $(this).stop().animate({ top: '90%' }, mid, 'easeOutQuad');
    }).on("mouseout.markerHover", function () {
        $(this).stop().animate({ top: '93%' }, mid, 'easeOutQuad');
    });

    // 캐릭터 대사
    const character = document.getElementById("character");
    const line = document.getElementById("line");
    const bubble = document.getElementById("chat");
    const stick = document.getElementById("h1");
    let count = 0;

    line.addEventListener("click", () => {
        switch (count) {
            case 0:
                character.src = "images/character_happy.png";
                chating("되게 낭만 있다~");
                count++;
                break;

            case 1:
                character.src = "images/character.png";
                chating("심지어 달력도 그려져 있네?");
                count++;
                break;

            case 2:
                character.src = "images/character_smile.png";
                chating("만년달력이라 귀찮긴 하지만...");
                count++;
                break;

            case 3:
                $('.main>.marker').off(".markerHover"); // 마우스 호버 이벤트 제거
                chating("그래도 일단 월이라도 써볼까?");
                count++;
                break;

            case 4:
                character.src = "images/character.png";
                chating("어디보자, 색깔은...");
                $("#black").animate({ top: '65%', left: '20%' }, long, 'easeOutQuad');
                $("#red").animate({ top: '65%', left: '26%' }, long, 'easeOutQuad');
                $("#blue").animate({ top: '65%', left: '32%' }, long, 'easeOutQuad');

                // 마카에 마우스 올리면 올라가는 애니메이션
                if (count === 4) {
                    $('.main>.marker').on("mouseover.markerHover", function () {
                        $(this).stop().animate({ top: '64%' }, mid, 'easeOutQuad');
                    }).on("mouseout.markerHover", function () {
                        $(this).stop().animate({ top: '65%' }, mid, 'easeOutQuad');
                    });
                }

                count++;
                break;

            case 5:
                $('.main>.marker').off(".markerHover"); // 마우스 호버 이벤트 제거
                character.src = "images/character_happy.png";
                chating("예쁜 파란색으로~");
                $("#blue").animate({ top: '45%' }, long, 'easeOutQuad');
                $("#black").animate({ top: '100%' }, long, 'easeOutQuad');
                $("#red").animate({ top: '100%' }, long, 'easeOutQuad');
                count++;
                break;

            case 6:
                character.src = "images/character_notangry.png";
                chating("...뭐? 색상이 맘에 안 든다고?");
                count++;
                break;

            case 7:
                chating("그럼 마음에 드는 색 골라봐!");
                count++;
                break;

            case 8:
                $(".character-box").animate({ opacity: 0 }, long, 'easeOutQuad');
                $("#stick-answer").animate({ opacity: 0 }, long, 'easeOutQuad');
                $(".condition").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                    $(".condition").html('✅ 검정: <span>#000</span>, 파랑: <span>#0000ff</span>, 빨강: <span>#ff0000</span>');
                    $(".condition").animate({ opacity: 1 }, long, 'easeOutQuad');
                });
                $("#answer").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                    $(".answer").html('<span>.whiteboard </span>{<br><br>      color:                            ;<br><br>}');
                    $("#answer").animate({ opacity: 1 }, long, 'easeOutQuad');
                });
                $(".overlay > h1").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                    $("#h1").text("나레이션");
                    $(".overlay > h1").animate({ opacity: 1 }, long, 'easeOutQuad');

                    $("#colortext").css({ display: 'block' }, long, 'easeOutQuad');
                    $("#colortext").animate({ opacity: 1 }, long, 'easeOutQuad');
                });

                $("#black").animate({ top: '65%' }, long, 'easeOutQuad');
                $("#red").animate({ top: '65%' }, long, 'easeOutQuad');
                $("#blue").animate({ top: '65%' }, long, 'easeOutQuad');

                // 마카에 마우스 올리면 올라가는 애니메이션
                if (count === 8) {
                    $('.main>.marker').on("mouseover.markerHover", function () {
                        $(this).stop().animate({ top: '64%' }, mid, 'easeOutQuad');
                    }).on("mouseout.markerHover", function () {
                        $(this).stop().animate({ top: '65%' }, mid, 'easeOutQuad');
                    });
                }

                $("#line").animate({ opacity: 0 }, long, 'easeOutQuad', () => {
                    character.src = "images/character_happy.png";
                    line.innerText = "";
                    line.innerHTML = '<span>color는 텍스트의 색상을 변경할 수 있는 속성입니다.<br><br>RGB, HSV, HEXcode 등으로 지정 가능합니다.</span>';
                });
                $("#line").animate({ opacity: 1 }, long, 'easeOutQuad');
                count++;
                break;

            case 9:
                $('.main>.marker').off(".markerHover"); // 마우스 호버 이벤트 제거
                character.src = "images/character.png";
                chating("오, 잘 골랐네!");
                count++;
                break;

            case 10:
                character.src = "images/character_happy.png";
                chating("그럼 얼른 적어보자!");
                count++;
                break;

            case 11:
                console.log(marker_color);
                $(marker_color).animate({ width: '2.5%', height: '22%' }, short, 'easeOutQuad', () => {
                    $(marker_color).animate({ width: '2%', height: '20%' }, short, 'easeOutQuad', () => {
                        $(marker_color).animate({ width: '2.5%', height: '22%' }, short, 'easeOutQuad', () => {
                            $(marker_color).animate({ width: '2%', height: '20%' }, short, 'easeOutQuad');
                        });
                    });
                });
                count++;
                break;

            case 12:
                character.src = "images/character_happy.png";
                chating("덕분에 일정 정리하기 편하겠다.");
                count++;
                break;

            case 13:
                character.src = "images/character.png";
                chating("아, 그러고 보니...");
                count++;
                break;

            case 14:
                chating("color 속성은 잘 이해 돼?");
                count++;
                break;

            case 15:
                character.src = "images/character_happy.png";
                chating("생각보다 간단하지? *^^*");
                count++;
                break;

            case 16:
                character.src = "images/character.png";
                chating("이제 마지막이야.");
                count++;
                break;

            case 17:
                character.src = "images/character_smile.png";
                chating("얼마 안남았다, 화이팅!");
                count++;
                break;

            case 18:
                $(".character-box").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                    $(".character-box").css({ display: 'none' });
                });
                $(".overlay > h1").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                    $("#h1").text("나레이션");
                    $(".overlay > h1").animate({ opacity: 1 }, long, 'easeOutQuad');
                });
                $("#line").animate({ opacity: 0 }, long, 'easeOutQuad', () => {
                    $("#line").html('<span>(채팅창을 클릭하여 다음으로 넘어갈 수 있습니다.)</span>');
                });
                $("#line").animate({ opacity: 1 }, long, 'easeOutQuad');
                count++;
                break;

            default:
                break;
        }

        $(marker_color).off("click").on("click", function () { // 이벤트 중복 방지
            $(marker_color).css({ transform: "rotate(15deg)" });
            $(marker_color).animate({ left: '25%', top: '35%' }, mid, 'easeOutQuad');
            $(marker_color).animate({ left: '30%', top: '35%' }, long, 'easeOutQuad', function () {
                $(marker_color).animate({ top: '75%', left: '2%' }, superlong, 'easeOutQuad');
            });
            setTimeout(function () {
                $(".calender").animate({ opacity: 1 }, superlong, 'easeOutQuad');
            }, 500);


            setTimeout(function () {
                character.src = "images/character.png";
                chating("어때? 마음에 들어?");
            }, 3300);
        });

        if (count > 18) {
            $("#line").on("click", function () {
                $(".whitebox").css({ display: 'block' });
                $(".whitebox").animate({ opacity: 1 }, long, 'easeOutQuad', function () { window.location.href = 'monitor.html'; });
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
