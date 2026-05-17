// 心情记录页面逻辑

let currentMoodId = null;
let selectedColor = null;
let selectedMoodName = null;
let currentDate = new Date();
let editingMoodId = null;
let listCurrentDate = new Date(); // 列表显示的当前月份

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 设置日期输入的最大值为今天
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('moodDate').max = today;
    document.getElementById('moodDate').value = today;
    
    // 渲染日历
    renderCalendar();
    
    // 加载心情列表
    loadMoodList();
});

// 渲染日历
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // 更新月份显示
    const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', 
                       '七月', '八月', '九月', '十月', '十一月', '十二月'];
    document.getElementById('currentMonth').textContent = `${year}年 ${monthNames[month]}`;
    
    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';
    
    // 添加星期标题
    const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    weekDays.forEach(day => {
        const header = document.createElement('div');
        header.className = 'calendar-day-header';
        header.textContent = day;
        grid.appendChild(header);
    });
    
    // 获取当月第一天和最后一天
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // 获取第一天是星期几
    const startDayOfWeek = firstDay.getDay();
    
    // 添加上个月的日期
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day other-month';
        dayDiv.textContent = prevMonthLastDay - i;
        grid.appendChild(dayDiv);
    }
    
    // 添加当月的日期
    const today = new Date();
    const moods = getMoods();
    
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        dayDiv.textContent = day;
        
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        // 检查是否有心情记录
        const mood = moods.find(m => m.date === dateStr);
        if (mood) {
            // 有记录的日期，整个背景显示为对应颜色
            dayDiv.classList.add('has-mood');
            dayDiv.style.backgroundColor = mood.color;
            dayDiv.style.color = '#fff';
            dayDiv.style.fontWeight = '600';
            
            // 如果正在编辑这条记录，添加编辑标记
            if (editingMoodId && editingMoodId === mood.id) {
                dayDiv.classList.add('editing');
            }
            
            dayDiv.onclick = () => showMoodDetail(mood.id);
        } else {
            // 没有记录的日期也可以点击弹出对话框
            dayDiv.onclick = () => showEmptyDateDialog(dateStr);
        }
        
        // 标记今天
        if (year === today.getFullYear() && 
            month === today.getMonth() && 
            day === today.getDate()) {
            dayDiv.classList.add('today');
        }
        
        grid.appendChild(dayDiv);
    }
    
    // 添加下个月的日期
    const totalCells = grid.children.length - 7; // 减去星期标题
    const remainingCells = 42 - totalCells; // 6行 x 7列 = 42
    for (let i = 1; i <= remainingCells; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day other-month';
        dayDiv.textContent = i;
        grid.appendChild(dayDiv);
    }
}

// 切换月份
function changeMonth(delta) {
    currentDate.setMonth(currentDate.getMonth() + delta);
    renderCalendar();
}

// 选择颜色
function selectColor(element) {
    // 移除其他选项的选中状态
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // 添加当前选项的选中状态
    element.classList.add('selected');
    
    selectedColor = element.dataset.color;
    selectedMoodName = element.dataset.mood;
}

// 保存心情记录
function saveMood() {
    const date = document.getElementById('moodDate').value;
    const description = document.getElementById('moodDescription').value.trim();
    
    if (!date) {
        alert('请选择日期');
        return;
    }
    
    if (!selectedColor) {
        alert('请选择心情颜色');
        return;
    }
    
    // 检查是否不能添加未来日期
    const today = new Date().toISOString().split('T')[0];
    if (date > today) {
        alert('不能添加当天之后的日期');
        return;
    }
    
    const moods = getMoods();
    
    if (editingMoodId) {
        // 编辑模式
        const index = moods.findIndex(m => m.id === editingMoodId);
        if (index !== -1) {
            moods[index] = {
                ...moods[index],
                date,
                color: selectedColor,
                moodName: selectedMoodName,
                description
            };
        }
        editingMoodId = null;
        document.getElementById('formTitle').innerHTML = `
            <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            记录今天的心情
        `;
        document.getElementById('cancelBtn').style.display = 'none';
    } else {
        // 新增模式 - 检查该日期是否已有记录
        const existingIndex = moods.findIndex(m => m.date === date);
        if (existingIndex !== -1) {
            if (!confirm('该日期已有心情记录，是否覆盖？')) {
                return;
            }
            moods.splice(existingIndex, 1);
        }
        
        const newMood = {
            id: Date.now().toString(),
            date,
            color: selectedColor,
            moodName: selectedMoodName,
            description,
            createdAt: new Date().toISOString()
        };
        
        moods.push(newMood);
    }
    
    saveMoods(moods);
    
    // 清空表单
    clearForm();
    
    // 重新渲染
    renderCalendar();
    loadMoodList();
    
    alert('心情记录保存成功！');
}

// 取消编辑
function cancelEdit() {
    editingMoodId = null;
    clearForm();
    document.getElementById('formTitle').innerHTML = `
        <svg viewBox="0 0 24 24" width="28" height="28">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        记录今天的心情
    `;
    document.getElementById('cancelBtn').style.display = 'none';
    
    // 重新渲染日历以移除编辑标记
    renderCalendar();
}

// 清空表单
function clearForm() {
    document.getElementById('moodDescription').value = '';
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    selectedColor = null;
    selectedMoodName = null;
}

// 加载心情列表
function loadMoodList() {
    const moods = getMoods();
    const listContainer = document.getElementById('moodList');
    
    // 更新列表月份显示
    updateListMonthDisplay();
    
    if (moods.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">暂无心情记录</p>';
        return;
    }
    
    // 获取当前显示的年月
    const listYear = listCurrentDate.getFullYear();
    const listMonth = listCurrentDate.getMonth();
    
    // 过滤出当前月份的记录
    const filteredMoods = moods.filter(mood => {
        const moodDate = new Date(mood.date);
        return moodDate.getFullYear() === listYear && moodDate.getMonth() === listMonth;
    });
    
    if (filteredMoods.length === 0) {
        listContainer.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: 2rem;">该月份暂无心情记录</p>';
        return;
    }
    
    // 按日期倒序排列
    filteredMoods.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    listContainer.innerHTML = '';
    
    // 渲染该月份的所有记录
    filteredMoods.forEach(mood => {
        const item = document.createElement('div');
        item.className = 'mood-item';
        item.onclick = () => showMoodDetail(mood.id);
        
        item.innerHTML = `
            <div class="mood-color-indicator" style="background: ${mood.color};"></div>
            <div class="mood-info">
                <h3>${mood.moodName}</h3>
                <p>${mood.description || '无描述'}</p>
            </div>
            <div class="mood-date">${formatDate(mood.date)}</div>
        `;
        
        listContainer.appendChild(item);
    });
}

// 更新列表月份显示
function updateListMonthDisplay() {
    const year = listCurrentDate.getFullYear();
    const month = listCurrentDate.getMonth();
    const monthNames = ['一月', '二月', '三月', '四月', '五月', '六月', 
                       '七月', '八月', '九月', '十月', '十一月', '十二月'];
    document.getElementById('currentListMonth').textContent = `${year}年 ${monthNames[month]}`;
}

// 切换列表月份
function changeListMonth(delta) {
    listCurrentDate.setMonth(listCurrentDate.getMonth() + delta);
    loadMoodList();
}

// 显示心情详情
function showMoodDetail(moodId) {
    const moods = getMoods();
    const mood = moods.find(m => m.id === moodId);
    
    if (!mood) return;
    
    currentMoodId = moodId;
    
    document.getElementById('modalColor').style.background = mood.color;
    document.getElementById('modalTitle').textContent = mood.moodName;
    document.getElementById('modalDate').textContent = formatDate(mood.date);
    document.getElementById('modalBody').textContent = mood.description || '无描述';
    
    // 显示编辑和删除按钮
    document.querySelector('.modal-actions').style.display = 'flex';
    
    document.getElementById('detailModal').classList.add('show');
}

// 关闭弹窗
function closeModal() {
    document.getElementById('detailModal').classList.remove('show');
    currentMoodId = null;
    
    // 恢复modal-actions的显示
    document.querySelector('.modal-actions').style.display = 'flex';
}

// 编辑当前心情
function editCurrentMood() {
    if (!currentMoodId) return;
    
    const moods = getMoods();
    const mood = moods.find(m => m.id === currentMoodId);
    
    if (!mood) return;
    
    closeModal();
    
    // 填充表单
    document.getElementById('moodDate').value = mood.date;
    document.getElementById('moodDescription').value = mood.description || '';
    
    // 选择颜色
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.classList.remove('selected');
        if (opt.dataset.color === mood.color) {
            opt.classList.add('selected');
            selectedColor = mood.color;
            selectedMoodName = mood.moodName;
        }
    });
    
    editingMoodId = currentMoodId;
    document.getElementById('formTitle').innerHTML = `
        <svg viewBox="0 0 24 24" width="28" height="28">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
        编辑心情记录
    `;
    document.getElementById('cancelBtn').style.display = 'inline-block';
    
    // 重新渲染日历以显示编辑标记
    renderCalendar();
    
    // 滚动到表单
    document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
}

// 删除当前心情
function deleteCurrentMood() {
    if (!currentMoodId) return;
    
    if (!confirm('确定要删除这条心情记录吗？')) return;
    
    let moods = getMoods();
    moods = moods.filter(m => m.id !== currentMoodId);
    saveMoods(moods);
    
    closeModal();
    renderCalendar();
    loadMoodList();
    
    alert('删除成功');
}

// 获取所有心情记录
function getMoods() {
    const moods = localStorage.getItem('moodRecords');
    return moods ? JSON.parse(moods) : [];
}

// 保存心情记录
function saveMoods(moods) {
    localStorage.setItem('moodRecords', JSON.stringify(moods));
}

// 格式化日期
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
}

// 显示空日期对话框
function showEmptyDateDialog(dateStr) {
    currentMoodId = null;
    
    document.getElementById('modalColor').style.background = '#E0E0E0';
    document.getElementById('modalTitle').textContent = '添加心情记录';
    document.getElementById('modalDate').textContent = formatDate(dateStr);
    document.getElementById('modalBody').innerHTML = `
        <p style="text-align: center; color: var(--text-secondary); margin-bottom: 1.5rem;">
            这一天还没有心情记录
        </p>
        <div style="text-align: center;">
            <button class="btn btn-submit" onclick="goToAddForm('${dateStr}')">
                添加记录
            </button>
        </div>
    `;
    
    // 隐藏编辑和删除按钮
    document.querySelector('.modal-actions').style.display = 'none';
    
    document.getElementById('detailModal').classList.add('show');
}

// 从空日期对话框跳转到表单
function goToAddForm(dateStr) {
    closeModal();
    document.getElementById('moodDate').value = dateStr;
    clearForm();
    
    // 滚动到表单
    document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
}

// 点击弹窗外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target === modal) {
        closeModal();
    }
}

// 导出数据
function exportData() {
    const moods = getMoods();
    
    if (moods.length === 0) {
        alert('暂无数据可导出');
        return;
    }
    
    // 创建导出数据对象
    const exportData = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        totalRecords: moods.length,
        records: moods
    };
    
    // 转换为JSON字符串
    const dataStr = JSON.stringify(exportData, null, 2);
    
    // 创建Blob对象
    const blob = new Blob([dataStr], { type: 'application/json' });
    
    // 创建下载链接
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `心情记录_${new Date().toISOString().split('T')[0]}.json`;
    
    // 触发下载
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert(`成功导出 ${moods.length} 条心情记录`);
}

// 导入数据
function importData(event) {
    const file = event.target.files[0];
    
    if (!file) {
        return;
    }
    
    // 检查文件类型
    if (!file.name.endsWith('.json')) {
        alert('请选择JSON格式的文件');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const importData = JSON.parse(e.target.result);
            
            // 验证数据格式
            if (!importData.records || !Array.isArray(importData.records)) {
                throw new Error('无效的数据格式');
            }
            
            const importedMoods = importData.records;
            const existingMoods = getMoods();
            
            // 合并数据（保留现有数据，不覆盖重复日期）
            let addedCount = 0;
            let skippedCount = 0;
            
            importedMoods.forEach(importedMood => {
                // 检查是否已存在相同日期的记录
                const existingIndex = existingMoods.findIndex(m => m.date === importedMood.date);
                
                if (existingIndex === -1) {
                    // 不存在则添加
                    existingMoods.push(importedMood);
                    addedCount++;
                } else {
                    // 已存在则跳过
                    skippedCount++;
                }
            });
            
            // 保存合并后的数据
            saveMoods(existingMoods);
            
            // 重新渲染
            renderCalendar();
            loadMoodList();
            
            // 显示结果
            let message = `导入完成！\n新增：${addedCount} 条\n跳过（日期重复）：${skippedCount} 条`;
            if (skippedCount > 0) {
                message += '\n\n提示：重复日期的记录已被保留，未覆盖。';
            }
            alert(message);
            
        } catch (error) {
            alert('导入失败：' + error.message);
            console.error('导入错误:', error);
        }
        
        // 清空文件输入，允许重复导入同一文件
        event.target.value = '';
    };
    
    reader.onerror = function() {
        alert('读取文件失败');
    };
    
    reader.readAsText(file);
}

// 切换帮助面板显示/隐藏
function toggleHelp() {
    const helpPanel = document.getElementById('helpPanel');
    if (helpPanel.style.display === 'none') {
        helpPanel.style.display = 'block';
        // 滚动到帮助面板
        setTimeout(() => {
            helpPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        helpPanel.style.display = 'none';
    }
}
