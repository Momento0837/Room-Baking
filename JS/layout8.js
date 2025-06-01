const marker = document.querySelector('.marker');

// 가로 16, 세로 9 그리드 기준 좌표를 %로 변환하는 함수
function gridToPercent(x, y) {
    // left: 0~100%, top: 0~100% 기준 (여유 공간 고려해 5~85%, 10~65%로 보정)
    const left = (x / 15) * 80 + 5; // 0~15 -> 5%~85%
    const top = (y / 8) * 55 + 10;  // 0~8  -> 10%~65%
    return { left, top };
}

// 이동할 좌표 배열 (예시: 5,4 → 7,3 → 9,6 → 11,2 → 13,1)
const path = [
    { x: 0, y: 8 },
    { x: 1, y: 2 },
    { x: 13, y: 2 },
    { x: 1, y: 8 },
    { x: 13, y: 8 },
    { x: 0, y: 8 }
];

// 마커를 해당 좌표로 이동시키는 함수
function moveMarkerByPath(path) {
    let step = 0;
    marker.style.transition = 'left 1.5s, top 1.5s'; // 더 느리게(1.5초)

    function moveNext() {
        if (step >= path.length) return;
        const { left, top } = gridToPercent(path[step].x, path[step].y);
        marker.style.left = `${left}%`;
        marker.style.top = `${top}%`;
        step++;
        if (step < path.length) {
            setTimeout(moveNext, 1600); // 1.6초마다 다음 좌표로 이동 (더 느리게)
        }
    }
    moveNext();
}

// 페이지가 로드된 후 마커 이동 시작
window.addEventListener('DOMContentLoaded', () => {
    // 시작 좌표로 먼저 이동
    const { left, top } = gridToPercent(path[0].x, path[0].y);
    marker.style.left = `${left}%`;
    marker.style.top = `${top}%`;
    setTimeout(() => moveMarkerByPath(path), 800); // 0.8초 후 이동 시작 (더 느리게)
});