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

// 主页面逻辑

// 导航到指定页面
function navigateTo(page) {
    const pageMap = {
        'everyday': 'src/pages/everyday/everyday.html',
        'quiz': 'src/pages/quiz/quiz.html',
        'praise': 'src/pages/praise/praise.html',
        'toolbox': 'src/pages/toolbox/toolbox.html',
        'mood': 'src/pages/mood/mood.html'
    };
    
    if (pageMap[page]) {
        window.location.href = pageMap[page];
    }
}

// 随机句子库
const subtitles = [
    "温暖你的每一天",
    "让心灵有个栖息的地方",
    "陪伴是最长情的告白",
    "愿你被世界温柔以待",
    "心有所向，行有所达",
    "每一天都是新的开始",
    "做自己的太阳，无需凭借谁的光",
    "生活明朗，万物可爱",
    "保持热爱，奔赴山海",
    "岁月静好，现世安稳"
];

// 显示随机句子
function showRandomSubtitle() {
    const subtitleElement = document.getElementById('randomSubtitle');
    if (subtitleElement) {
        const randomIndex = Math.floor(Math.random() * subtitles.length);
        subtitleElement.textContent = subtitles[randomIndex];
    }
}

// 获取所有心情记录
function getMoods() {
    const moods = localStorage.getItem('moodRecords');
    return moods ? JSON.parse(moods) : [];
}

// 渲染心情日历
function renderMoodCalendar() {
    const calendarEl = document.getElementById('moodCalendar');
    if (!calendarEl) return;
    
    const moods = getMoods();
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    
    // 获取当月第一天和最后一天
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    calendarEl.innerHTML = '';
    
    // 创建当月的所有日期格子
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const mood = moods.find(m => m.date === dateStr);
        
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day-cell';
        dayCell.title = `${dateStr}`;
        
        if (mood) {
            dayCell.style.backgroundColor = mood.color;
            dayCell.title += ` - ${mood.moodName}`;
            dayCell.onclick = () => navigateTo('mood');
        } else {
            dayCell.classList.add('no-mood');
        }
        
        // 标记今天
        if (day === now.getDate()) {
            dayCell.classList.add('today');
        }
        
        calendarEl.appendChild(dayCell);
    }
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', function() {
    showRandomSubtitle();
    renderMoodCalendar();
});
