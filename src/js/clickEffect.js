// 点击特效 - 爱心和星星飘落效果
(function() {
    document.addEventListener('click', function(e) {
        createClickEffect(e.pageX, e.pageY);
    });
    
    function createClickEffect(x, y) {
        const effects = ['heart', 'star', 'circle'];
        const effectType = effects[Math.floor(Math.random() * effects.length)];
        
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createElement(x, y, effectType);
            }, i * 50);
        }
    }
    
    function createElement(x, y, type) {
        const element = document.createElement('div');
        element.className = `click-effect ${type}`;
        
        // 随机偏移
        const offsetX = (Math.random() - 0.5) * 100;
        const offsetY = (Math.random() - 0.5) * 100;
        
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
