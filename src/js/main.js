// 点击特效CSS样式
const clickEffectStyle = document.createElement('style');
clickEffectStyle.textContent = `
    .click-effect {
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        animation: float-up 1s ease-out forwards;
    }
    
    .click-effect.heart::before {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        background: #FF6B9D;
        transform: rotate(45deg);
        border-radius: 3px;
    }
    
    .click-effect.heart::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background: #FF6B9D;
        border-radius: 50%;
        top: -10px;
        left: 0;
    }
    
    .click-effect.star {
        width: 20px;
        height: 20px;
        background: #FFD700;
        clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    }
    
    .click-effect.circle {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    @keyframes float-up {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--offset-x), var(--offset-y)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(clickEffectStyle);

// 页面导航功能
function navigateTo(page) {
    const pages = {
        'everyday': './src/pages/everyday/everyday.html',
        'quiz': './src/pages/quiz/quiz.html',
        'praise': './src/pages/praise/praise.html',
        'toolbox': './src/pages/toolbox/toolbox.html'
    };
    
    if (pages[page]) {
        window.location.href = pages[page];
    }
}
