window.addEventListener('DOMContentLoaded', () => {
    const item = document.querySelector('.item');
    if (!item) return;

    // 부모 요소 기준 계산
    const parent = item.parentElement;
    const parentWidth = parent.offsetWidth;
    const itemWidth = item.offsetWidth;

    // monitor 옆까지 이동할 left 값(%)을 지정 (예: 전체의 60% 위치가 monitor 옆이라고 가정)
    const monitorLeftPercent = 30; // 실제 monitor 옆 위치에 맞게 값 조정

    // 현재 left 값이 없으면 0으로 시작
    let leftPercent = parseFloat(getComputedStyle(item).left) || 0;

    item.style.transition = 'left 1.5s';

    function moveRight() {
        if (leftPercent >= monitorLeftPercent) {
            item.style.left = `${monitorLeftPercent}%`;
            return;
        }
        leftPercent += 5;
        if (leftPercent > monitorLeftPercent) leftPercent = monitorLeftPercent;
        item.style.left = `${leftPercent}%`;
        setTimeout(moveRight, 900);
    }

    setTimeout(moveRight, 700);
});