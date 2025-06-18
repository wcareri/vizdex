document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
        <header class="fixed-header">
            <nav class="header-nav">
                <a href="index.html"> 
                    <img src="https://vizdexproject.com/assets/images/header-logo.png" alt="A Sans-Serif VizDex typographic logo" class="header-logo">
                </a>
                <div class="header-buttons">
                    <a href="https://vizdexproject.com/info" rel="info">Info</a>
                    <a href="https://vizdexproject.com/submit" rel="submit">Submit your blog</a>
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
