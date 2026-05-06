// 每日一句功能 - 按日期固定显示

// 句子库 - 方便后续拓展
const quotes = [
    "生活不是等待暴风雨过去，而是学会在雨中跳舞。",
    "每一个不曾起舞的日子，都是对生命的辜负。",
    "温柔要有，但不是妥协；我们要在安静中，不慌不忙地刚强。",
    "愿你眼中总有光，活成想要的模样。",
    "世界很喧嚣，做你自己就好。",
    "慢慢来，谁还没有一个努力的过程。",
    "你不需要很厉害才能开始，但你需要开始才能变得很厉害。",
    "今天的你，比昨天更优秀。",
    "保持热爱，奔赴山海。",
    "星光不问赶路人，时光不负有心人。",
    "所有的美好都值得等待。",
    "心若向阳，无畏悲伤。",
    "人生没有白走的路，每一步都算数。",
    "做自己的太阳，无需凭借谁的光。",
    "生活明朗，万物可爱。"
];

// 根据日期获取固定的句子
function getDailyQuote() {
    const now = new Date();
    // 使用年月日生成一个唯一的数字
    const dateNum = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    // 用这个数字作为索引，确保同一天显示同一句话
    const index = dateNum % quotes.length;
    return quotes[index];
}

// 显示当前日期
function showDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekDay = weekDays[now.getDay()];
    
    const dateStr = `${year}年${month}月${day}日 ${weekDay}`;
    document.getElementById('currentDate').textContent = dateStr;
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
    showDate();
    document.getElementById('quoteContent').textContent = getDailyQuote();
});
