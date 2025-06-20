document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear(); // Get the current year

    const footerHTML = `
        <footer style="text-align: center;">
            <div class="footer-content">
                <p class="caption">
                    © ${currentYear}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Designed by&nbsp;<a href="https://www.wcareri.com" style="text-decoration: none; color: inherit;">William Careri</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Inspired by&nbsp;<a href="https://blogroll.org" style="text-decoration: none; color: inherit;">Blogroll.org</a>
                </p>
            </div>
        </footer>
    `;

    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});