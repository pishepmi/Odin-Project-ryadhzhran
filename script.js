document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuList = document.querySelector("ul");

    menuToggle.addEventListener("click", function() {
        menuList.classList.toggle("show");
    });


    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        if (!article.classList.contains('home')) {
            article.style.display = 'none';
        }
    });
});

function showArticle(articleId) {
    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        article.style.display = 'none';
    });

    const currentArticle = document.querySelector(`.${articleId}`);
    currentArticle.style.display = 'block';
}
