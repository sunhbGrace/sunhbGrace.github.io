// switcher.js

document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector('.language-switcher');
    const switchHandle = document.querySelector('.switch');

    // 获取当前语言
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    setSwitcherPosition(currentLang);

    // 监听点击事件
    switcher.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        setLanguage(newLang);
    });

    function setLanguage(lang) {
        if (lang === 'en') {
            window.location.href = '/en/index.html';
        } else if (lang === 'zh') {
            window.location.href = '/cn/index.html';
        }
        localStorage.setItem('preferredLanguage', lang);
    }

    function setSwitcherPosition(lang) {
        if (lang === 'en') {
            switchHandle.style.transform = 'translateX(0)';
        } else if (lang === 'zh') {
            switchHandle.style.transform = 'translateX(30px)';
        }
    }
});


