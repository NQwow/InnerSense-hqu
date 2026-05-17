// 趣味小测试功能

// 测试数据
const tests = {
    fruit: {
        name: '水果人格测试',
        questions: [
            { q: '和朋友聚会时，你更习惯？', options: [{ text: 'A. 主动聊天，带动全场氛围', value: 5 }, { text: 'B. 跟着大家节奏，安静参与', value: 3 }, { text: 'C. 只和熟悉的人小声交谈', value: 1 }] },
            { q: '遇到烦心事，你通常会？', options: [{ text: 'A. 很快释怀，不放在心上', value: 5 }, { text: 'B. 默默消化，慢慢调整', value: 3 }, { text: 'C. 纠结很久，容易陷入情绪', value: 1 }] },
            { q: '对于人际交往，你更看重？', options: [{ text: 'A. 真诚直接，不喜欢拐弯抹角', value: 5 }, { text: 'B. 温和相处，彼此舒服就好', value: 3 }, { text: 'C. 保持距离，不被过度打扰', value: 1 }] },
            { q: '做事之前，你会？', options: [{ text: 'A. 随心去做，不喜欢提前规划', value: 5 }, { text: 'B. 简单规划，灵活调整就好', value: 3 }, { text: 'C. 制定计划，按步骤执行', value: 1 }] },
            { q: '别人对你提出过分要求，你会？', options: [{ text: 'A. 直接拒绝，坚守自己底线', value: 5 }, { text: 'B. 委婉推脱，不想得罪人', value: 3 }, { text: 'C. 不好意思拒绝，勉强答应', value: 1 }] },
            { q: '你更喜欢的生活状态是？', options: [{ text: 'A. 热闹鲜活，充满新鲜感', value: 5 }, { text: 'B. 平稳舒缓，松弛又自在', value: 3 }, { text: 'C. 安静独处，简单不复杂', value: 1 }] },
            { q: '面对他人的负面情绪，你会？', options: [{ text: 'A. 耐心安慰，全力给予陪伴', value: 5 }, { text: 'B. 默默倾听，不随意评判', value: 3 }, { text: 'C. 不知如何回应，保持沉默', value: 1 }] },
            { q: '当你认定一件事，会？', options: [{ text: 'A. 坚持到底，绝不轻易放弃', value: 5 }, { text: 'B. 努力尝试，不行就调整', value: 3 }, { text: 'C. 顺其自然，不强求结果', value: 1 }] },
            { q: '你对自己的要求是？', options: [{ text: 'A. 做独特的自己，不迎合他人', value: 5 }, { text: 'B. 温和待人，也不委屈自己', value: 3 }, { text: 'C. 踏实安稳，不让别人失望', value: 1 }] },
            { q: '闲暇时光，你更偏爱？', options: [{ text: 'A. 外出探索，尝试新鲜事物', value: 5 }, { text: 'B. 做喜欢的事，放松身心', value: 3 }, { text: 'C. 宅家休息，享受独处', value: 1 }] },
            { q: '与人发生矛盾，你会？', options: [{ text: 'A. 直面问题，理性解决', value: 5 }, { text: 'B. 冷静沟通，各退一步', value: 3 }, { text: 'C. 选择回避，不想争执', value: 1 }] },
            { q: '你看待生活的态度是？', options: [{ text: 'A. 热爱浪漫，注重小美好', value: 5 }, { text: 'B. 通透豁达，知足常乐', value: 3 }, { text: 'C. 沉稳内敛，稳步前行', value: 1 }] }
        ],
        getResult: function(score) {
            if (score >= 50) return { type: '🍓 草莓型人格', desc: '热情开朗，充满活力，善于社交，是人群中的焦点。' };
            if (score >= 35) return { type: '🍊 橙子型人格', desc: '温和友善，善解人意，懂得平衡生活与工作。' };
            return { type: '🍇 葡萄型人格', desc: '内敛深沉，思考缜密，更注重内心世界。' };
        }
    },
    stress: {
        name: '心理压力自测',
        questions: [
            { q: '你的近期睡眠状态？', options: [{ text: 'A. 入睡快、睡得安稳，醒来轻松', value: 1 }, { text: 'B. 偶尔浅眠，整体不影响休息', value: 2 }, { text: 'C. 容易多梦、半夜易醒', value: 3 }, { text: 'D. 经常失眠、很难入睡', value: 4 }] },
            { q: '最近情绪波动情况？', options: [{ text: 'A. 情绪平稳，心态放松', value: 1 }, { text: 'B. 偶尔低落，很快恢复', value: 2 }, { text: 'C. 容易烦躁、心情压抑', value: 3 }, { text: 'D. 长期低落、提不起兴致', value: 4 }] },
            { q: '面对学习或任务时的感受？', options: [{ text: 'A. 从容应对，节奏舒适', value: 1 }, { text: 'B. 正常完成，略有疲惫', value: 2 }, { text: 'C. 任务堆积、有心无力', value: 3 }, { text: 'D. 极度抗拒、完全不想行动', value: 4 }] },
            { q: '现阶段社交相处意愿？', options: [{ text: 'A. 乐于相处，愿意交流', value: 1 }, { text: 'B. 正常往来，不多不少', value: 2 }, { text: 'C. 不想主动社交、偏爱安静', value: 3 }, { text: 'D. 刻意回避所有人际来往', value: 4 }] },
            { q: '是否有莫名身体不适（心慌/疲惫/紧绷）？', options: [{ text: 'A. 几乎没有', value: 1 }, { text: 'B. 偶尔轻微疲惫', value: 2 }, { text: 'C. 频繁身体紧绷、容易累', value: 3 }, { text: 'D. 明显心慌不适、身心很累', value: 4 }] },
            { q: '对自己的期待与要求？', options: [{ text: 'A. 顺其自然，知足平和', value: 1 }, { text: 'B. 尽力就好，不强求完美', value: 2 }, { text: 'C. 总觉得自己做得不够好', value: 3 }, { text: 'D. 过度苛求、极易自我否定', value: 4 }] },
            { q: '心里烦心事堆积程度？', options: [{ text: 'A. 没什么心事', value: 1 }, { text: 'B. 少量小事，不影响生活', value: 2 }, { text: 'C. 心事较多、时常挂念', value: 3 }, { text: 'D. 心事沉重、无处排解', value: 4 }] },
            { q: '你能否轻松让自己放松下来？', options: [{ text: 'A. 很容易放松、心态松弛', value: 1 }, { text: 'B. 稍微调整就能舒缓', value: 2 }, { text: 'C. 很难彻底放松下来', value: 3 }, { text: 'D. 时刻紧绷、完全放松不了', value: 4 }] }
        ],
        getResult: function(score) {
            if (score <= 12) return { level: '低压力', desc: '你的压力水平较低，状态良好！继续保持轻松的心态。', color: '#98D8C8' };
            if (score <= 20) return { level: '中等压力', desc: '你有一定的压力，但在可控范围内。适当放松会更好。', color: '#FFD9A0' };
            if (score <= 28) return { level: '较高压力', desc: '你的压力水平偏高，建议及时调整作息，寻求支持。', color: '#FFA07A' };
            return { level: '高压力', desc: '你的压力较大，请重视心理健康，必要时寻求专业帮助。', color: '#FF6B9D' };
        }
    },
    tarot: {
        name: '每日塔罗占卜',
        cards: [
            { name: '愚人', meaning: '新的开始，冒险精神，无限可能', advice: '勇敢迈出第一步，相信直觉。' },
            { name: '魔术师', meaning: '创造力，技能，自信', advice: '发挥你的才能，展现真实的自己。' },
            { name: '女祭司', meaning: '直觉，智慧，内在力量', advice: '倾听内心的声音，保持冷静。' },
            { name: '皇后', meaning: '丰饶，母爱，自然', advice: '享受生活的美好，关爱他人。' },
            { name: '皇帝', meaning: '权威，稳定，领导力', advice: '建立秩序，承担责任。' },
            { name: '恋人', meaning: '爱情，选择，和谐', advice: '做出真心的选择，珍惜关系。' },
            { name: '战车', meaning: '意志力，胜利，决心', advice: '坚持不懈，勇往直前。' },
            { name: '力量', meaning: '勇气，耐心，内在力量', advice: '用温柔的方式克服困难。' }
        ],
        drawCard: function() {
            const index = Math.floor(Math.random() * this.cards.length);
            return this.cards[index];
        }
    }
};

let currentTest = null;
let currentQuestion = 0;
let answers = [];

// 从父页面继承主题设置
function inheritTheme() {
    const parentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', parentTheme);
}

// 开始测试
function startTest(testType) {
    currentTest = testType;
    currentQuestion = 0;
    answers = [];
    
    const container = document.getElementById('testContainer');
    const grid = document.getElementById('testsGrid');
    
    grid.style.display = 'none';
    container.style.display = 'block';
    
    if (testType === 'tarot') {
        showTarotTest();
    } else {
        showQuestion();
    }
}

// 显示问题
function showQuestion() {
    const test = tests[currentTest];
    const question = test.questions[currentQuestion];
    
    const html = `
        <div class="question-container">
            <h2>${test.name}</h2>
            <div class="progress">问题 ${currentQuestion + 1} / ${test.questions.length}</div>
            <div class="question-text">${question.q}</div>
            <div class="options">
                ${question.options.map((opt, idx) => `
                    <div class="option" onclick="selectOption(${idx})">
                        ${opt.text}
                    </div>
                `).join('')}
            </div>
            <div class="question-nav-buttons">
                ${currentQuestion > 0 ? `<button class="prev-btn" onclick="goToPrevQuestion()">← 返回上一题</button>` : ''}
                <button class="back-menu-btn" onclick="backToMenu()">返回测试列表</button>
            </div>
        </div>
    `;
    
    document.getElementById('testContent').innerHTML = html;
}

// 选择选项
function selectOption(idx) {
    const test = tests[currentTest];
    answers.push(test.questions[currentQuestion].options[idx].value);
    
    currentQuestion++;
    
    if (currentQuestion < test.questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 返回上一题
function goToPrevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        answers.pop(); // 移除最后一个答案
        showQuestion();
    }
}

// 显示结果
function showResult() {
    const test = tests[currentTest];
    const totalScore = answers.reduce((sum, val) => sum + val, 0);
    const result = test.getResult(totalScore);
    
    let resultHtml = '';
    
    if (currentTest === 'fruit') {
        resultHtml = `
            <div class="result-container">
                <h2>测试结果</h2>
                <div class="result-type">${result.type}</div>
                <div class="result-desc">${result.desc}</div>
                <div class="result-score">总分：${totalScore} / 60</div>
            </div>
        `;
    } else if (currentTest === 'stress') {
        resultHtml = `
            <div class="result-container">
                <h2>测试结果</h2>
                <div class="result-level" style="color: ${result.color}">${result.level}</div>
                <div class="result-desc">${result.desc}</div>
                <div class="result-score">总分：${totalScore} / 32</div>
            </div>
        `;
    }
    
    resultHtml += `
        <button class="restart-btn" onclick="restartTest()">重新测试</button>
        <button class="back-btn-secondary" onclick="backToMenu()">返回测试列表</button>
    `;
    
    document.getElementById('testContent').innerHTML = resultHtml;
}

// 显示塔罗测试
function showTarotTest() {
    const html = `
        <div class="tarot-container">
            <h2>每日塔罗占卜</h2>
            <p class="tarot-intro">静下心来，默念你的问题，然后点击抽牌</p>
            <div class="tarot-card-back" onclick="drawTarotCard()">
                <div class="card-pattern">✦</div>
                <div class="card-text">点击抽牌</div>
            </div>
            <div id="tarotResult" style="display: none;"></div>
        </div>
    `;
    
    document.getElementById('testContent').innerHTML = html;
}

// 抽取塔罗牌
function drawTarotCard() {
    const test = tests.tarot;
    const card = test.drawCard();
    
    const resultHtml = `
        <div class="tarot-result-show">
            <h3>${card.name}</h3>
            <div class="tarot-meaning">
                <strong>含义：</strong>${card.meaning}
            </div>
            <div class="tarot-advice">
                <strong>建议：</strong>${card.advice}
            </div>
            <button class="restart-btn" onclick="showTarotTest()">再次抽牌</button>
            <button class="back-btn-secondary" onclick="backToMenu()">返回测试列表</button>
        </div>
    `;
    
    document.querySelector('.tarot-card-back').style.display = 'none';
    document.getElementById('tarotResult').innerHTML = resultHtml;
    document.getElementById('tarotResult').style.display = 'block';
}

// 重新测试
function restartTest() {
    currentQuestion = 0;
    answers = [];
    showQuestion();
}

// 返回测试列表
function backToMenu() {
    document.getElementById('testsGrid').style.display = 'grid';
    document.getElementById('testContainer').style.display = 'none';
}

// 返回首页
function goBack() {
    window.location.href = '../../index.html';
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', function() {
    inheritTheme();
    console.log('趣味小测试页面已加载');
});