document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
        <header class="fixed-header">
            <nav class="header-nav" id="headerNav">
                <a href="https://vizdexproject.com">
                    <img src="https://vizdexproject.com/assets/images/header-logo.png" alt="A Sans-Serif VizDex typographic logo" class="header-logo">
                </a>
                <div class="hamburger-menu" id="hamburgerMenu">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                <div class="header-buttons" id="headerButtons">
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

    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const headerButtons = document.getElementById('headerButtons');
    const headerNav = document.getElementById('headerNav');

    if (hamburgerMenu && headerButtons && headerNav) {
        hamburgerMenu.addEventListener('click', function() {
            headerButtons.classList.toggle('active');
            hamburgerMenu.classList.toggle('open');
            headerNav.classList.toggle('menu-open');
        });

        const headerLinks = headerButtons.querySelectorAll('a');
        headerLinks.forEach(link => {
            link.addEventListener('click', () => {
                headerButtons.classList.remove('active');
                hamburgerMenu.classList.remove('open');
                headerNav.classList.remove('menu-open');
            });
        });
    }
});