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
            window.location.href = '../en/index.html';
        } else if (lang === 'zh') {
            window.location.href = '../cn/index.html';
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
