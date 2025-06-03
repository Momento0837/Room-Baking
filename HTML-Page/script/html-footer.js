// 애니메이션용 상수 선언
const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;

// 정답 상수 선언
const h2answer = "교과서와 공책";
const h3answer = "잡동사니";

// 정답을 입력하고 엔터를 눌렀을 때
document.addEventListener('keydown', (event) => {
    const imgtext = document.getElementById('imgtext');
    if (document.activeElement !== imgtext) return; // input창에 커서 안 두고 있으면 진행 x

    const useranswer = imgtext.value; // input에서 받은 값을 상수에 저장

    if(event.key === 'Enter' && useranswer === h2answer){ // 1번 정답과 같다면
        const h2 = document.getElementById("h2");
        h2.innerText = "교과서와 공책";

        // 이름표 붙이기
        $("#h2").animate({ top: '67%' }, long, 'easeOutQuad');

        // 다음 화면으로 전환
        $(".bookshelf").animate({ left: '10%' }, superlong);
        $("#imgtext").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
            $("#imgtext").val(""); // 사용자 입력값 초기화
            console.log($("#imgtext").val());
            $("#imgtext").animate({ opacity: 1 }, long, 'easeOutQuad');
        });

        // 문제 변경
        $("#condition").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
            condition.innerHTML = '🌼 <span>&lt;hn&gt;</span> 태그는 <span>&lt;hn&gt; (내용) &lt;/hn&gt;</span> 형태로 작성합니다. <br><span>&lt;h1&gt;</span> 부터 <span>&lt;h6&gt;</span> 까지, 중요한 것부터 써내려가는게 좋습니다. <br><br>✅ 이름표에 들어갈 내용은 <span>" 잡동사니 "</span> 입니다.';
            answer.innerHTML = '<br><br><br><br><br>&lt;div class="box" id="yellow"&gt;<br><br>     &lt;h3&gt;                                    &lt;/h3&gt;<br><br>&lt;/div&gt;<br><br></br>';
        });
        $("#answer").animate({ opacity: 0 }, long, 'easeOutQuad');

        $("#stick-answer").animate({ opacity: 1 }, long, 'easeOutQuad');
        $("#condition").animate({ opacity: 1 }, long, 'easeOutQuad');
        $("#answer").animate({ opacity: 1 }, long, 'easeOutQuad');
    }

    if(event.key === 'Enter' && useranswer === h3answer){ // 2번 정답과 같다면
        const h3 = document.getElementById("h3");
        h3.innerText = "잡동사니";

        // 이름표 붙이기
        $("#h3").animate({ top: '68.4%' }, long, 'easeOutQuad');
        
        // 캐릭터 위로 올라가는 모션
        $(".main-box").show();
        $(".character-box").stop().animate({top: '17%'}, long, 'easeOutQuad');
        $(".character-box").animate({top: '18%'}, long, 'easeOutQuad');

        // 캐릭터 말풍선 올라가는 모션
        $(".overlay").animate({top: '70%'}, long, 'easeOutQuad');

        // 캐릭터 대사
        line.innerText = "";
        line.innerText = "좋아, 잘했어!";

    }
});

// 도큐먼트가 로딩됐을 때
$(document).ready(function () {

    const condition = document.getElementById("condition");
    const answer = document.getElementById("answer");

    // 하얀색 페이드로 화면전환
    $(".whitebox").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
        $(".whitebox").css({ display: 'none' });
    });

    $(".bookshelf").animate({ width: '40%', height: '95%', left: '30%', top: '10%' }, long, 'easeOutQuad');

    // Footer탭 내려오는 애니메이션. 나머지는 꼬리만 보이게.
    setTimeout(() => {
        $(".sidebar > :first-child").animate({ top: '-70%' }, 1100, 'easeOutQuad');
        setTimeout(() => { // 2번째 탭은 0.1초 늦게
            $(".sidebar > :nth-child(2)").animate({ top: '-70%' }, 1100, 'easeOutQuad');
        }, 100);
        setTimeout(() => { // 3번째 탭은 0.2초 늦게
            $(".sidebar > :nth-child(3)").animate({ top: '0%' }, 1100, 'easeOutQuad');
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
        $(".bookshelf").animate({ width: '80%', height: '185%', left: '10%', top: '-110%' }, long, 'easeOutQuad');
    }, 1000); // 책장 확대

    line.addEventListener("click", () => {
        switch (count) {
            case 0:
                character.src = "images/character_happy.png";
                chating("이름표만 붙이면 돼서 쉽게 끝날 거야.");
                count++;
                break;

            case 1:
                character.src = "images/character.png";
                chating("여기서는 숫자가 작을수록 이름표가 커져!");

                // 전체적 비율 조정
                $(".bookshelf").animate({ left: '50%' }, superlong);
                $(".block").animate({ left: '7%' }, superlong);
                $(".overlay").animate({ left: '55%', top: '70%', width: '40%', height: '25%' }, superlong);
                $("#line").animate({ top: '40%' }, long);
                $(".character-box").animate({ top: '18%', left: '80%' }, superlong);
                $(".nametag").css({ display: 'block' });
                $("#h1").animate({ top: '0%' }, superlong);
                setTimeout(() => {
                    $("#h2").animate({ top: '5%' }, superlong);
                }, 100);
                setTimeout(() => {
                    $("#h3").animate({ top: '10%' }, superlong);
                }, 200);

                count++;
                break;

            case 2:
                character.src = "images/character.png";
                $("#line").animate({ opacity: 0 }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "여기에 이름을 적고 엔터를 누르면...";

                    // #stick-answer 불러오기
                    const stick_answer = document.getElementById("stick-answer");
                    const example = "사진첩";

                    // example에 있는 단어를 #stick-answer 안에 한 글자씩 출력
                    setTimeout(() => {
                        for (let i = 0; i < example.length; i++) {
                            setTimeout(() => {
                                stick_answer.innerText += example.charAt(i);
                            }, i * 200);
                        }
                    }, 500);
                });
                $("#line").animate({ opacity: 1 }, short, 'easeOutQuad');

                count++;
                break;

            case 3:
                character.src = "images/character_happy.png";
                $("#line").animate({ opacity: 0 }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "짜잔~ 이름표 완성!";

                    // 이름표 붙이기
                    const h1 = document.getElementById("h1");
                    h1.innerText = "사진첩";
                    $("#h1").animate({ top: '65%' }, long, 'easeOutQuad');
                });
                $("#line").animate({ opacity: 1 }, short, 'easeOutQuad');
                count++;
                break;

            case 4:
                character.src = "images/character.png";
                chating("엄청 중요한거니까, 가장 큰 걸로 적어봤어.");
                count++;
                break;

            case 5:
                character.src = "images/character_happy.png";
                chating("너도 적어봐! 생각보다 재밌는걸?");
                count++;
                break;

            case 6:
                // 캐릭터 아래로 내려가는 모션
                $(".character-box").animate({ top: '120%' }, superlong, 'easeOutQuad', () => {
                    $(".main-box").hide();
                });

                // 캐릭터 말풍선 내려가는 모션
                $(".overlay").animate({ top: '120%' }, superlong, 'easeOutQuad');

                $("#stick-answer").animate({ opacity: 0 }, long, 'easeOutQuad', function () {
                    $(this).css({ display: 'none' });
                });

                // 책장을 왼쪽으로 넘기기
                $(".bookshelf").animate({ left: '30%' }, superlong);

                // 문제 변경
                $("#condition").animate({ opacity: 0 }, long, 'easeOutQuad', function () {

                    condition.innerHTML = '🌼 <span>&lt;hn&gt;</span> 태그는 <span>&lt;hn&gt; (내용) &lt;/hn&gt;</span> 형태로 작성합니다. <br><span>&lt;h1&gt;</span> 부터 <span>&lt;h6&gt;</span> 까지, 중요한 것부터 써내려가는게 좋습니다. <br><br>✅ 이름표에 들어갈 내용은 <span>" 교과서와 공책 "</span> 입니다.';
                    answer.innerHTML = '<br><br><br><br><br>&lt;div class="box" id="blue"&gt;<br><br>     &lt;h2&gt;                                    &lt;/h2&gt;<br><br>&lt;/div&gt;<br><br></br>';

                    $("#imgtext").css({ display: 'block' });
                    $("#imgtext").animate({ opacity: 1 }, long, 'easeOutQuad');
                });
                $("#answer").animate({ opacity: 0 }, long, 'easeOutQuad');

                $("#stick-answer").animate({ opacity: 1 }, long, 'easeOutQuad');
                $("#condition").animate({ opacity: 1 }, long, 'easeOutQuad');
                $("#answer").animate({ opacity: 1 }, long, 'easeOutQuad');

                count++;
                break;

            case 7: // 정답 입력 후
                character.src = "images/character_happy.png";
                chating("역시 이름표도 크기를 두니까 구별하기 편하지?");
                count++;
                break;

            case 8:
                character.src = "images/character_notangry.png";
                chating("... 뭐? 별 상관 없는 것 같다고?");
                count++;
                break;

            case 9:
                character.src = "images/character_scared.png";
                chating("그래도 꼭 이렇게 써야해! 안그러면 헷갈리잖아~");
                count++;
                break;

            case 10:
                character.src = "images/character_happy.png";
                chating("이제 우리 다른 방 정리하러 가자. 얼른~!");
                count++;
                break;

            case 11:
                $("#line").animate({ opacity: 0 }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerHTML = "<span>(캐릭터를 클릭하면 메인화면으로 이동할 수 있습니다.)</span>";
                });
                $("#line").animate({ opacity: 1 }, short, 'easeOutQuad');
                count++;
                break;

            default:
                break;
        }

        // 카운트가 11 이상일 때 캐릭터를 클릭하면 메인화면으로
        if(count > 10){
            $(".character-box").on("click", function () {
                $(".whitebox").css({ display: 'block' });
                $(".whitebox").animate({ opacity: 1 }, long, 'easeOutQuad', function () { window.location.href = '../index.html'; });
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