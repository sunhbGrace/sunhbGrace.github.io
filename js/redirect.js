// redirect.js

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');

    if (savedLang === 'en') {
        window.location.href = 'en/index.html';
    } else if (savedLang === 'zh') {
        window.location.href = 'cn/index.html';
    } else {
        // 显示语言选择界面
        const selectorContainer = document.getElementById('language-selector-container');
        selectorContainer.style.display = 'block';

        // 语言选择按钮
        document.getElementById('select-en').addEventListener('click', () => {
            setLanguage('en');
        });

        document.getElementById('select-zh').addEventListener('click', () => {
            setLanguage('zh');
        });
    }

    function setLanguage(lang) {
        localStorage.setItem('preferredLanguage', lang);
        if (lang === 'en') {
            window.location.href = 'en/index.html';
        } else if (lang === 'zh') {
            window.location.href = 'cn/index.html';
        }
    }
});
