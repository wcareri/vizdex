document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
        <header class="fixed-header">
            <nav class="header-nav">
                <a href="index.html"> 
                    <img src="https://vizdexproject.com/assets/images/header-logo.png" alt="A Sans-Serif VizDex typographic logo" class="header-logo">
                </a>
                <div class="header-buttons">
                    <a href="info/index.html" rel="info">Info</a>
                    <a href="submit/index.html" rel="submit">Submit your blog</a>
                </div>
            </nav>
        </header>
    `;

    const headerPlaceholder = document.getElementById('header-placeholder');

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }
});
