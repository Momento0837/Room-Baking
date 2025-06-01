const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;


$(document).ready(function(){

    
    // 캐릭터 위로 올라오는 애니메이션
    setTimeout(() => {
        $(".character-box").animate({ top: '27%' }, superlong, 'easeOutQuad');
        $(".character-box").animate({ top: '28%' }, long, 'easeOutQuad');
    }, 300);
    
    // 캐릭터 말풍선 올라오는 애니메이션
    setTimeout(() => { $(".overlay").animate({ top: '55%' }, superlong, 'easeOutQuad'); }, 300);

    // 캐릭터 위 아래로 왔다갔다 하는 애니메이션
    $("#character").animate({top: '-1%'}, long, 'easeOutQuad');
    setTimeout(() => {
        $("#character").animate({top: '0%'}, long, 'easeOutQuad');
    }, 1500); // 딜레이 삭제
    
    setInterval(function(){
        $("#character").animate({top: '-1%'}, long, 'easeOutQuad');
        setTimeout(() => {
            $("#character").animate({top: '0%'}, long, 'easeOutQuad');
        }, 1500);
    }, 3000);

    // 상단탭 세개에 마우스를 올리면 커지는 이벤트
    $('.sidebar>.item').on("mouseover", function() {
        $(this).stop().animate({ width: '29%', height: '102%' }, mid, 'easeOutQuad');
    }).on("mouseout", function() {
        $(this).stop().animate({ width: '28%', height: '100%' }, mid, 'easeOutQuad');
    });

    // 상자에 마우스를 올리면 커지는 이벤트
    $('.bottom>.item').on("mouseover", () => {
        $(".bottom").stop().animate({ gap: '1%', width: '85%', height: '30%', top: '67%', left: '7.5%' }, mid, 'easeOutQuad');
    }).on("mouseout", function() {
        $(".bottom").stop().animate({ gap: '1.7%', width: '84%', height: '29%', top: '68%', left: '8%' }, mid, 'easeOutQuad');
    });

    // 노트에 마우스를 올리면 커지는 이벤트
    $('.note').on("mouseover", () => {
        $(".note").stop().animate({ width: '17%', height: '16%', top: '84%', left: '60.5%' }, mid, 'easeOutQuad');
    }).on("mouseout", function() {
        $(".note").stop().animate({ width: '16%', height: '15%', top: '85%', left: '61%' }, mid, 'easeOutQuad');
    });

    // 액자에 마우스를 올리면 올라오는 이벤트
    $('.top > div').on("mouseover", function() {
        $(this).stop().animate({ top: '-10%' }, short, 'easeOutQuad');
    }).on("mouseout", function() {
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
                character.src = "images/character_notangry.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "... a 태그에 관한 내용이었다고?";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;
                
            case 1:
                character.src = "images/character_happy.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "엄청 중요한 정보잖아! 다시 여기 두자.";
                    $("#note").animate({ top: '85%' });
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;
                
            case 2:
                character.src = "images/character.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "그리고 우리 정말 반이나 왔어.";
                });
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;
                
            case 3:
                character.src = "images/character_happy.png";
                $("#line").animate({ opacity: '0%' }, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerHTML = "조금만 더 힘내서 정리 끝내보자! <br><span>(상단의 Footer탭을 통해 다음으로 이동할 수 있습니다.)</span>";
                });
                $('.sidebar> :nth-child(3)').stop().animate({ top: '0%' }, mid, 'easeOutQuad');
                $('.sidebar> :nth-child(2)').stop().animate({ top: '-70%' }, mid, 'easeOutQuad');
                $("#line").animate({ opacity: '100%' }, short, 'easeOutQuad');
                count++;
                break;

            default:
                break;
        }
    });

    // footer 클릭시
    $(".sidebar > :nth-child(3)").on("click", function () {
        $(".whitebox").css({ display: 'block', opacity: '0%' });
        $(".whitebox").animate({ opacity: '100%' }, long, 'easeOutQuad', function () { window.location.href = 'layout2-3.html'; });
    })
});
