window.addEventListener('DOMContentLoaded', function() {
    // frame 클래스를 가진 모든 요소를 선택
    const frames = document.querySelectorAll('.frame');
    frames.forEach(function(frame) {
        frame.style.borderRadius = '50px'; // 원하는 값으로 조절
        frame.style.overflow = 'hidden';   // 내용이 넘치지 않게
    });
});