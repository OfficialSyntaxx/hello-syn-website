document.addEventListener('DOMContentLoaded', () => {
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
