// 页面滚动事件监听器
window.addEventListener('scroll', function() {
    // 获取导航栏元素
    const navbar = document.querySelector('.navbar');
    
    // 获取当前滚动位置
    const scrollPosition = window.scrollY;
    
    // 根据滚动位置添加或移除导航栏样式
    if (scrollPosition > 50) {
        // 当页面滚动超过50px时，添加滚动样式
        navbar.classList.add('navbar-scrolled');
    } else {
        // 当页面回到顶部时，移除滚动样式
        navbar.classList.remove('navbar-scrolled');
    }
}); 