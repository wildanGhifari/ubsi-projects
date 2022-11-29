// Start of Data Declaration 
const articles = [
    {
        "img" : "test.jpg",
        "judul" : "This is a title for article 1",
        "highlights" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p1" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p2" : "Debitis delectus tempore sequi eveniet eum magnam natus deleniti in itaque facilis dolores dolorem atque, ipsa culpa aspernatur impedit ab illo sapiente! Officiis ipsum hic, non debitis repudiandae dolorum in dolorem atque.",
        "p3" : "Impedit reprehenderit, esse ea eos, sed, modi molestias dignissimos reiciendis soluta ab expedita cum dolor? Laboriosam, alias. Vel, voluptas repudiandae voluptatum inventore fugit itaque, minima dolore aspernatur est adipisci commodi! Cum quis officia modi ratione sit iusto quia?"
    },
    {
        "img" : "test.jpg",
        "judul" : "This is a title for article 2",
        "highlights" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p1" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p2" : "Debitis delectus tempore sequi eveniet eum magnam natus deleniti in itaque facilis dolores dolorem atque, ipsa culpa aspernatur impedit ab illo sapiente! Officiis ipsum hic, non debitis repudiandae dolorum in dolorem atque.",
        "p3" : "Impedit reprehenderit, esse ea eos, sed, modi molestias dignissimos reiciendis soluta ab expedita cum dolor? Laboriosam, alias. Vel, voluptas repudiandae voluptatum inventore fugit itaque, minima dolore aspernatur est adipisci commodi! Cum quis officia modi ratione sit iusto quia?"
    },
    {
        "img" : "test.jpg",
        "judul" : "This is a title for article 3",
        "highlights" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p1" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p2" : "Debitis delectus tempore sequi eveniet eum magnam natus deleniti in itaque facilis dolores dolorem atque, ipsa culpa aspernatur impedit ab illo sapiente! Officiis ipsum hic, non debitis repudiandae dolorum in dolorem atque.",
        "p3" : "Impedit reprehenderit, esse ea eos, sed, modi molestias dignissimos reiciendis soluta ab expedita cum dolor? Laboriosam, alias. Vel, voluptas repudiandae voluptatum inventore fugit itaque, minima dolore aspernatur est adipisci commodi! Cum quis officia modi ratione sit iusto quia?"
    },
    {
        "img" : "test.jpg",
        "judul" : "This is a title for article 4",
        "highlights" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p1" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p2" : "Debitis delectus tempore sequi eveniet eum magnam natus deleniti in itaque facilis dolores dolorem atque, ipsa culpa aspernatur impedit ab illo sapiente! Officiis ipsum hic, non debitis repudiandae dolorum in dolorem atque.",
        "p3" : "Impedit reprehenderit, esse ea eos, sed, modi molestias dignissimos reiciendis soluta ab expedita cum dolor? Laboriosam, alias. Vel, voluptas repudiandae voluptatum inventore fugit itaque, minima dolore aspernatur est adipisci commodi! Cum quis officia modi ratione sit iusto quia?"
    },
    {
        "img" : "test.jpg",
        "judul" : "This is a title for article 5",
        "highlights" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p1" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae.",
        "p2" : "Debitis delectus tempore sequi eveniet eum magnam natus deleniti in itaque facilis dolores dolorem atque, ipsa culpa aspernatur impedit ab illo sapiente! Officiis ipsum hic, non debitis repudiandae dolorum in dolorem atque.",
        "p3" : "Impedit reprehenderit, esse ea eos, sed, modi molestias dignissimos reiciendis soluta ab expedita cum dolor? Laboriosam, alias. Vel, voluptas repudiandae voluptatum inventore fugit itaque, minima dolore aspernatur est adipisci commodi! Cum quis officia modi ratione sit iusto quia?"
    }
]

const lastReadingArticles = [
    {
        "img" : "test.jpg",
        "judul" : "Title for last article 1",
        "highlights" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae."
    },
    {
        "img" : "test.jpg",
        "judul" : "Title for last article 2",
        "highlights" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi saepe provident consectetur esse eum doloribus quis dolores excepturi id? Amet placeat quae in velit distinctio reprehenderit consequatur atque ipsum molestiae."
    }
]

const bodyWidth = document.body.clientWidth;
const navBrand = document.querySelector('#navbrand')
const navlink = document.querySelector('.nav-link')
const PATH = './imgs/'
// END of Data Declaration 


const createRecommendationArticles = data => {
    const exploreContainer = document.querySelector('.explore');
    const exploreArticles = document.querySelector('.exp-articles');
    const exploreArticle = document.createElement('a');
    const articleImg = document.createElement('img');
    const articleContent = document.createElement('div');
    const articleTitle = document.createElement('h3');
    const articleHighlights = document.createElement('p');

    exploreArticle.classList.add('exp-article');
    exploreArticle.href = '#'
    articleContent.classList.add('exp-article-content');

    const truncate = (input) => input.length > 48 ? `${input.substring(0, 48)}...` : input;
	const cropedHighlights = truncate(data.highlights);

    articleImg.src = `${PATH}${data.img}`
    articleTitle.textContent = data.judul;
    articleHighlights.textContent = cropedHighlights;

    articleContent.append(articleTitle, articleHighlights);
    exploreArticle.append(articleImg, articleContent);
    exploreArticles.append(exploreArticle);
    exploreContainer.append(exploreArticles);
}

const createLastReadingArticle = data => {
    const lastReadingContainer = document.querySelector('.last-reading-container');
    const lastReadingList = document.querySelector('.last-reading-list')
    const lastReadingArticle = document.createElement('a');
    const lastReadingArticleImg = document.createElement('img');
    const lastReadingArticleContent = document.createElement('div');
    const lastReadingArticleTitle = document.createElement('h3');
    const lastReadingArticleHighlights = document.createElement('p');

    let cropedHighlights;

    lastReadingArticle.classList.add('last-reading');
    lastReadingArticleContent.classList.add('last-reading-detail');
    lastReadingArticleHighlights.classList.add('small-text');

    const truncate = (input) => input.length > 48 ? `${input.substring(0, 48)}...` : input;
	cropedHighlights = truncate(data.highlights);

    if (bodyWidth > 1400){
        const truncate = (input) => input.length > 96 ? `${input.substring(0, 96)}...` : input;
	    cropedHighlights = truncate(data.highlights);
    } else {
        const truncate = (input) => input.length > 64 ? `${input.substring(0, 64)}...` : input;
	    cropedHighlights = truncate(data.highlights);
    }

    lastReadingArticleImg.src = `${PATH}${data.img}`
    lastReadingArticleTitle.textContent = data.judul;
    lastReadingArticleHighlights.textContent = cropedHighlights;

    lastReadingArticleContent.append(lastReadingArticleTitle, lastReadingArticleHighlights);
    lastReadingArticle.append(lastReadingArticleImg, lastReadingArticleContent);
    lastReadingList.append(lastReadingArticle);
    lastReadingContainer.append(lastReadingList)

}

// ========================================================================

if (bodyWidth > 1400){
    navBrand.textContent = '🧠 GoBlog'
} else {
    navBrand.textContent = '🧠'
}

articles.forEach(article => {
    createRecommendationArticles(article);
})

lastReadingArticles.forEach(article => {
    createLastReadingArticle(article)
})