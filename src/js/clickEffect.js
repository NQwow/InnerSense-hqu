// 点击特效 - 爱心和星星飘落效果
(function() {
    document.addEventListener('click', function(e) {
        // 使用 clientX/clientY 获取相对于视口的位置
        createClickEffect(e.clientX, e.clientY);
    });
    
    function createClickEffect(x, y) {
        const emojis = ['❤️', '⭐', '✨'];
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createElement(x, y, emoji);
            }, i * 50);
        }
    }
    
    function createElement(x, y, emoji) {
        const element = document.createElement('div');
        element.className = 'click-effect';
        element.textContent = emoji;
        
        // 随机偏移范围缩小，避免乱飞
        const offsetX = (Math.random() - 0.5) * 60;
        const offsetY = (Math.random() - 0.5) * 60;
        
        // 使用 fixed 定位，基于视口坐标
        element.style.left = x + 'px';
        element.style.top = y + 'px';
        element.style.setProperty('--offset-x', offsetX + 'px');
        element.style.setProperty('--offset-y', offsetY + 'px');
        
        document.body.appendChild(element);
        
        // 动画结束后移除元素
        setTimeout(() => {
            element.remove();
        }, 1000);
    }
})();
