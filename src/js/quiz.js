// 趣味小测试功能框架

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
    console.log('趣味小测试页面已加载');
});
