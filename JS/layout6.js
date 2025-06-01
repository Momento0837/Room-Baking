const brush = document.querySelector('.brush');

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
    {x: 7, y: 3 },
    { x: 0, y: 4 }
];

// 브러시를 해당 좌표로 이동시키는 함수
function moveBrushByPath(path) {
    let step = 0;
    brush.style.transition = 'left 0.5s, top 0.5s';

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

// 페이지가 로드된 후 브러시 이동 시작
window.addEventListener('DOMContentLoaded', () => {
    // 시작 좌표로 먼저 이동
    const { left, top } = gridToPercent(path[0].x, path[0].y);
    brush.style.left = `${left}%`;
    brush.style.top = `${top}%`;
    setTimeout(() => moveBrushByPath(path), 500); // 0.5초 후 이동 시작
});