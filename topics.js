document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('#filters button');
    const blogGallery = document.querySelector('.blog-gallery');
    const blogItems = Array.from(document.querySelectorAll('.blog-item'));

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffledItems = shuffleArray(blogItems);

    if (blogGallery) {
        shuffledItems.forEach(item => {
            blogGallery.appendChild(item);
        });
    }

    const allButton = document.querySelector('#filters button[data-category="all"]');
    if (allButton) {
        allButton.classList.add('active');
    }
    
    filterItems('all');


    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            filterButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');

            filterItems(category); 
        });
    });

    function filterItems(category) {
        const currentBlogItems = document.querySelectorAll('.blog-item');

        currentBlogItems.forEach(item => {
            const itemCategoryAttr = item.getAttribute('data-category'); 
            const itemCategories = itemCategoryAttr ? itemCategoryAttr.split(' ') : []; 

            if (category === 'all' || itemCategories.includes(category)) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'none';
            }
        });
    }
});