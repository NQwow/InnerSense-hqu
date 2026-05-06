// 夸夸卡功能

// 夸夸句子库 - 方便后续拓展
const praises = [
    "你真的很棒，今天的你也闪闪发光！",
    "无论遇到什么困难，你都有能力克服！",
    "你的存在本身就是一种美好，请继续做自己！",
    "你已经做得很好了，给自己一个拥抱吧！",
    "相信自己的潜力，你比想象中更强大！",
    "每一个努力的你，都值得被温柔以待！",
    "你的笑容是世界上最美的风景！",
    "坚持下来的你，真的超级厉害！",
    "不要怀疑自己，你拥有无限可能！",
    "今天的你，又进步了一点点！"
];

// 随机显示一句夸夸
function showRandomPraise() {
    const randomIndex = Math.floor(Math.random() * praises.length);
    document.getElementById('praiseContent').textContent = praises[randomIndex];
}

// 刷新夸夸
function refreshPraise() {
    showRandomPraise();
}

// 返回首页
function goBack() {
    // 使用绝对路径，从根目录开始
    const path = window.location.pathname;
    // 获取根目录路径
    const rootPath = path.substring(0, path.indexOf('/src/'));
    window.location.href = rootPath + '/index.html';
}

// 从父页面继承主题设置
function inheritTheme() {
    const parentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', parentTheme);
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', function() {
    inheritTheme();
    showRandomPraise();
});
