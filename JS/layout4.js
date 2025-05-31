const superlong = 2000;
const long = 1300;
const mid = 600;
const short = 300;


$(document).ready(function(){
    // 하얀색 페이드로 화면전환
    $(".whitebox").animate({opacity: '0%'}, long, 'easeOutQuad', function(){
        $(".whitebox").css({display: 'none'});
    });

    // 책장, 코드 입력란 등장모션
    $(".bookshelf").animate({top: '5%'}, superlong);
    setTimeout(() => {
        $(".block").animate({top: '9%'}, superlong);
        $(".block").animate({top: '10%'}, short);
    }, 500);
    

    // 상단 탭 세개 계단식으로 내려오는 애니메이션
    setTimeout(() => {
        $(".sidebar > :first-child").animate({top: '0%'}, 1100,'easeOutQuad');
        setTimeout(() => { // 2번째 탭은 0.1초 늦게
            $(".sidebar > :nth-child(2)").animate({top: '0%'}, 1100,'easeOutQuad');
        }, 100);
        setTimeout(() => { // 3번째 탭은 0.2초 늦게
            $(".sidebar > :nth-child(3)").animate({top: '0%'}, 1100,'easeOutQuad');
        }, 200);
    }, 300);

    // 캐릭터 위로 올라오는 애니메이션
    setTimeout(() => {
        $(".character").animate({top: '21%'}, superlong, 'easeOutQuad');
        $(".character").animate({top: '22%'}, long, 'easeOutQuad');
    }, 300);
    
    // 캐릭터 위 아래로 왔다갔다 하는 애니메이션
    const purse = setInterval(function(){
        $(".character").animate({top: '23%'}, long, 'easeOutQuad');
        const timedpurse = setTimeout(() => {
            $(".character").animate({top: '22%'}, long, 'easeOutQuad');
        }, 1500);
    }, 3000);

    // 캐릭터 말풍선 올라오는 애니메이션
    setTimeout(() => {$(".overlay").animate({top: '55%'}, superlong, 'easeOutQuad');}, 300);
    
    

    // 상단탭 세개에 마우스를 올리면 커지는 이벤트
    $('.sidebar>.item').on("mouseover", () => {
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

    // 핑크노트에 마우스를 올리면 커지는 이벤트
    $('.pinknote').on("mouseover", () => {
        $(".pinknote").stop().animate({ width: '14%', height: '4.5%', top: '55.2%', left: '58.5%' }, mid, 'easeOutQuad');
    }).on("mouseout", function() {
        $(".pinknote").stop().animate({ width: '13%', height: '4%', top: '55.8%', left: '59%' }, mid, 'easeOutQuad');
    });

    // 액자에 마우스를 올리면 올라오는 이벤트
    $('.top > .frame1').on("mouseover", function() {
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

    setTimeout(() => { $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad')}, 1000);

    line.addEventListener("click", () => {
        switch(count){
            case 0:
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    character.src = "images/character_happy.png";
                    line.innerText = "";
                    line.innerText = "나는 널 도와줄 빗자루라고 해. 반가워! *^^*";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;
            case 1:
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    character.src = "images/character.png";
                    line.innerText = "";
                    line.innerText = "아, 맞다. 우리 지금 뭐 해야 하는지 알지?";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            case 2:
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    character.src = "images/character_scary.png";
                    line.innerText = "";
                    line.innerText = "바로바로...";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            case 3:
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    line.innerText = "";
                    line.innerText = "맞아.";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;

            case 4:
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    character.src = "images/character_scared.png";
                    line.innerText = "";
                    line.innerText = "... 어머니에게 혼나지 않으려면 얼른 방 정리를 해야 해!";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;
                
            case 5:
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    character.src = "images/character_notangry.png";
                    line.innerText = "";
                    line.innerText = "뭐? 그 뿐이냐고?";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;
                
            case 6:
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    character.src = "images/character_scared.png";
                    line.innerText = "";
                    line.innerText = "뭐래~ 너는 무섭지도 않아?";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;
                
            case 7:
                $("#line").animate({ opacity: '0%'}, short, 'easeOutQuad', () => {
                    character.src = "images/character_notscary.png";
                    line.innerText = "";
                    line.innerText = "아무튼, 얼른 정리하러 가자!";
                });
                $("#line").animate({ opacity: '100%'}, short, 'easeOutQuad');
                count++;
                break;
                
            default:
                // 캐릭터 아래로 내려가는 모션
                $(".character").stop().animate({top: '21%'}, short, 'easeOutQuad');
                $(".character").stop().animate({top: '120%'}, long, 'easeOutQuad', () => {
                    clearInterval(purse);

                    $(".main-box").hide();
                });

                // 캐릭터 말풍선 내려가는 모션
                $(".overlay").animate({top: '120%'}, long, 'easeOutQuad');
                
                break;
        }
    });
})