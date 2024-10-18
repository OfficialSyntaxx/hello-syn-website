document.addEventListener('DOMContentLoaded', () => {
    const themeOptions = document.querySelectorAll('.theme-option');
    const root = document.documentElement;

    const themes = {
        cyber: {
            primaryColor: '#00ffff',
            secondaryColor: '#ff00ff',
            backgroundColor: '#000033',
            textColor: '#ffffff'
        },
        neon: {
            primaryColor: '#ff00ff',
            secondaryColor: '#00ff00',
            backgroundColor: '#000000',
            textColor: '#ffffff'
        },
        matrix: {
            primaryColor: '#00ff00',
            secondaryColor: '#003300',
            backgroundColor: '#000000',
            textColor: '#00ff00'
        }
    };

    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = themes[option.dataset.theme];
            for (const [key, value] of Object.entries(theme)) {
                root.style.setProperty(`--${key}`, value);
            }
        });
    });

    // Add animation to quote changes if the element exists
    const quoteBtn = document.getElementById('newQuoteBtn');
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');

    if (quoteBtn && quoteText && authorText) {
        quoteBtn.addEventListener('click', () => {
            quoteText.style.animation = 'none';
            authorText.style.animation = 'none';
            setTimeout(() => {
                quoteText.style.animation = 'fadeIn 1s';
                authorText.style.animation = 'fadeIn 1s';
            }, 10);
        });
    }
});
