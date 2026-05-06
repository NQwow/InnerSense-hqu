// 情绪工具箱功能

// 工具内容库 - 方便后续拓展
const toolContents = {
    breathing: {
        title: '深呼吸放松法',
        content: `
            <p><strong>什么是深呼吸放松法？</strong></p>
            <p>深呼吸是一种简单而有效的放松技巧，可以帮助你快速缓解焦虑和压力。</p>
            
            <p><strong>如何进行？</strong></p>
            <p>1. 找一个舒适的位置坐下或躺下</p>
            <p>2. 闭上眼睛，放松全身肌肉</p>
            <p>3. 用鼻子缓慢吸气，数到4</p>
            <p>4. 屏住呼吸，数到4</p>
            <p>5. 用嘴巴缓慢呼气，数到6</p>
            <p>6. 重复以上步骤5-10次</p>
            
            <p><strong>小贴士：</strong></p>
            <p>• 每天练习2-3次，每次5分钟</p>
            <p>• 可以在感到紧张时随时使用</p>
            <p>• 配合轻柔的音乐效果更佳</p>
        `
    },
    meditation: {
        title: '正念冥想',
        content: `
            <p><strong>什么是正念冥想？</strong></p>
            <p>正念冥想是一种通过专注当下、不加评判地觉察自己的思绪和感受的练习方法。</p>
            
            <p><strong>基础练习步骤：</strong></p>
            <p>1. 选择一个安静的环境</p>
            <p>2. 舒适地坐着，保持脊柱挺直</p>
            <p>3. 闭上眼睛，将注意力集中在呼吸上</p>
            <p>4. 当思绪飘走时，温柔地将注意力带回到呼吸</p>
            <p>5. 从5分钟开始，逐渐增加时间</p>
            
            <p><strong>注意事项：</strong></p>
            <p>• 不要强迫自己清空思绪</p>
            <p>• 接受所有出现的想法和感受</p>
            <p>• 坚持练习，效果会逐渐显现</p>
        `
    },
    exercise: {
        title: '运动调节',
        content: `
            <p><strong>运动如何帮助情绪调节？</strong></p>
            <p>运动可以促进大脑分泌内啡肽和多巴胺，这些"快乐激素"能有效改善情绪。</p>
            
            <p><strong>推荐的运动方式：</strong></p>
            <p>• <strong>有氧运动：</strong>快走、慢跑、游泳、骑自行车（30分钟）</p>
            <p>• <strong>瑜伽：</strong>舒缓身心，增强身体意识</p>
            <p>• <strong>拉伸运动：</strong>释放肌肉紧张，缓解压力</p>
            <p>• <strong>舞蹈：</strong>自由表达情绪，享受运动乐趣</p>
            
            <p><strong>建议：</strong></p>
            <p>• 每周至少运动3-5次</p>
            <p>• 选择自己喜欢的运动方式</p>
            <p>• 循序渐进，不要过度运动</p>
        `
    },
    art: {
        title: '艺术创作',
        content: `
            <p><strong>艺术创作的疗愈力量</strong></p>
            <p>通过艺术表达内心情感，可以帮助释放压力、整理思绪。</p>
            
            <p><strong>可以尝试的创作形式：</strong></p>
            <p>• <strong>绘画：</strong>不需要专业技巧，随意涂鸦即可</p>
            <p>• <strong>写作：</strong>写日记、诗歌或故事</p>
            <p>• <strong>手工：</strong>折纸、编织、陶艺等</p>
            <p>• <strong>摄影：</strong>记录生活中的美好瞬间</p>
            
            <p><strong>创作建议：</strong></p>
            <p>• 不追求完美，重在过程</p>
            <p>• 创造一个专属的创作空间</p>
            <p>• 定期回顾自己的作品，感受成长</p>
        `
    },
    music: {
        title: '音乐调节',
        content: `
            <p><strong>音乐对情绪的影响</strong></p>
            <p>音乐可以直接作用于我们的情绪中枢，快速改变心情状态。</p>
            
            <p><strong>如何使用音乐调节情绪？</strong></p>
            <p>• <strong>平静时：</strong>选择轻音乐、古典音乐或自然声音</p>
            <p>• <strong>低落时：</strong>听 uplifting 的流行歌曲或励志音乐</p>
            <p>• <strong>焦虑时：</strong>尝试冥想音乐或白噪音</p>
            <p>• <strong>愤怒时：</strong>先听节奏强烈的音乐释放，再转向舒缓音乐</p>
            
            <p><strong>额外建议：</strong></p>
            <p>• 创建不同情绪的歌单</p>
            <p>• 学习一种乐器，亲自创造音乐</p>
            <p>• 参加音乐会或合唱团</p>
        `
    },
    talk: {
        title: '倾诉交流',
        content: `
            <p><strong>倾诉的重要性</strong></p>
            <p>与他人分享感受可以减轻心理负担，获得支持和理解。</p>
            
            <p><strong>倾诉的对象可以是：</strong></p>
            <p>• <strong>亲密朋友：</strong>信任的朋友愿意倾听你的心事</p>
            <p>• <strong>家人：</strong>家人的关心和支持是强大的后盾</p>
            <p>• <strong>心理咨询师：</strong>专业人士提供科学的指导</p>
            <p>• <strong>支持小组：</strong>与有相似经历的人交流</p>
            
            <p><strong>有效倾诉的技巧：</strong></p>
            <p>• 选择合适的时机和环境</p>
            <p>• 诚实地表达自己的感受</p>
            <p>• 也要学会倾听他人</p>
            <p>• 不强求对方给出解决方案</p>
        `
    }
};

// 显示工具详情
function showToolDetail(toolId) {
    const tool = toolContents[toolId];
    if (tool) {
        document.getElementById('modalTitle').textContent = tool.title;
        document.getElementById('modalBody').innerHTML = tool.content;
        document.getElementById('detailModal').style.display = 'block';
    }
}

// 关闭弹窗
function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
}

// 点击弹窗外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target === modal) {
        closeModal();
    }
};

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
});
