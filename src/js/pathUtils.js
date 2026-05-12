// 通用路径工具函数
// 用于在不同环境下正确计算页面跳转路径

/**
 * 获取从当前页面到目标页面的相对路径
 * @param {string} targetPath - 目标页面相对于项目根目录的路径（如 'index.html' 或 'src/pages/everyday/everyday.html'）
 * @returns {string} 正确的相对路径
 */
function getRelativePath(targetPath) {
    const currentPath = window.location.pathname;
    
    // 如果当前在根目录（如 /index.html）
    if (currentPath.endsWith('/index.html') || currentPath === '/') {
        return targetPath;
    }
    
    // 解析当前路径层级
    const pathSegments = currentPath.split('/').filter(segment => segment);
    
    // 找到 src 目录的位置
    const srcIndex = pathSegments.indexOf('src');
    
    if (srcIndex !== -1) {
        // 当前在 src 目录下
        const depth = pathSegments.length - srcIndex - 1; // 计算深度
        
        if (targetPath.startsWith('index.html')) {
            // 返回根目录
            return '../'.repeat(depth + 1) + targetPath;
        } else if (targetPath.startsWith('src/')) {
            // 同级或跨级跳转
            const prefix = '../'.repeat(depth + 1);
            return prefix + targetPath;
        } else {
            // 同级目录下的跳转
            const prefix = '../'.repeat(depth);
            return prefix + targetPath;
        }
    }
    
    // fallback: 直接返回目标路径
    return targetPath;
}

/**
 * 导航到指定页面
 * @param {string} page - 页面标识符
 */
function navigateTo(page) {
    const pageMap = {
        'home': 'index.html',
        'everyday': 'src/pages/everyday/everyday.html',
        'quiz': 'src/pages/quiz/quiz.html',
        'praise': 'src/pages/praise/praise.html',
        'toolbox': 'src/pages/toolbox/toolbox.html',
        'mood': 'src/pages/mood/mood.html'
    };
    
    if (pageMap[page]) {
        const path = getRelativePath(pageMap[page]);
        window.location.href = path;
    }
}

/**
 * 返回首页
 */
function goBack() {
    navigateTo('home');
}
