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
    "生活明朗，万物可爱。",
    "徐行散腰膂，小憩啬精神。",
    "世上偷闲始得闲，我生长在不忙间。",
    "健忘闲何害？贪眠老正宜。",
    "莫听穿林打叶声，何妨吟啸且徐行。",
    "竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。",
    "回首向来萧瑟处，归去，也无风雨也无晴。",
    "人生到处知何似，应似飞鸿踏雪泥。",
    "泥上偶然留指爪，鸿飞那复计东西。",
    "人生须广大，勿作井中蛙。",
    "郁于内者，怨也；阻于外者，愁也。",
    "涉江采芙蓉，兰泽多芳草。",
    "采之欲遗谁？所思在远道。",
    "曲径看山腰，飞花渡自凋。",
    "空心归寂灭，落影照逍遥。",
    "行到水穷处，坐看云起时。",
    "偶然值林叟，谈笑无还期。",
    "春有百花秋有月，夏有凉风冬有雪。",
    "若无闲事挂心头，便是人间好时节。",
    "结庐在人境，而无车马喧。",
    "问君何能尔？心远地自偏。",
    "采菊东篱下，悠然见南山。",
    "此中有真意，欲辨已忘言。",
    "众鸟高飞尽，孤云独去闲。",
    "相看两不厌，只有敬亭山。",
    "我生本无乡，心安是归处。",
    "随富随贫且欢乐，不开口笑是痴人。",
    "蜗牛角上争何事？石火光中寄此身。",
    "世间行乐亦如此，古来万事东流水。",
    "且乐生前一杯酒，何须身后千载名？",
    "人生得意须尽欢，莫使金樽空对月。",
    "天生我材必有用，千金散尽还复来。",
    "抽刀断水水更流，举杯消愁愁更愁。",
    "人生在世不称意，明朝散发弄扁舟。",
    "长风破浪会有时，直挂云帆济沧海。",
    "仰天大笑出门去，我辈岂是蓬蒿人。",
    "自古逢秋悲寂寥，我言秋日胜春朝。",
    "晴空一鹤排云上，便引诗情到碧霄。",
    "沉舟侧畔千帆过，病树前头万木春。",
    "山重水复疑无路，柳暗花明又一村。",
    "纸上得来终觉浅，绝知此事要躬行。",
    "旧书不厌百回读，熟读深思子自知。",
    "粗缯大布裹生涯，腹有诗书气自华。",
    "荷尽已无擎雨盖，菊残犹有傲霜枝。",
    "一年好景君须记，最是橙黄橘绿时。",
    "人生如逆旅，我亦是行人。",
    "但愿人长久，千里共婵娟。",
    "枝上柳绵吹又少，天涯何处无芳草。",
    "笑渐不闻声渐悄，多情却被无情恼。",
    "此心安处是吾乡。"
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

// 显示信封日期
function showEnvelopeDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateStr = `${year}年${month}月${day}日`;
    
    document.getElementById('envelopeDate').textContent = dateStr;
}

// 打开信封
function openEnvelope() {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const noteCard = document.getElementById('noteCard');
    
    // 隐藏信封，显示卡片
    envelopeWrapper.style.display = 'none';
    noteCard.classList.remove('hidden');
    
    // 显示内容
    showDate();
    document.getElementById('quoteContent').textContent = getDailyQuote();
    
    // 保存状态到localStorage
    localStorage.setItem('everydayOpened', 'true');
    localStorage.setItem('everydayDate', new Date().toDateString());
}

// 关闭卡片，回到信封
function closeNote() {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const noteCard = document.getElementById('noteCard');
    
    // 显示信封，隐藏卡片
    envelopeWrapper.style.display = 'block';
    noteCard.classList.add('hidden');
    
    // 清除状态
    localStorage.removeItem('everydayOpened');
    localStorage.removeItem('everydayDate');
}

// 从父页面继承主题设置
function inheritTheme() {
    const parentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', parentTheme);
}

// 检查是否已经打开过今天的卡片
function checkTodayStatus() {
    const opened = localStorage.getItem('everydayOpened');
    const savedDate = localStorage.getItem('everydayDate');
    const today = new Date().toDateString();
    
    // 如果今天已经打开过，直接显示卡片
    if (opened === 'true' && savedDate === today) {
        const envelopeWrapper = document.getElementById('envelopeWrapper');
        const noteCard = document.getElementById('noteCard');
        
        envelopeWrapper.style.display = 'none';
        noteCard.classList.remove('hidden');
        showDate();
        document.getElementById('quoteContent').textContent = getDailyQuote();
    }
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', function() {
    inheritTheme();
    showEnvelopeDate();
    checkTodayStatus();
});
